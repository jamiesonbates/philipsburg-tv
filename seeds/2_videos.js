const videos = [
  {
    id: 1,
    organization_id: 9,
    title: 'Visit RRC',
    description: 'Come visit our incredible resort in frontier Montana!',
    youtube_id: 'lK31OzltWiA'
  },
  {
    id: 2,
    organization_id: 8,
    title: 'Granite Ghost Town',
    description: 'Granite Ghost Town used to be home to more than 6,000 people. Compare that to Philipsburg\'s population of just 850 today. The Ghost town hosts many intact buildings, many of which are nearly 100 years old.',
    youtube_id: 'YsMcB5zd_IA'
  },
  {
    id: 3,
    organization_id: 6,
    title: 'Drive Scenice Route 1',
    description: 'Scenic Highway Montana 1 is always an incredible drive, and excuse to visit Pburg!',
    youtube_id: '8vLWGZiwWkM'
  },
  {
    id: 4,
    organization_id: 7,
    title: 'Sapphire Mining in Philipsburg',
    description: 'Come to our Gallery and checkout some beautiful gems. We also offer MINING at two locations.',
    youtube_id: 'MknXzUGcWWs'
  },
  {
    id: 5,
    organization_id: 1,
    title: 'Old Philipsburg Stamp Mill',
    description: 'Miners used to use this to break up large rocks. We got it to work once again. Come check out this historic piece of equipment!!!',
    youtube_id: 'i9_Lw9wVh90'
  },
  {
    id: 6,
    organization_id: 10,
    title: 'The Broadway Hotel',
    description: 'Come stay in one of our unique and beautiful rooms, right in the center of town and next to the Philipsburg Brewery.',
    youtube_id: 'nawdq2mUIy4'
  },
  {
    id: 7,
    organization_id: 7,
    title: 'So Many Gems',
    description: 'We are always getting new gems. Come pluck some out of the dirt piles!!!',
    youtube_id: 'cSu5g_T78Ck'
  },
  {
    id: 8,
    organization_id: 6,
    title: 'Aber Day Reunion Concert 2015',
    description: 'What a concert! Featuring the Mission Mountain Wood band, we brought back Montana\'s iconic Aber Day Kegger as a reunion and quadrupled the population of Philipsburg for a day!',
    youtube_id: 'jBWRpmv5IG4'
  },
  {
    id: 9,
    organization_id: 3,
    title: 'Ski Disco!',
    description: 'Montana\'s secret since 1970. First class slopes with no crowds. We have terain for every type of skiier',
    youtube_id: 'b10KOPQwcKU'
  },
  {
    id: 10,
    organization_id: 5,
    title: 'The Philipsburg Bottle',
    description: 'To bottle our beer, we use a unique technology to get our beer into an incredible twist off can. That is right! You can take our beer anywhere, open it, taste the greatness, and close it back up for safe keeping!',
    youtube_id: 'To4kT26tn_I'
  },
  {
    id: 11,
    organization_id: 5,
    title: 'Live Music at Pburg Brewing',
    description: 'We have live music at the brewery each weekend!!! Come check it out!',
    youtube_id: 'MiaZPl47tks'
  },
  {
    id: 12,
    organization_id: 2,
    title: 'Sunshine Station',
    description: 'One stop for everything you need. Plus, we have a great restaurant and bar!!!',
    youtube_id: 'R8l6TTPbVtE'
  },
  {
    id: 13,
    organization_id: 1,
    title: 'Philipsburg: A Short History',
    description: 'Just a short history of Philipsburg.',
    youtube_id: 'D7NQ54SVUs8'
  },
  {
    id: 14,
    organization_id: 4,
    title: 'Granite County is Big Sky Country',
    description: 'Watch this guy hang glide over Pburg!!!',
    youtube_id: '9c57nFs0Dwc'
  }
]

exports.seed = function(knex) {
  return knex('videos').del()
    .then(() => {
      return knex('videos').insert(videos);
    });
};
