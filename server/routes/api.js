const router = require('express').Router()
const knex = require('../../knex.js');

router.get('/', (req, res) => {
  res.send('Hi from API!');
});

router.get('/videos', (req, res) => {
  return knex('videos').innerJoin('organizations', 'videos.organization_id', 'organizations.id')
    .then(videos => res.send(videos))
    .catch(err => console.log(err));
});

router.get('/videos/:id', (req, res) => {
  return knex('videos').where('organization_id', req.params.id)
    .then(videos => res.send(videos))
    .catch(err => console.log(err));
});

router.get('/organization/:id', (req, res) => {
  return knex('organizations').where('id', req.params.id)
    .then(organization => res.send(organization))
    .catch(err => console.log(err));
});

module.exports = router
