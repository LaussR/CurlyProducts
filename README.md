# Sistema de Gestión de Bibliotecas

Este proyecto es una aplicación web desarrollada en **Java** utilizando **Servlets**, **JPA**, **JSP** y **MySQL** (XAMPP) que permite la gestión de usuarios, libros y préstamos en una biblioteca virtual. Fue desarrollado como parte del segundo parcial de Programación Web Backend.

---

## 🌐 Tecnologías Utilizadas
- Java (JDK 8 o superior)
- Java EE (Servlets, JSP)
- JPA con EclipseLink
- Apache Tomcat 9
- Maven
- XAMPP (MySQL y phpMyAdmin)
- NetBeans IDE

---

## 📚 Requerimientos Funcionales
Implementa:
- Registro e inicio de sesión de usuarios
- Gestión de perfil de usuario (actualizar datos, cambiar contraseña)
- Registro, edición y listado de libros
- Préstamos de libros y devoluciones
- Panel de administración para gestionar usuarios y préstamos

---

## 📁 Estructura del Proyecto
```
GestionBiblioteca/
├── pom.xml
├── src/main/java/
│   ├── logica/
│   ├── persistencia/
│   ├── servlet/
├── src/main/resources/META-INF/persistence.xml
├── web/
│   ├── index.jsp
│   ├── login.jsp
│   └── ...
```

---

## ⚖️ Base de Datos

> ⚠️ **Importante:** No se pudo incluir el archivo `biblioteca.sql` porque **phpMyAdmin no estaba funcionando correctamente** durante el desarrollo. Sin embargo, la estructura esperada incluye las siguientes tablas:

- `Usuarios(id_usuario, nombre, apellido, email, contrasena_encriptada, rol)`
- `Libros(id_libro, titulo, autor, anio, ISBN, genero, disponibilidad)`
- `Prestamos(id_prestamo, id_usuario, id_libro, fecha_prestamo, fecha_devolucion, estado)`

Puedes crearla manualmente en MySQL o desde consola.

---

## ⚡ Notas Finales
- No se pudo importar la base de datos desde phpMyAdmin por problemas de conexión.
- El proyecto está diseñado para ampliarse con más funcionalidades según se requiera.

---

## 📚 Autor
Nombre Laura Rozo  
Fecha: Abril 2025


