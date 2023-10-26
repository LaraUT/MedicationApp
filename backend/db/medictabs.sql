CREATE DATABASE MedicTabs;
USE MedicTabs;



CREATE TABLE Medicamentos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    dosis VARCHAR(100),
    hora_programada TIME NOT NULL,
    seccion ENUM('Mañana','Medio dia','Tarde', 'Noche') NOT NULL,
    ultima_toma DATETIME
);


INSERT INTO Medicamentos (nombre, dosis, hora_programada, seccion, ultima_toma) VALUES 
('Paracetamol', '1 pastilla', '08:00:00', 'Mañana', NULL),
('Naproxeno','1 pastilla','Medio dia',NULL),
('Diclofenaco', '2 pastillas', '15:30:00', 'Tarde', NULL),
('Acido acetil salicilico', '1 pastilla', '21:00:00', 'Noche', NULL),

('Losartan', '1 pastilla', '08:00:00', 'Mañana', NULL),
('Omeprazol','2 pastillas','Medio dia',NULL),
('Ambroxol', '2 pastillas', '15:30:00', 'Tarde', NULL),
('Asinoberase', '1 pastilla', '21:00:00', 'Noche', NULL),

('Ibuprofeno', '1 pastilla', '08:00:00', 'Mañana', NULL),
('Ciprofloxacino','1 pastilla','Medio dia',NULL),
('Metformina', '2 pastillas', '15:30:00', 'Tarde', NULL),

('Simvastatina','1 pastilla','Medio dia',NULL),
('Ibuprofeno', '2 pastillas', '15:30:00', 'Tarde', NULL),
('Salbutamol', '1 pastilla', '21:00:00', 'Noche', NULL);


DELIMITER //
CREATE FUNCTION CalcularSeccion(hora_programada TIME) RETURNS ENUM('Mañana', 'Tarde', 'Noche')
BEGIN
    DECLARE seccion ENUM('Mañana', 'Tarde', 'Noche');
    
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

SELECT * FROM Medicamentos;