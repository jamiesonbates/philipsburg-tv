const organizations = [
  {
    id: 1,
    name: 'Granite County Museum',
    type: 'Museum',
    phone: '406-859-3020',
    hours: '12pm - 4pm Daily',
    website: 'http://www.granitecountymuseum.com/',
    facebook: 'https://www.facebook.com/granitecountymuseum/'
  },
  {
    id: 2,
    name: 'Sunshine Station',
    type: 'Family Style Restauraunt',
    phone: '(406) 859-3450',
    hours: '7am-2am Daily',
    website: 'http://sunshinestationmt.com/',
    facebook: 'https://www.facebook.com/sunshinestationmt/'
  },
  {
    id: 3,
    name: 'Discovery Ski Area',
    type: 'Recreation',
    phone: '406-563-2184',
    hours: '9:30am - 4pm Daily (winter)',
    website: 'http://www.skidiscovery.com/',
    facebook: 'https://www.facebook.com/SkiDiscovery/'
  },
  {
    id: 4,
    name: 'Flint Creek Trails Association',
    type: 'Community Organization',
    phone: '406-563-2184',
    hours: 'N/A',
    website: 'http://www.flintcreektrails.org/',
    facebook: 'https://www.facebook.com/FlintCreekTrails/'
  },
  {
    id: 5,
    name: 'Philipsburg Brewing Company',
    type: 'Brewery',
    phone: '406-859-2739',
    hours: '10am - 8pm Daily',
    website: 'http://www.philipsburgbrew.com/',
    facebook: 'https://www.facebook.com/PhilipsburgBrewing/'
  },
  {
    id: 6,
    name: 'Philipsburg Rotary Club',
    type: 'Community Organization',
    phone: 'N/A',
    hours: 'N/A',
    website: 'http://www.philipsburgrotary.org/',
    facebook: ''
  },
  {
    id: 7,
    name: 'Gem Mountain',
    type: 'Sapphire Mining and Gallery',
    phone: '406-859-4367',
    hours: '10am - 5pm Daily',
    website: 'http://www.gemmountainmt.com/',
    facebook: 'https://www.facebook.com/Gem-Mountain-357050316855/'
  },
  {
    id: 8,
    name: 'Philipsburg Chamber of Commerce',
    type: 'Community Organization',
    phone: '406-859-3388',
    hours: 'N/A',
    website: 'http://philipsburgmt.com/',
    facebook: 'https://www.facebook.com/Philipsburg-MT-Official-Chamber-of-Commerce-222324830691/'
  },
  {
    id: 9,
    name: 'The Ranch at Rock Creek',
    type: 'Resort',
    phone: '406-859-6027',
    hours: '24/7/365',
    website: 'http://www.theranchatrockcreek.com/',
    facebook: 'https://www.facebook.com/theranchatrockcreek'
  },
  {
    id: 10,
    name: 'The Broadway Hotel',
    type: 'Hotel',
    phone: '406-859-8000',
    hours: '24/7/365',
    website: 'http://www.broadwaymontana.com/',
    facebook: 'https://www.facebook.com/The.Broadway.Hotel.Philipsburg.MT'
  }
]

exports.seed = function(knex) {
  return knex('organizations').del()
    .then(() => {
      return knex('organizations').insert(organizations);
    });
};
