var photoModel = require('../models/photoModel.js');

/**
 * photoController.js
 *
 * @description :: Server-side logic for managing photos.
 */
module.exports = {

    /**
     * photoController.list()
     */
    list: function (req, res) {
        photoModel.find(function (err, photos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting photo.',
                    error: err
                });
            }
            return res.json(photos);
        });
    },

    /**
     * photoController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        photoModel.findOne({ _id: id }, function (err, photo) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting photo.',
                    error: err
                });
            }
            if (!photo) {
                return res.status(404).json({
                    message: 'No such photo'
                });
            }
            return res.json(photo);
        });
    },

    dodaj: function (req, res) {
        res.render('photo/dodaj');
    },

    /**
     * photoController.create()
     */
    create: function (req, res) {
        var photo = new photoModel({
            name: req.body.name,
            path: 'images/' + req.file.filename,
            likes: parseInt(req.body.likes, 10),
            username: req.body.username,
            date: Date.parse(req.body.date),
            //comments: req.body.comments
            reports: parseInt(req.body.reports, 10)

        });

        photo.save(function (err, photo) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating photo',
                    error: err
                });
            }
            return res.status(201).json(photo);
        });
    },

    /**
     * photoController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        photoModel.findOne({ _id: id }, function (err, photo) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting photo',
                    error: err
                });
            }
            if (!photo) {
                return res.status(404).json({
                    message: 'No such photo'
                });
            }
            //photo.name = req.body.name ? req.body.name : photo.name;
            //photo.path = req.body.path ? req.body.path : photo.path;
            photo.likes = req.body.likes ? parseInt(req.body.likes, 10) : photo.likes;
            //photo.username = req.body.username ? req.body.username : photo.username;
            //photo.date = req.body.date ? req.body.date : photo.date;
            photo.comments = req.body.comments ? JSON.parse(req.body.comments) : photo.comments;
            photo.reports = req.body.reports ? parseInt(req.body.reports, 10) : photo.reports;


            photo.save(function (err, photo) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating photo.',
                        error: err
                    });
                }

                return res.json(photo);
            });
        });
    },

    /**
     * photoController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        photoModel.findByIdAndRemove(id, function (err, photo) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the photo.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    },

    listhot: function (req, res) {
        photoModel.find(function (err, photos) {
            photos.sort((a, b) => a.likes < b.likes ? 1 : -1);
            photos = photos.slice(0, 5);
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting question.',
                    error: err
                })
            }
            res.json(photos);
        });
    },

    listhotold: function (req, res) {
        photoModel.find({}).sort(-date).exec(function (err, photos) {
            //let sorted = mySort(photos); // Sorting here

            // Boilerplate output that has nothing to do with the sorting.
            let response = {};
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting photo.',
                    error: err
                });
            }

            /* var hackerHotScore = decay.hackerHot(gravity);
            var score = [,];
            for (let i = 0; i < photos.length; i++) {
                score[i, photos[i]._id] = hackerHotScore(upVotes, photos[i].date);
                console.log(score[i, photos[i]._id]);
            } */
            //const sortedActivities = photos.slice().sort((a, b) => b.date - a.date);
            response.status = HttpStatus.OK;
            response.message = sorted;
            res.json(photos);
        });
    }

};

function mySort(array) {
    array.sort(function (a, b) {
        let distanceA = a.photo.likes;
        let distanceB = b.photo.reports;

        if (distanceA < distanceB) {
            return -1;
        } else if (distanceA > distanceB) {
            return 1;
        } else {
            return 0;
        }
    })

    return array;
}
