CREATE DATABASE MedicTabs;
USE MedicTabs;


CREATE TABLE Medicamentos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    dosis VARCHAR(100),
    hora_programada TIME NOT NULL,
    seccion ENUM('Mañana','Medio dia','Tarde', 'Noche') NOT NULL,
    tomas INT NOT NULL,
    horaTomas INT NOT NULL,
    comentarios VARCHAR(200)
);


INSERT INTO Medicamentos (nombre, dosis, hora_programada, seccion, tomas, horaTomas, comentarios) VALUES
('Paracetamol', '1 pastilla', '08:00:00', 'Mañana',7,8, 'Tomar con comida'),
('Naproxeno', '1 pastilla', '12:00:00', 'Medio día',2,12, 'No exceder la dosis recomendada'),
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
('Ibuprofeno', '2 pastillas', '15:30:00', 'Tarde', 3,10, 'Tomar con un vaso de leche'),
('Salbutamol', '1 pastilla', '21:00:00', 'Noche', 10,10, 'Aliviar la dificultad para respirar');
SELECT * FROM Medicamentos;



DELIMITER //
CREATE FUNCTION CalcularSeccion(hora_programada TIME) RETURNS ENUM('Mañana','Medio dia', 'Tarde', 'Noche')
BEGIN
    DECLARE seccion ENUM('Mañana','Medio dia', 'Tarde', 'Noche');
    
    IF hora_programada >= '06:00:00' AND hora_programada <= '11:59:59' THEN
        SET seccion = 'Mañana';
    ELSEIF hora_programada >= '12:00:00' AND hora_programada <= '17:59:59' THEN
        SET seccion = 'Medio dia';
    ELSEIF hora_programada >= '18:00:00' AND hora_programada <= '21:59:59' THEN
        SET seccion = 'Tarde';
	ELSE
		SET seccion = 'Noche';
    END IF;
    RETURN seccion;
END //

INSERT INTO Medicamentos (nombre, dosis, hora_programada, seccion, ultima_toma)
VALUES ('MEdicina aleatoria', '15 pastillas', '08:00:00', CalcularSeccion(NOW()), Null);


SHOW TABLES;
UPDATE Medicamentos SET horaTomas = 3 ,tomas = 99 WHERE id = 3;
select * from medicamentos where id = 3;

SELECT * FROM Medicamentos where id = 3 ;

UPDATE Medicamentos SET hora_programada = TIME_ADD(hora_programada, INTERVAL 8 HOUR)  WHERE id = 13;

UPDATE medicamentos SET hora_programada = DATE_ADD(hora_programada, INTERVAL 8 HOUR) WHERE id = 28

DELIMITER //
CREATE TRIGGER reset_hora_programada
BEFORE INSERT ON Medicamentos
FOR EACH ROW
BEGIN
    IF TIME_TO_SEC(NEW.hora_programada) >= 86400 THEN
        SET NEW.hora_programada = SEC_TO_TIME(TIME_TO_SEC(NEW.hora_programada) - 86400);
    END IF;
END;
//
DELIMITER ;

UPDATE medicamentos SET hora_programada = ? WHERE id = 13; SELECT * FROM Medicamentos;

DELIMITER //
CREATE TRIGGER enforce_24_hour_format
BEFORE INSERT ON Medicamentos
FOR EACH ROW
BEGIN
    IF TIME_TO_SEC(NEW.hora_programada) >= 86400 THEN
        SET NEW.hora_programada = SEC_TO_TIME(TIME_TO_SEC(NEW.hora_programada) % 86400);
    END IF;
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER enforce_24_hour_format2
BEFORE INSERT ON Medicamentos
FOR EACH ROW
BEGIN
    DECLARE time_seconds INT;
    
    SET time_seconds = TIME_TO_SEC(NEW.hora_programada);
    
    IF time_seconds >= 86400 THEN
        SET time_seconds = time_seconds % 86400;
        SET NEW.hora_programada = SEC_TO_TIME(time_seconds);
    END IF;
END;
//
DELIMITER ;

SELECT hora_programada FROM medicamentos WHERE id = 2;

SELECT tomas,horaTomas  FROM medicamentos WHERE id = 2 ;

SELECT * FROM medicamentos WHERE seccion = 'Mañana' AND tomas != 0;

DELIMITER //
CREATE TRIGGER SetSeccionBeforeInsert
BEFORE INSERT ON Medicamentos
FOR EACH ROW
BEGIN
    SET NEW.seccion = CalcularSeccion(NEW.hora_programada);
END;
//

DELIMITER //
-- Create a BEFORE UPDATE trigger to store the updated hora_programada
CREATE TRIGGER StoreUpdatedHoraProgramada
BEFORE UPDATE ON Medicamentos
FOR EACH ROW
BEGIN
    SET NEW.hora_programada = NEW.hora_programada;
END;
//

DELIMITER //

-- Create a BEFORE UPDATE trigger to store the updated hora_programada
CREATE TRIGGER StoreUpdatedHoraProgramada1
BEFORE UPDATE ON Medicamentos
FOR EACH ROW
BEGIN
    -- Store the updated hora_programada in a user-defined variable
    SET @new_hora_programada = NEW.hora_programada;
END;
//

DELIMITER ;


DELIMITER //
CREATE TRIGGER PinchePerraMamada  


DELIMITER //
CREATE TRIGGER Trigger_ActualizarSeccion
BEFORE UPDATE ON medicamentos FOR EACH ROW
BEGIN
    SET NEW.seccion = CalcularSeccion(NEW.hora_programada);
END //
DELIMITER ;


DELIMITER ;
INSERT INTO Medicamentos (nombre, dosis, hora_programada, tomas, horaTomas, comentarios)
VALUES ('New Medicamento', '1 pastilla', NOW(), 2, 12, 'Sample Comment');
select * from medicamentos;