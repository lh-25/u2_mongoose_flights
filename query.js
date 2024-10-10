// Write your queries here
const db = require('./db')
const { Airport, Flight } = require('./models')


const allFlights = async () => {
    const all_flights = await Flight.find().populate('departingAirport arrivalAirport')
    all_flights.forEach(flight => {
        console.log(`Airline: ${flight.airline}, Flight Number: ${flight.flightNumber}, Departing Airport: ${flight.departingAirport.name}, Departure Date: ${flight.departureDate}`)
    })
}


const allAirports = async () => {
    const all_airports = await Airport.find()
    all_airports.forEach(airport => {
        console.log(`Name: ${airport.name}, Location: ${airport.location}, Code: ${airport.code}`)
    })
}


const flightDetails = async (id) => {
    const details = await Flight.findById(id).populate('departingAirport arrivalAirport')
    console.log(`Flight Details: ${details}`)
}

const addFlight = async () => {
    const create = await Flight.create({
        airline: 'Southwest Airlines',
        flightNumber: 4321,
        price: 180,
        numberOfSeats: 40,
        departingAirport: dfw[0]._id,
        arrivalAirport: lax[0]._id,
        departureDate: new Date(2024,11,5,8,0),
    },).populate('departingAirport arrivalAirport')
    console.log(`Flight created:${create}`)
}
const updateFlight = async (flightNumber, numberOfSeats) => {
    const updated = await Flight.updateOne(
        {flightNumber: flightNumber },
        {numberOfSeats: numberOfSeats}
    )
    console.log(`Updated Flight: ${updated}`)
}

const updateAirport = async (airportCode, newDetails) => {
    const updated = await Flight.updateOne(
        {code: airportCode },
        newDetails
    )
    console.log(`Updated Flight: ${updated}`)
}
const deleteFlight = async (flightNumber) => {
    const deleted = await Flight.findOneAndDelete({flightNumber: flightNumber})
    console.log(`Deleted Flight: ${deleted}`)
}

const deleteAirport = async (airportCode) => {
    const deleted = await Airport.findOneAndDelete({code: airportCode})
    console.log(`Deleted Airport: ${deleted}`)
}

async function main() {
  try {
    // await allFlights()
     // await allAirports()
     //  await flightDetails()
      // ~cant make it work~ await addFlight()
     // await updateFlight(4321, 15)
     //  await updateAirport('LAX', {location: 'LA'})
      //  await deleteFlight()
  await deleteAirport('LAX')
  } catch (error) {
      console.log(error)
  } finally {
      await db.close()
  }
}

main()