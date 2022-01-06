CREATE DATABASE IF NOT EXISTS taskdb;

USE taskdb;

CREATE TABLE IF NOT EXISTS Tasks(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    PRIMARY KEY (id)
)

INSERT INTO Tasks (title, description) VALUES 
('Tarea 1', 'Alguna descripcion'),
('Tarea 2', 'Alguna descripcion 2');