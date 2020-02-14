const router = require("express").Router()
const db = require("../models")

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

// // PUT /api/workouts
// router.put("api/workouts/:id", ({body}, res) => {

//     //findByIdandUpdate

//     console.log(body)
//     db.Workout(body)
//     .then(data => {
//         res.status(200).end()
//     })
//     .catch(err => {
//         res.json(err)
//     })
// })

// // POST /api/workouts
router.post("api/workouts", (req, res) => {
    db.Workout.create({})
    .then(data => {
        console.log(data)
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

// GET /api/workouts/range
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

module.exports = router