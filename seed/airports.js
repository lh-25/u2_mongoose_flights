
const db = require('../db')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const airports = [
    {
        name: 'LaGuardia Airport',
        location: 'Queens, NY',
        code: 'LGA'
      },
      {
        name: 'Dallas Fort-Worth International Airport',
        location: 'Dallas, TX',
        code: 'DFW'
      },
      {
        name: 'Miami International Airport',
        location: 'Miami, FL',
        code: 'MIA'
      },
      {
        name: 'Los Angeles International Airport',
        location: 'Los Angeles, CA',
        code: 'LAX'
      }
  ]
  await Airport.insertMany(airports)
  console.log('Created airports!')
}

const run = async () => {
  await main()
  db.close()
}

run()