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
'C�dula de Ciudadan�a');

insert into Tipo_Documento(nombre)
values (
'C�dula de Extranjer�a');

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
fechaNacimiento varchar(50),
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
'Se requiere Ingeniero Industrial con m�nimo 2 a�os de experiencia en Salud Ocupacional', 
'EPM', 
'2500000');

insert into Vacantes (codigo, cargo, descripcion, empresa, salario)
values (
'RS002', 
'Profesor de Qu�mica', 
'Se requiere Qu�mico con m�nimo 3 a�os de experiencia en docencia', 
'INSTITUCI�N EDUCATIVA IES', 
'1900000');

insert into Vacantes (codigo, cargo, descripcion, empresa, salario)
values (
'RS003', 
'Ingeniero de Desarrollo Junior', 
'Se requiere Ingeniero de Sistemas con m�nimo 1 a�o de experiencia en Desarrollo de Software en tecnolog�a JAVA', 
'XRM SERVICES', 
'2600000');

insert into Vacantes (codigo, cargo, descripcion, empresa, salario)
values (
'RS004', 
'Coordinador de Mercadeo', 
'Se necesita Coordinador de Mercadeo con estudios Tecnol�gicos graduado y experiencia m�nima de un a�o', 
'INSERCOL', 
'1350000');

insert into Vacantes (codigo, cargo, descripcion, empresa, salario)
values (
'RS005', 
'Profesor de Matem�ticas', 
'Se requiere Licenciado en Matem�ticas o Ingeniero con m�nimo 2 a�os de experiencia en docencia', 
'SENA', 
'1750000');

insert into Vacantes (codigo, cargo, descripcion, empresa, salario)
values (
'RS006', 
'Mensajero', 
'Se requiere Mensajero con moto, con documentos al d�a y buenas relaciones personales', 
'SERVIENTREGA', 
'950000');

insert into Vacantes (codigo, cargo, descripcion, empresa, salario)
values (
'RS007', 
'Cajero', 
'Se requiere cajero para almac�n de cadena con experiencia m�nima de un a�o, debe disponer de tiempo por cambios de turnos', 
'ALMACENES �XITO', 
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
