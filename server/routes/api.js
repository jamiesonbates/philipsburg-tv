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

module.exports = router
