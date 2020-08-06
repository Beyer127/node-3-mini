module.exports = {
    getAirplanes: (req,res) => {
        const db = req.app.get("db")
        db.get_planes().then( airplanes => {
            res.status(200).send(airplanes)
        })
    },
    
        getAirPlaneById: (req,res) => {
            const db = req.app.get("db")
            db.getAirPlaneById([req.params.plane_id])
            .then(plane => {
                res.status(200).send(plane)
            }).catch(err => {
                res.sendStatus(500)
            })
        },
        addAirplane: (req,res) => {
            const db = req.app.get("db")
            const {planeType, passengerCount} = req.body
            db.add_plane([planeType, passengerCount])
            .then(planes => {
                res.status(200).send(planes)
            }).catch(err => {
                console.log(err)
                res.sendStatus(500)
            })
        }
    }