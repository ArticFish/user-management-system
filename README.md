<h1 align="left">User Management System</h3>
<h3 align="left">Descripción</h3>
<p align="left">
 Este proyecto es un sistema completo de gestión de usuarios que incluye un backend en Spring Boot y un frontend en React.
Permite crear, leer, actualizar y eliminar usuarios (CRUD) con persistencia en PostgreSQL.

Está diseñado para mostrar habilidades en desarrollo full-stack y buenas prácticas de arquitectura y documentación de código.
</p>
<h4 align="left">Tecnologías: </h3>
 <ul>
  <li>Backend: Java, Spring Boot, Spring Data JPA, PostgreSQL</li>
  <li>Frontend: React, Axios, React Router (u otras librerías de tu elección)</li>
  <li>DTO & Mapper Pattern para separar entidades y datos expuestos por la API</li>
  <li>Gestión de excepciones con ResourceNotFoundException</li>
</ul> 
<h4 align="left">Funcionalidades: </h3>
 <ul>
  <li>Crear un nuevo usuario</li>
  <li>Consultar un usuario por ID</li>
  <li>Listar todos los usuarios</li>
  <li>Actualizar un usuario existente</li>
  <li>Eliminar un usuario</li>
</ul> 

<h4 align="left">Estructura del proyecto: </h3>
<pre>
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
</pre>
<h4 align="left">Notas: </h3>
 <ul>
  <li>El backend y el frontend son independientes, lo que permite escalarlos o desplegarlos por separado.</li>
  <li>Se usa DTO y Mapper Pattern para separar la lógica interna de la API y los datos expuestos al frontend.</li>
  <li>La aplicación está lista para producción con PostgreSQL, pero puede configurarse para H2 u otra base de datos.</li>
</ul> 
