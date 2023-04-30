const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// define endpoints for events
app.get('/api/v3/app/events', (req, res) => {
  const eventId = req.query.id;
  // logic to retrieve event by id
  res.send(event);
});

app.get('/api/v3/app/events', (req, res) => {
  const latest = req.query.type === 'latest';
  const limit = parseInt(req.query.limit) || 5;
  const page = parseInt(req.query.page) || 1;
  // logic to retrieve events by recency and pagination
  res.send(events);
});

app.post('/api/v3/app/events', (req, res) => {
  const name = req.body.name;
  const image = req.body.files.image;
  const tagline = req.body.tagline;
  const schedule = req.body.schedule;
  const description = req.body.description;
  const moderator = req.body.moderator;
  const category = req.body.category;
  const subCategory = req.body.sub_category;
  const rigorRank = req.body.rigor_rank;
  // logic to create an event and return the id
  res.send(eventId);
});

app.put('/api/v3/app/events/:id', (req, res) => {
  const eventId = req.params.id;
  const name = req.body.name;
  const image = req.body.files.image;
  const tagline = req.body.tagline;
  const schedule = req.body.schedule;
  const description = req.body.description;
  const moderator = req.body.moderator;
  const category = req.body.category;
  const subCategory = req.body.sub_category;
  const rigorRank = req.body.rigor_rank;
  // logic to update an event and return the id
  res.send(eventId);
});

app.delete('/api/v3/app/events/:id', (req, res) => {
  const eventId = req.params.id;
  // logic to delete an event by id
  res.send();
});

app.listen(3001, () => {
  console.log('Server started on port 3000');
});
