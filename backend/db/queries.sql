CREATE DATABASE MedicTabs;
USE MedicTabs;

CREATE TABLE Medicamentos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    dosis VARCHAR(100),
    hora_programada TIME NOT NULL,
    seccion ENUM('Mañana','Medio dia','Tarde', 'Noche', 'Cuando sea necesario') NOT NULL,
    SoloNecesario Boolean,
    tomas INT NOT NULL,
    horaTomas INT NOT NULL,
    comentarios VARCHAR(200)
);

INSERT INTO Medicamentos (nombre, dosis, hora_programada, seccion, tomas, horaTomas, comentarios) VALUES
('Paracetamol', '1 pastilla', '08:00:00', 'Mañana',7,8, 'Tomar con comida'),
('Naproxeno', '1 pastilla', '12:00:00', 'Cuando sea necesario',2,12, 'No exceder la dosis recomendada'),
('Diclofenaco', '2 pastillas', '15:30:00', 'Tarde',4,6, 'Tomar después de las comidas'),
('Acido acetil salicilico', '1 pastilla','21:00:00', 'Noche',6,7, 'Evitar tomar con otros medicamentos'),
('Losartan', '1 pastilla', '08:00:00', 'Mañana',9,12, 'Controlar la presión arterial regularmente'),
('Omeprazol', '2 pastillas', '12:00:00', 'Medio día',2,8, 'Tomar antes del desayuno'),
('Ambroxol', '2 pastillas', '15:30:00', 'Tarde', 6,12, 'Beber abundante agua'),
('Sinuberase', '1 pastilla', '21:00:00', 'Noche',8,10, 'Aliviar la congestión nasal'),
('Ibuprofeno', '1 pastilla', '08:00:00', 'Mañana',12,2, 'Tomar con alimentos'),
('Ciprofloxacino', '1 pastilla', '12:00:00', 'Medio día',1,12, 'Completar todo el ciclo de tratamiento'),
('Metformina', '2 pastillas', '15:30:00', 'Tarde',4,12, 'Controlar los niveles de azúcar en sangre'),
('Simvastatina', '1 pastilla', '12:00:00', 'Medio día', 2,8, 'Reducir el colesterol'),
('Ibuprofeno', '2 pastillas', '15:30:00', 'Cuando sea necesario', 3,10, 'Tomar con un vaso de leche'),
('Salbutamol', '1 pastilla', '21:00:00', 'Noche', 10,10, 'Aliviar la dificultad para respirar');


DELIMITER //
CREATE FUNCTION CalcularSeccion(hora_programada TIME, SoloNecesario BOOLEAN) RETURNS ENUM('Mañana','Medio dia', 'Tarde', 'Noche','Cuando sea necesario')
BEGIN
    DECLARE seccion ENUM('Mañana','Medio dia', 'Tarde', 'Noche','Cuando sea necesario');
    
    IF SoloNecesario = TRUE THEN
        SET seccion = 'Cuando sea necesario';
    ELSEIF hora_programada >= '04:00:00' AND hora_programada <= '11:59:59' THEN
        SET seccion = 'Mañana';
    ELSEIF hora_programada >= '12:00:00' AND hora_programada <= '13:59:59' THEN
        SET seccion = 'Medio dia';
    ELSEIF hora_programada >= '14:00:00' AND hora_programada <= '18:59:59' THEN
        SET seccion = 'Tarde';
    ELSE
        SET seccion = 'Noche';
    END IF;
    RETURN seccion;
END //


DELIMITER //
CREATE TRIGGER SetSeccionBeforeInsert
BEFORE INSERT ON Medicamentos
FOR EACH ROW
BEGIN
    SET NEW.seccion = CalcularSeccion(NEW.hora_programada, NEW.SoloNecesario);
END; //

DELIMITER //
CREATE TRIGGER Trigger_ActualizarSeccion
BEFORE UPDATE ON medicamentos FOR EACH ROW
BEGIN
    SET NEW.seccion = CalcularSeccion(NEW.hora_programada, NEW.SoloNecesario);
END; //


SELECT * FROM Medicamentos where seccion = 'Cuando sea necesario';