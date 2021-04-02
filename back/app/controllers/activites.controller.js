const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const Activites = db.activites;

exports.allAccess = (req, res) => {
    Activites.findAll().then(activites=>res.json(activites))
    res.status(200).send("Public Content.");
};