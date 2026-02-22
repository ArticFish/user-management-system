# 👥 User Management System

Sistema full-stack de gestión de usuarios desarrollado con **Spring Boot** en el backend y **React + Vite** en el frontend. Diseñado con buenas prácticas de arquitectura, separación de capas y código limpio.

---

## 🚀 Demo

> 🔧 *Deploy en progreso — disponible próximamente*

---

## 🛠️ Tecnologías

| Capa | Tecnología |
|------|-----------|
| Backend | Java 17, Spring Boot, Spring Data JPA, Spring Web, Lombok |
| Base de datos | PostgreSQL |
| Frontend | React, Vite, JavaScript, React Router, Axios |
| Arquitectura | REST API, DTO Pattern, Mapper Pattern |
| Manejo de errores | ResourceNotFoundException |

---

## ✨ Funcionalidades

- ✅ Crear usuario
- ✅ Consultar usuario por ID
- ✅ Listar todos los usuarios
- ✅ Actualizar usuario existente
- ✅ Eliminar usuario
- ✅ Manejo de errores con respuestas HTTP apropiadas (404, 400, 500)
- ✅ Separación de entidades y datos expuestos mediante DTOs

---

## 📁 Estructura del Proyecto

```
.
├── backend/                        # API REST con Spring Boot
│   ├── src/main/java/
│   │   └── net/user_management-system/
│   │       ├── config/             # Configuración de seguridad (CSRF)
│   │       ├── user/               # User.java, UserController, UserRepository, UserService, UserServiceImpl
│   │       ├── usermapper/         # Mapper entre entidad y DTO
│   │       ├── dto/                # UserDTO.java
│   │       └── exception/          # Manejo de excepciones
│   ├── src/main/resources/
│   │   └── application.properties
│   └── pom.xml
├── frontend/                       # SPA con React + Vite
│   ├── src/
│   │   ├── components/
│   │   │   ├── HeaderComponent.jsx
│   │   │   ├── FooterComponent.jsx
│   │   │   ├── ListUserComponent.jsx  # Tabla con listado, edición y eliminación
│   │   │   └── UserComponent.jsx      # Formulario reutilizable (crear y editar)
│   │   ├── services/               # Llamadas a la API
│   │   └── App.jsx                 # Rutas con React Router
│   └── package.json
└── README.md
```

---

## ⚙️ Configuración y Ejecución Local

### Requisitos previos

- Java 17+
- Node.js 18+
- PostgreSQL 14+
- Maven

### 1. Clonar el repositorio

```bash
git clone https://github.com/ArticFish/nombre-del-repo.git
cd nombre-del-repo
```

### 2. Configurar variables de entorno — Backend

Crea un archivo `.env` o configura las siguientes variables en tu entorno:

```env
DB_URL=jdbc:postgresql://localhost:5432/usermanagement
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_contraseña
```

El archivo `application.properties` las consume así:

```properties
spring.datasource.url=${DB_URL}
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}
spring.jpa.hibernate.ddl-auto=update
```

### 3. Levantar el Backend

```bash
cd backend
mvn spring-boot:run
```

API disponible en: `http://localhost:8080`

### 4. Levantar el Frontend

```bash
cd frontend
npm install
npm run dev
```

App disponible en: `http://localhost:5173`

---

## 📡 Endpoints de la API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/users` | Listar todos los usuarios |
| GET | `/api/users/{id}` | Obtener usuario por ID |
| POST | `/api/users` | Crear nuevo usuario |
| PUT | `/api/users/{id}` | Actualizar usuario |
| DELETE | `/api/users/{id}` | Eliminar usuario |

### Ejemplo de request (POST `/api/users`)

```json
{
  "name": "Braulio Cid",
  "email": "braulio@email.com"
}
```

### Ejemplo de response exitosa

```json
{
  "id": 1,
  "name": "Braulio Cid",
  "email": "braulio@email.com"
}
```

### Ejemplo de error (usuario no encontrado)

```json
{
  "status": 404,
  "message": "User not found with given id: 99"
}
```

---

## 🏗️ Decisiones de Arquitectura

**DTO Pattern:** Las entidades JPA nunca se exponen directamente en la API. Se usan DTOs para controlar qué datos entran y salen, lo que mejora la seguridad y el desacoplamiento.

**Separación de capas:** Controller → Service → Repository, siguiendo principios de Clean Code y responsabilidad única (SOLID).

**Manejo de excepciones:** Se usa `ResourceNotFoundException` para retornar respuestas HTTP 404 claras cuando un usuario no existe.

**Configuración de seguridad:** Se incluye configuración explícita de CSRF mediante Spring Security, protegiendo la API contra ataques de tipo Cross-Site Request Forgery desde el inicio del proyecto.

**Validación en dos capas:** El backend valida los datos entrantes con Bean Validation de Jakarta (`@NotBlank`, `@Email`) directamente sobre el DTO, no sobre la entidad. El frontend agrega una primera capa de validación nativa del navegador con `type="email"` y `required`, evitando requests innecesarios al servidor.

**Inyección de dependencias por constructor:** Se usa Lombok (`@AllArgsConstructor`) para generar automáticamente el constructor, aplicando inyección por constructor en vez de `@Autowired`, que es la práctica recomendada en Spring ya que facilita el testing y hace las dependencias explícitas.

**Formulario reutilizable:** El componente `UserComponent` maneja tanto la creación como la edición de usuarios en un solo componente, detectando la presencia del `id` en los parámetros de la ruta para determinar el comportamiento.

**Capa de servicios en el frontend:** Todas las llamadas HTTP están centralizadas en `UserService.js` usando Axios, con la URL base configurada via variable de entorno `VITE_API_URL`. Esto desacopla la lógica de comunicación con la API de los componentes React y permite cambiar el entorno (local, producción) sin modificar el código.

---

## 👨‍💻 Autor

**Braulio Cid**  
Desarrollador de Software Junior | Java Spring Boot | React  
[LinkedIn](https://www.linkedin.com/in/braulio-cid-7559103a9/) · [GitHub](https://github.com/ArticFish)
