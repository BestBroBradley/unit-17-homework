const express = require("express")
const logger = require("morgan")
const mongoose = require("mongoose")

const PORT = process.env.PORT || 8080

const db = require("./models")

const app = express()

app.use(logger("dev"))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static("public"))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true })


// GET /api/workouts
app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(data => {
        res.render(data)
    })
    .catch(err => {
        res.json(err)
    })
})

// // PUT /api/workouts
// app.put("api/workouts/:id", ({body}, res) => {
//     console.log(body)
//     db.Workout.create(body)
//     .then(data => {
//         console.log(data)
//         res.status(200).end()
//     })
//     .catch(err => {
//         res.json(err)
//     })
// })

// // POST /api/workouts
app.post("api/workouts", ({body}, res) => {
    console.log(body)
    db.Workout.create(body)
    .then(data => {
        console.log(data)
        res.status(200).end()
    })
    .catch(err => {
        res.json(err)
    })
})

// GET /api/workouts/range


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
})