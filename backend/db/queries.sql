CREATE DATABASE MedicTabs;
USE MedicTabs;

CREATE TABLE usuarios(
	id INT PRIMARY KEY AUTO_INCREMENT,
    correo VARCHAR(80) NOT NULL UNIQUE,
    nombre VARCHAR(20) NOT NULL,
    contrasena VARCHAR(200) NOT NULL,
    fecha_creacion TIME DEFAULT NOW()
);

INSERT INTO usuarios (correo, nombre,contrasena,fecha_creacion) VALUES ('OctavioCC@gmail.com','Octavio','Patito',NOW()),
																	   ('Elizabethct@gmail.com','Eli <3','Patito2',NOW());
                                                                
SELECT * FROM usuarios;                                                                
                                                                
CREATE TABLE perfiles(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nombre_perfil VARCHAR(25) NOT NULL,
    Id_Usuario INT NOT NULL,
		FOREIGN KEY (Id_Usuario) REFERENCES usuarios(id)
);

INSERT INTO perfiles (nombre_perfil, Id_Usuario) VALUES 
	('Mama', 1),
    ('Papa', 2),
    ('Yo',1),
    ('Yo',2);
SELECT * FROM perfiles WHERE Id_Usuario = 2;

CREATE TABLE Medicamentos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    dosis VARCHAR(100),
    hora_programada TIME,
    fecha_programada VARCHAR(14) DEFAULT NOW(),
    seccion ENUM('Mañana', 'Medio dia', 'Tarde', 'Noche', 'Cuando sea necesario') NOT NULL,
    SoloNecesario BOOLEAN,
    tomas INT NOT NULL,
    horaTomas INT NOT NULL,
    comentarios VARCHAR(200) DEFAULT 'Sin comentarios adicionales',
    Id_Perfil INT,
    FOREIGN KEY (Id_Perfil) REFERENCES perfiles(id)
);


DELIMITER //
CREATE FUNCTION CalcularSeccion(hora_programada TIME, SoloNecesario BOOLEAN) RETURNS ENUM('Mañana','Medio dia', 'Tarde', 'Noche','Cuando sea necesario')
BEGIN
    DECLARE seccion ENUM('Mañana','Medio dia', 'Tarde', 'Noche','Cuando sea necesario');
    
    IF SoloNecesario = 1 THEN
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

INSERT INTO Medicamentos (nombre, dosis, hora_programada, fecha_programada, seccion, SoloNecesario, tomas, horaTomas, comentarios,Id_Perfil) VALUES
('Paracetamol', '1 pastilla', '08:00:00','29-10-2023', 'Mañana', false, 7, 8, 'Tomar con comida',1),
('Naproxeno', '1 pastilla', '12:00:00','29-10-2023', 'Cuando sea necesario', false, 2, 12, 'No exceder la dosis recomendada',2),
('Diclofenaco', '2 pastillas', '15:30:00','29-10-2023', 'Tarde', false, 4, 6, 'Tomar después de las comidas',3),
('Acido acetil salicilico', '1 pastilla', '21:00:00', '29-10-2023', 'Noche', true, 6, 7, 'Evitar tomar con otros medicamentos',4),
('Losartan', '1 pastilla', '08:00:00', '29-10-2023', 'Mañana', false, 9, 12, 'Controlar la presión arterial regularmente',4),
('Omeprazol', '2 pastillas', '12:00:00', '29-10-2023', 'Medio día', true, 2, 8, 'Tomar antes del desayuno',3),
('Ambroxol', '2 pastillas', '15:30:00', '29-10-2023', 'Tarde', false, 6, 12, 'Beber abundante agua',2),
('Sinuberase', '1 pastilla', '21:00:00', '29-10-2023', 'Noche', true, 8, 10, 'Aliviar la congestión nasal',1),
('Ibuprofeno', '1 pastilla', '08:00:00', '29-10-2023', 'Mañana', false, 12, 2, 'Tomar con alimentos',1),
('Ciprofloxacino', '1 pastilla', '12:00:00', '29-10-2023', 'Medio día', false, 1, 12, 'Completar todo el ciclo de tratamiento',2),
('Metformina', '2 pastillas', '15:30:00', '29-10-2023', 'Tarde', false, 4, 12, 'Controlar los niveles de azúcar en sangre',3),
('Simvastatina', '1 pastilla', '12:00:00', '29-10-2023', 'Medio día', false, 2, 8, 'Reducir el colesterol',4),
('Ibuprofeno', '2 pastillas', '15:30:00', '29-10-2023', 'Cuando sea necesario', false, 3, 10, 'Tomar con un vaso de leche',4),
('Salbutamol', '1 pastilla', '21:00:00', '29-10-2023', 'Noche', false, 10, 10, 'Aliviar la dificultad para respirar',3);

SELECT * FROM Medicamentos WHERE Id_Perfil = 1;

INSERT INTO Medicamentos (nombre, dosis, hora_programada, fecha_programada, seccion, SoloNecesario, tomas, horaTomas) VALUES
('Prueba', '1 pastilla', '21:00:00', '29-10-2023', 'Noche', false, 10, 10);

SELECT * FROM medicamentos WHERE seccion = 'Mañana' AND tomas >=0

CREATE TABLE MedicamentosNombres(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(40) UNIQUE,
    usado BOOLEAN DEFAULT false
);

INSERT INTO MedicamentosNombres (nombre) VALUES 
('Paracetamol'), ('Naproxeno'), ('Metformina'), ('Diclofenaco'), ('Acido Acetil salicilico'),
('Salbutamol'), ('Losartan'), ('Ambroxol'), ('Sinuberase'),('Ibuprofeno'), 
('Ciprofloxacino'), ('Simvastatina'), ('Amoxicilina'), ('Omeprazol'),
('Atorvastatina'), ('Loratadina'), ('Sertralina'), ('Pantoprazol'), ('Lorazepam'), 
('Paroxetina'),  ('Metronidazol'), ('Lisinopril'), ('Cetirizina'), ('Prednisona'),
('Hidroclorotiazida'), ('Metoprolol'), ('Levotiroxina'), ('Amlodipina'), ('Escitalopram'),
('Furosemida'), ('Clonazepam'), ('Warfarina'), ('Carbamazepina'), ('Risperidona'),
('Mirtazapina'), ('Valsartan'), ('Salmeterol'), ('Candesartan'), ('Fenitoína'),
('Fluoxetina'), ('Zolpidem'), ('Duloxetina'), ('Lisinopril-Hidroclorotiazida'),
('Venlafaxina');

SELECT * FROM Medicamentos WHERE Id_Perfil = 1;





insert into usuarios (correo, nombre,contrasena,fecha_creacion) values ('correo@algo.com','nombre','contrasena',NOW())
select * from medicamentos where id_Usuario = 1
select * from usuarios;
SELECT * FROM medicamentos WHERE seccion = 'Cuando sea necesario' AND tomas > 0 AND Id_Usuario = 1

