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
router.put("api/workouts/:id", ({body}, res) => {
    db.Workout.findByIdAndUpdate({__id: req.params.id}, { $push: {exercises: body}})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    })

// // POST /api/workouts
router.post("api/workouts", (req, res) => {
    const workout = new db.Workout()
    workout.getDuration()
    db.Workout.create(workout)
    .then(data => {
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