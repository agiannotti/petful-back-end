const express = require('express');
const json = require('body-parser').json();

const peopleService = require('./people.service');

const peopleRouter = express.Router();

peopleRouter
  .route('/')
  .get((req, res) => {
    // Return all the people currently in the queue.
    const getAllPeople = peopleService.getAllPeople();
    res.status(200).json(getAllPeople);
  })

  .post(json, (req, res) => {
    // Add a new person to the queue.
    const { name } = req.body;
    const newPerson = name;
    const addingPerson = peopleService.enqueuePeople(newPerson);
    res.status(201).json(addingPerson);
  });

module.exports = peopleRouter;
