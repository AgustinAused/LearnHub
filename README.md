# LearnHub

## Proyecto final de la materia Aplicaciones Interactivas 
### Integrantes:
- [x] 1. Agustin Aused
- [x] 2. Alejandro Biarrieta 

### Descripción del proyecto
El proyecto consiste en un marketplace de servicios de todo tipo, en el cual los usuarios pueden registrarse y ofrecer sus servicios, así como también pueden contratar los servicios de otros usuarios. El proyecto está desarrollado en con la libreria React complementado con el framework Next JS, utilizando el lenguaje de programación JavaScript, y la base de datos utilizada es mongoDB.

El backend esta hecho en Node JS con las librerias de mongoose para administrar la base de datos.
El frontend se hizo en react, y el frontend es una pagina web que permite a los usuarios registrarse o logue
arse, y una vez logueado, puede ver los servicios que ofrece administrarlos, modificarlos.


### Funcionalidades
- [x] 1. Registro de profesor
- [x] 2. Login de profesor
- [x] 3. Publicación de servicios
- [x] 4. Contratación de servicios
- [x] 5. Calificación de servicios
- [x] 6. Visualización de servicios
- [x] 7. Buscar servicio con filtros
- [x] 8. Visualización de servicios contratados
- [x] 9. Visualización de contrataciones
- [x] 10. Visualización de calificaciones
- [x] 11. Visualización de perfil de profesor
- [x] 12. Visualización de perfil de servicio
- [x] 13. Verifición de comentarios coherentes



### Tecnologías utilizadas
- [x] 1. React
- [x] 2. JavaScript
- [x] 3. Node JS
- [x] 4. Express
- [x] 5. Next JS

### Paleta de colores
- https://coolors.co/070c0d-5c9ead-ffffff-326273-90a8b1-eeeeee-e39774

### Requisitos
- [x] 1. Node.js
- [x] 2. npm

### Carpetas:
- learn-hub-express (Back)
- learn-hub-next (Front)
  
### Instalación
Para poder correr el proyecto, es necesario tener instalado Node.js y npm. Una vez instalados, se debe clonar el repositorio y ejecutar el siguiente comando en la carpeta raíz del proyecto en ambas carpetas (Express y Next JS)(Back-Front):
``` npm install ```

### Ejecución   
Para ejecutar el proyecto, se debe ejecutar el siguiente comando en la carpeta raíz del proyecto:  
``` npm start ```  *En el Back Express*  
``` npm run dev ```*En el Front Next JS*

### Uso
Para poder utilizar el proyecto, se debe acceder a la siguiente URL: http://localhost:3000/

### Contribución
Para contribuir al proyecto, se debe crear un pull request con las modificaciones realizadas.

### Licencia
MIT License

### Estado del proyecto
El proyecto se encuentra en diseño y desarrollo.

### Link a Figma:
Este figma no se terminó por completo pero nos sirvió para guiarnos en el flujo de funcionamiento de la pagina

https://www.figma.com/file/sHrLSHBfSbZZN1novycjGd/Flujo-Learn-hub?type=design&node-id=0%3A1&mode=design&t=UFpjwCXLXKHAaSq8-1


### Capturas de pantalla Services Page

### Desktop 

![image](https://github.com/AgustinAused/LearnHub/assets/103573136/9f3e8e6a-921c-46e4-92f9-8d52b1cd09d5)

### Mobile

![image](https://github.com/AgustinAused/LearnHub/assets/103573136/5d775b7a-2650-4269-8fe6-c97bd87f7caf)

## Diagrama de base de datos
### Colecciones
```json
  "Comentarios": {
    "name": "String",
    "content": "String",
    "email": "String",
    "score": "String",
    "date": "Date",
    "state": "String"
  },
  "Contrataciones": {
    "serviceType": "String",
    "name": "String",
    "lastName": "String",
    "email": "String",
    "telephone": "String",
    "hour": "String",
    "message": "String",
    "totalCost": "String",
    "state": "String"
  },
  "Servicios": {
    "name": "String",
    "description": "String",
    "price": "String",
    "responsable": "ObjectId",
    "image": {
      "data": "Buffer",
      "contentType": "String"
    },
    "date": "Date",
    "state": "String",
    "frequency": "String",
    "duration": "String",
    "category": "String",
    "classType": "String",
    "comments": ["ObjectId"],
    "hiring": ["ObjectId"]
  },
  "Usuarios": {
    "name": "String",
    "email": "String",
    "password": "String",
    "creationDate": "Date",
    "degree": "String",
    "expirience": "String",
    "phono": "String",
    "services": ["ObjectId"],
    "image": "String"
  }
```
### Relaciones
      Servicios -> Comentarios
      Servicios -> Contrataciones
      Servicios -> Usuario
      Usuario -> Servicios

### Documentacion de la Api Y test
https://documenter.getpostman.com/view/30953058/2s9Ykn7gsA



