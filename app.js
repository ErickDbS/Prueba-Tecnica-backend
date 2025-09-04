import express from 'express';
import 'dotenv/config'
import bodyParser from 'body-parser';
import dbClient from './config/dbClient.js';
import routeCharacters from './routes/characters.js';
import routePlanets from './routes/planets.js'
import routeFilms from './routes/films.js'
import routeSpecies from './routes/species.js'
import routeStarships from './routes/starships.js'
import routeVehicles from './routes/vehicles.js'


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/characters', routeCharacters)
app.use('/planets', routePlanets)
app.use('/films', routeFilms)
app.use('/species', routeSpecies)
app.use('/starships', routeStarships)
app.use('/vehicles', routeVehicles)



try {
    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
} catch (e) {
    console.error(e)
}

process.on('SIGINT', async() => {
    dbClient.disconnectDB()
    process.exit(0)
})