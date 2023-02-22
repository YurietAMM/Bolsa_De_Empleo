# Bolsa_De_Empleo
Aplicativo creado con .net 6 y react js 18.2.0

Archivo SQL

create database BolsaEmpleoDB;

use BolsaEmpleoDB;

--creando tabla Tipo de documento
create table Tipo_Documento(
idTipoDocumento int primary key identity(1,1),
nombre varchar(50)
);

--insertando datos en la tabla Tipo de documento
insert into Tipo_Documento(nombre)
values (
'Cedula de Ciudadania');

insert into Tipo_Documento(nombre)
values (
'Cedula de Extranjeria');

insert into Tipo_Documento(nombre)
values (
'Pasaporte');

insert into Tipo_Documento(nombre)
values (
'Otro');

--creando tabla Ciudadanos
create table Ciudadanos(
idCiudadano int primary key identity(1,1),
idTipoDocumento int,
numeroDocumento int,
nombres varchar(50),
apellidos varchar(50),
fechaNacimiento date,
profesion varchar(60),
aspiracionSalarial bigint,
correoElectronico varchar(50),
--Estableciendo llave foranea
constraint FK_Ciudadanos_idTipoDocumento foreign key (idTipoDocumento) references Tipo_Documento (idTipoDocumento)
);

--creando tabla Vacantes ofertadas
create table Vacantes (
idVacante int primary key identity(1,1),
codigo varchar(10),
cargo varchar(50),
descripcion varchar(200),
empresa varchar(50),
salario bigint
);

--Llenando datos de la tabla vacantes ofertadas
insert into Vacantes (codigo, cargo, descripcion, empresa, salario)
values (
'RS001', 
'Ingeniero Industrial', 
'Se requiere Ingeniero Industrial con mínimo 2 años de experiencia en Salud Ocupacional', 
'EPM', 
'2500000');

insert into Vacantes (codigo, cargo, descripcion, empresa, salario)
values (
'RS002', 
'Profesor de Química', 
'Se requiere Químico con mínimo 3 años de experiencia en docencia', 
'INSTITUCIÓN EDUCATIVA IES', 
'1900000');

insert into Vacantes (codigo, cargo, descripcion, empresa, salario)
values (
'RS003', 
'Ingeniero de Desarrollo Junior', 
'Se requiere Ingeniero de Sistemas con mínimo 1 año de experiencia en Desarrollo de Software en tecnología JAVA', 
'XRM SERVICES', 
'2600000');

insert into Vacantes (codigo, cargo, descripcion, empresa, salario)
values (
'RS004', 
'Coordinador de Mercadeo', 
'Se necesita Coordinador de Mercadeo con estudios Tecnológicos graduado y experiencia mínima de un año', 
'INSERCOL', 
'1350000');

insert into Vacantes (codigo, cargo, descripcion, empresa, salario)
values (
'RS005', 
'Profesor de Matemáticas', 
'Se requiere Licenciado en Matemáticas o Ingeniero con mínimo 2 años de experiencia en docencia', 
'SENA', 
'1750000');

insert into Vacantes (codigo, cargo, descripcion, empresa, salario)
values (
'RS006', 
'Mensajero', 
'Se requiere Mensajero con moto, con documentos al día y buenas relaciones personales', 
'SERVIENTREGA', 
'950000');

insert into Vacantes (codigo, cargo, descripcion, empresa, salario)
values (
'RS007', 
'Cajero', 
'Se requiere cajero para almacén de cadena con experiencia mínima de un año, debe disponer de tiempo por cambios de turnos', 
'ALMACENES ÉXITO', 
'850000');

--Creando tabla de Aplicaciones a vacantes
create table Aplicaciones (
idAplicacion int primary key identity(1,1),
idVacante int,
idCiudadano int
--Estableciendo llaves foraneas
constraint FK_Aplicaciones_idVacante foreign key (idVacante) references Vacantes (idVacante),
constraint FK_Aplicaciones_idCiudadano foreign key (idCiudadano) references Ciudadanos (idCiudadano)
);
