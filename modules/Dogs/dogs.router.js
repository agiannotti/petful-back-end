const express = require('express');
const json = require('body-parser').json();

const peopleService = require('../people/people.service');
const dogsService = require('./dogs.service');

const dogsRouter = express.Router();

dogsRouter
  .route('/')
  .get((req, res) => {
    // Return all pets currently up for adoption.
    const dogsForAdoption = dogsService.getAllDogs();
    res.status(200).json(dogsForAdoption);
  })

  .delete((req, res) => {
    // Remove a pet from adoption.
    const dogAdopted = dogsService.dequeueDog();
    peopleService.dequeuePeople();
    res.status(200).json(dogAdopted);
  });

module.exports = dogsRouter;
