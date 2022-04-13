import EventService from "../services";
const joi = require("@hapi/joi");
let events = require("../models/Event.model");
const { eventValidation } = require("../models/ETvalidation.model");

const getEvent = async (req, res, next) => {
  await EventService.getEvent(req.params.id)
    .then((data) => {
      req.handleResponse.successRespond(res)(data);
      next();
    })
    .catch((error) => {
      req.handleResponse.errorRespond(res)(error.message);
      next();
    });
};

const getEvents = async (req, res, next) => {
  await EventService.getEvents(req.query.search, req.query.trainer)
    .then(async (data) => {
      req.handleResponse.successRespond(res)(data);
      next();
    })
    .catch((error) => {
      req.handleResponse.errorRespond(res)(error.message);
      next();
    });
};

const createEvents = async (req, res, next) => {
  const { error } = eventValidation(req.body);
  if (error)
    return res
      .status(400)
      .json({ success: false, msg: error.details[0].message });
  const event = new events({
    title: req.body.title,
    tags: req.body.tags,
    description: req.body.description,
    details: req.body.details,
    gender: req.body.gender,
    date: req.body.date,
    trainer: req.body.trainer,
  });
  await EventService.createEvents(event)
    .then((data) => {
      req.handleResponse.successRespond(res)(data);
      next();
    })
    .catch((error) => {
      req.handleResponse.errorRespond(res)(error.message);
      next();
    });
};

const updateEvents = async (req, res, next) => {
  await EventService.updateEvents(req.params.id, req.body)
    .then((data) => {
      req.handleResponse.successRespond(res)(data);
      next();
    })
    .catch((error) => {
      req.handleResponse.errorRespond(res)(error.message);
      next();
    });
};

const deleteEvents = async (req, res, next) => {
  await EventService.deleteEvents(req.params.id)
    .then((data) => {
      req.handleResponse.successRespond(res)(data);
      next();
    })
    .catch((error) => {
      req.handleResponse.errorRespond(res)(error.message);
      next();
    });
};

module.exports = {
  getEvent,
  getEvents,
  createEvents,
  updateEvents,
  deleteEvents,
};
