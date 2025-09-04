import axios from 'axios'
import mongoose from 'mongoose'
import 'dotenv/config'

import Character from '../Schemas/characterScheme.js'
import Species from '../Schemas/speciesScheme.js'
import Film from '../Schemas/filmsScheme.js'
import Starship from '../Schemas/starshipsScheme.js'
import Vehicle from '../Schemas/vehiclesScheme.js'
import Planet from '../Schemas/planetsSchema.js'

const MONGO_URI = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/swapi?retryWrites=true&w=majority`
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
await mongoose.connect(MONGO_URI)
console.log('MongoDB connected')

async function fetchAll(url) {
    let results = []
    while (url) {
        const { data } = await axios.get(url)
        results = results.concat(data.results)
        url = data.next
    }
    return results
}

async function importAll() {
    await Film.deleteMany({});
    await Planet.deleteMany({});
    await Species.deleteMany({});
    await Starship.deleteMany({});
    await Vehicle.deleteMany({});
    await Character.deleteMany({});

    const films = await fetchAll(`${process.env.API_URL}/films/`)
    const filmMap = {}
    for (const f of films) {
        const doc = await Film.create({
            title: f.title,
            director: f.director,
            producer: f.producer,

        })
        filmMap[f.url] = doc._id
    }

    const planets = await fetchAll(`${process.env.API_URL}/planets/`)
    const planetMap = {}
    for (const p of planets) {
        const doc = await Planet.create({
            name: p.name,
            diameter: Number(p.diameter) || undefined,
            rotation_period: Number(p.rotation_period) || undefined,
            orbital_period: Number(p.orbital_period) || undefined,
            gravity: p.gravity,
            population: Number(p.population) || undefined,
            climate: p.climate,
            terrain: p.terrain,
            surface_water: Number(p.surface_water) || undefined,
            films: p.films.map(url => filmMap[url]).filter(Boolean)
        })
        planetMap[p.url] = doc._id
    }

    const species = await fetchAll(`${process.env.API_URL}/species/`)
    const speciesMap = {}
    for (const s of species) {
        const doc = await Species.create({
            name: s.name,
            classification: s.classification,
            designation: s.designation,
            average_height: Number(s.average_height) || undefined,
            average_lifespan: Number(s.average_lifespan) || undefined,
            eye_colors: s.eye_colors,
            hair_colors: s.hair_colors,
            skin_colors: s.skin_colors,
            language: s.language,
            films: s.films.map(url => filmMap[url]).filter(Boolean),
        })
        speciesMap[s.url] = doc._id
    }

    const starships = await fetchAll(`${process.env.API_URL}/starships/`)
    const starshipMap = {}
    for (const s of starships) {
        const doc = await Starship.create({
            name: s.name,
            model: s.model,
            starship_class: s.starship_class,
            length: Number(s.length) || undefined,
            passengers: Number(s.passengers) || undefined,
            max_atmosphering_speed: Number(s.max_atmosphering_speed) || undefined,
            hyperdrive_rating: Number(s.hyperdrive_rating) || undefined,
            MGLT: Number(s.MGLT) || undefined,
            cargo_capacity: Number(s.cargo_capacity) || undefined,
            consumables: s.consumables,
            films: s.films.map(url => filmMap[url]).filter(Boolean)
        })
        starshipMap[s.url] = doc._id
    }

    const vehicles = await fetchAll(`${process.env.API_URL}/vehicles/`)
    const vehicleMap = {}
    for (const v of vehicles) {
        const doc = await Vehicle.create({
            name: v.name,
            model: v.model,
            vehicle_class: v.vehicle_class,
            length: Number(v.length) || undefined,
            passengers: Number(v.passengers) || undefined,
            max_atmosphering_speed: Number(v.max_atmosphering_speed) || undefined,
            cargo_capacity: Number(v.cargo_capacity) || undefined,
            consumables: v.consumables,
            films: v.films.map(url => filmMap[url]).filter(Boolean)
        })
        vehicleMap[v.url] = doc._id
    }

    const people = await fetchAll(`${process.env.API_URL}/people/`)
    const characterMap = {}
    for (const p of people) {
        const doc = await Character.create({
            name: p.name,
            birth_year: p.birth_year,
            eye_color: p.eye_color,
            gender: p.gender,
            hair_color: p.hair_color,
            skin_color: p.skin_color,
            height: Number(p.height) || undefined,
            mass: Number(p.mass) || undefined,
            homeworld: planetMap[p.homeworld],
            films: p.films.map(url => filmMap[url]).filter(Boolean),
            species: p.species.map(url => speciesMap[url]).filter(Boolean),
            vehicles: p.vehicles.map(url => vehicleMap[url]).filter(Boolean),
            starships: p.starships.map(url => starshipMap[url]).filter(Boolean),
            created: p.created,
            edited: p.edited,
            url: p.url.trim()
        })
        characterMap[p.url] = doc._id
    }


    for (const f of films) {

        const characters = []
        for (const url of f.characters) {
            const char = await Character.findOne({ url })
            if (char) characters.push(char._id)
        }
        const planetsArr = f.planets.map(url => planetMap[url]).filter(Boolean)
        const starshipsArr = f.starships.map(url => starshipMap[url]).filter(Boolean)
        const vehiclesArr = f.vehicles.map(url => vehicleMap[url]).filter(Boolean)
        const speciesArr = f.species.map(url => speciesMap[url]).filter(Boolean)

        await Film.findByIdAndUpdate(filmMap[f.url], {
            characters,
            planets: planetsArr,
            starships: starshipsArr,
            vehicles: vehiclesArr,
            species: speciesArr
        })
    }

    for (const p of planets) {
        const residents = p.residents
            .map(url => characterMap[url])
            .filter(Boolean)

        await Planet.findByIdAndUpdate(planetMap[p.url], { residents })
    }


    for (const s of species) {
        const characters = []
        for (const url of s.people) {
            const char = await Character.findOne({ url })
            if (char) characters.push(char._id)
        }
        await Species.findByIdAndUpdate(speciesMap[s.url], { characters })
    }

    for (const s of starships) {
        const pilots = []
        for (const url of s.pilots) {
            const char = await Character.findOne({ url })
            if (char) pilots.push(char._id)
        }
        await Starship.findByIdAndUpdate(starshipMap[s.url], { pilots })
    }

    for (const v of vehicles) {
        const pilots = []
        for (const url of v.pilots) {
            const char = await Character.findOne({ url })
            if (char) pilots.push(char._id)
        }
        await Vehicle.findByIdAndUpdate(vehicleMap[v.url], { pilots })
    }

    console.log('Importación completada')
    mongoose.disconnect()
}


importAll().catch(e => {
    console.error(e)
    mongoose.disconnect()
})