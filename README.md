# Prueba-Tecnica-backend
En esta prueba se creo un backend con los endpoints solicitados, se importan los datos de la api publica swapi
y se agregan nuevos endpoints que arrojan los datos de forma diferente.

# Tecnologias Usadas
NodeJs
ExpressJs
MongoDB(con Atlas web)
Mongoose
JavaScript
Axios

# Como probarlo
clona el repositorio:

git clone https://github.com/ErickDbS/Prueba-Tecnica-backend.git

En la raiz del proyecto crea un .env o copia y pega el .env que se le envio

La base de datos ya esta poblada

en tu terminal ejectuta:

npm install -> instala las dependencias

node app.js -> ejecuta el proyecto

Si todo esta bien te debe de salir un mensaje como este:

Server Running on Port: 5100

# Probar endpoints
GETS:

http://localhost:5100/characters -> te muestra a todos los personajes de 10 en 10 paginados.

http://localhost:5100/characters/search?{algun nombre de un personaje} -> busca a un personaje por su nombre

http://localhost:5100/characters/{id} -> busca a un personaje por su id

POST:
http://localhost:5100/characters -> crea un personaje

PUT:
http://localhost:5100/characters/{id} -> actualiza un personaje

DELETE:
http://localhost:5100/characters/{id} -> borra un personaje

Para los demas endpoints solo cambia character por alguno de estos: films, planets, starships, vehicles, species.

Todos los endpoint excepto characters tiene esta ruta:

http://localhost:5100/films/name -> asi con cada una films, specie, starships, vehicles, planets.
 