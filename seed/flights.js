
const db = require('../db')
const { Company, Flight, Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const lga = await Airport.find({ code: 'LGA' })
    const dfw = await Airport.find({ code: 'DFW' })
    const mia = await Airport.find({ code: 'MIA' })
    const lax = await Airport.find({code: 'LAX'})
  const flights = [
    {
        airline: 'American Airlines',
        flightNumber: 7834,
        price: 135,
        numberOfSeats: 30,
        departingAirport: dfw[0]._id,
        arrivalAirport: lax[0]._id,
        departureDate: new Date(2024,11,27,10,0),
      },
      {
        airline: 'American Airlines',
        flightNumber: 3877,
        price: 400,
        numberOfSeats: 20,
        departingAirport: lga[0]._id,
        arrivalAirport: dfw[0]._id,
        departureDate: new Date(2024,10,25,2,35),
      },

      {
        airline: 'Delta',
        flightNumber: 6831,
        price: 200,
        numberOfSeats: 20,
        departingAirport: lga[0]._id,
        arrivalAirport: dfw[0]._id,
        departureDate: new Date(2024,10,25,2,35),
      },
      {
      airline: 'United Airlines',
      flightNumber: 1234,
      price: 250,
      numberOfSeats: 25,
      departingAirport: dfw[0]._id,
      arrivalAirport: lga[0]._id,
      departureDate: new Date(2024,12,10,15,45),
  },
  {
      airline: 'Southwest Airlines',
      flightNumber: 4321,
      price: 180,
      numberOfSeats: 40,
      departingAirport: mia[0]._id,
      arrivalAirport: dfw[0]._id,
      departureDate: new Date(2024,11,5,8,0),
  },
  {
      airline: 'JetBlue',
      flightNumber: 5678,
      price: 220,
      numberOfSeats: 35,
      departingAirport: dfw[0]._id,
      arrivalAirport: mia[0]._id,
      departureDate: new Date(2024,12,15,12,30),
  },
  {
      airline: 'Spirit Airlines',
      flightNumber: 9876,
      price: 150,
      numberOfSeats: 28,
      departingAirport: lax[0]._id,
      arrivalAirport: lga[0]._id,
      departureDate: new Date(2024,10,30,18,45),
  }
]

  await Flight.insertMany(flights)
  console.log('Created flights!')
}

const run = async () => {
  await main()
  db.close()
}

run()