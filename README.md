# Prueba-Tecnica-backend

En esta prueba se creó un backend con los endpoints solicitados. Se importan los datos de la API pública **SWAPI**  
y se agregan nuevos endpoints que muestran la información de forma diferente.

---

## Tecnologías usadas
- Node.js  
- Express.js  
- MongoDB (con Atlas)  
- Mongoose  
- JavaScript  
- Axios  

---

## Cómo probarlo

Clona el repositorio:

```bash
git clone https://github.com/ErickDbS/Prueba-Tecnica-backend.git
```

En la raíz del proyecto crea un archivo .env o copia y pega el .env que se te envió.

La base de datos ya está poblada.

En tu terminal ejecuta:

npm install -> instala las dependencias

node app.js -> ejecuta el proyecto

Si todo esta bien te debe de salir un mensaje como este:

Server Running on Port: 5100

# Probar endpoints

GET

http://localhost:5100/characters → Muestra a todos los personajes de 10 en 10 (paginados).

http://localhost:5100/characters/search?{nombre} → Busca a un personaje por su nombre.

http://localhost:5100/characters/{id} → Busca a un personaje por su ID.

POST

http://localhost:5100/characters → Crea un personaje.

PUT

http://localhost:5100/characters/{id} → Actualiza un personaje.

DELETE

http://localhost:5100/characters/{id} → Elimina un personaje.

# Otros endpoints

Para los demás recursos, solo cambia characters por alguno de estos:

films

planets

starships

vehicles

species

```bash
http://localhost:5100/films/name
```
Lo mismo aplica para species, starships, vehicles y planets.
