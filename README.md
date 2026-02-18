User Management System
Descripción

Este proyecto es un sistema completo de gestión de usuarios que incluye un backend en Spring Boot y un frontend en React.
Permite crear, leer, actualizar y eliminar usuarios (CRUD) con persistencia en PostgreSQL.

Está diseñado para mostrar habilidades en desarrollo full-stack y buenas prácticas de arquitectura y documentación de código.

Tecnologías

Backend: Java, Spring Boot, Spring Data JPA, PostgreSQL

Frontend: React, Axios, React Router (u otras librerías de tu elección)

DTO & Mapper Pattern para separar entidades y datos expuestos por la API

Gestión de excepciones con ResourceNotFoundException

Estructura del proyecto
.
├─ backend               # Proyecto Spring Boot
│  ├─ src/main/java      # Código fuente de backend
│  ├─ src/main/resources # Configuración y archivos estáticos
│  └─ pom.xml            # Dependencias y configuración Maven
├─ frontend              # Proyecto React
│  ├─ src                # Código fuente React
│  └─ package.json       # Dependencias frontend
├─ README.md             # Documentación del proyecto
├─ .gitignore
└─ help.md               # Notas internas

Requisitos

Java 17 o superior

Maven

Node.js y npm / Yarn

PostgreSQL

Funcionalidades

Crear un nuevo usuario

Consultar un usuario por ID

Listar todos los usuarios

Actualizar un usuario existente

Eliminar un usuario

Notas

El backend y el frontend son independientes, lo que permite escalarlos o desplegarlos por separado.

Se usa DTO y Mapper Pattern para separar la lógica interna de la API y los datos expuestos al frontend.

La aplicación está lista para producción con PostgreSQL, pero puede configurarse para H2 u otra base de datos.