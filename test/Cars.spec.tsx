// import { BookingState, BookingWithReferences, CarDto, CarState, FuelType } from '../src/util/api'
// import { render, screen } from '@testing-library/react'

// import { BrowserRouter } from 'react-router-dom'
// import Cars from '../src/pages/AllCars/Cars'
// import dayjs from 'dayjs'

// const bookings: BookingWithReferences[] = [
//   {
//     id: 1,
//     startDate: new Date(),
//     endDate: new Date(),
//     bookingState: BookingState.PENDING,
//     renter: { id: 2, name: 'Test' },
//     renterId: 2,
//     carId: 1,
//     car: {
//       id: 1,
//       name: 'Car 1',
//       carTypeId: 1,
//       carState: CarState.LOCKED,
//       fuelType: FuelType.DIESEL,
//       ownerId: 1,
//       owner: { id: 1, name: 'TestUser' },
//       info: 'This is a test information.',
//     },
//   },
//   {
//     id: 1,
//     startDate: new Date('2023-08-17T10:00:00.000Z'),
//     endDate: new Date('2023-08-17T12:00:00.000Z'),
//     bookingState: BookingState.ACCEPTED,
//     renter: { id: 2, name: 'Test' },
//     renterId: 2,
//     carId: 2,
//     car: {
//       id: 2,
//       name: 'Car 2',
//       carTypeId: 2,
//       carState: CarState.LOCKED,
//       fuelType: FuelType.ELECTRIC,
//       ownerId: 1,
//       owner: { id: 1, name: 'TestUser' },
//       info: 'This is a test information.',
//     },
//   },
//   {
//     id: 2,
//     startDate: new Date('2023-08-17T13:00:00.000Z'),
//     endDate: new Date('2023-08-17T14:00:00.000Z'),
//     bookingState: BookingState.ACCEPTED,
//     renter: { id: 2, name: 'Test' },
//     renterId: 2,
//     carId: 2,
//     car: {
//       id: 2,
//       name: 'Car 2',
//       carTypeId: 2,
//       carState: CarState.LOCKED,
//       fuelType: FuelType.PETROL,
//       ownerId: 1,
//       owner: { id: 1, name: 'TestUser' },
//       info: 'This is a test information.',
//     },
//   },
//   {
//     id: 3,
//     startDate: new Date('2023-08-17T14:00:00.000Z'),
//     endDate: new Date('2023-08-17T15:00:00.000Z'),
//     bookingState: BookingState.PENDING,
//     renter: { id: 2, name: 'Test' },
//     renterId: 2,
//     carId: 2,
//     car: {
//       id: 2,
//       name: 'Car 2',
//       carTypeId: 2,
//       carState: CarState.LOCKED,
//       fuelType: FuelType.PETROL,
//       ownerId: 1,
//       owner: { id: 1, name: 'TestUser' },
//       info: 'This is a test information.',
//     },
//   },
// ]

// const carTypes = [
//   {
//     id: 1,
//     name: 'Moni Cooper',
//     imageUrl: 'https://images.local/moni-cooper.png',
//   },
//   {
//     id: 2,
//     name: 'Moni Electric',
//     imageUrl: 'https://images.local/moni-electric.png',
//   },
//   {
//     id: 3,
//     name: 'Moni Countryman',
//     imageUrl: 'https://images.local/moni-countryman.png',
//   },
// ]

// const cars: CarDto[] = [
//   {
//     id: 1,
//     name: 'Car 1',
//     carTypeId: 1,
//     carState: CarState.LOCKED,
//     fuelType: FuelType.DIESEL,
//     ownerId: 1,
//     info: 'This is a test information.',
//   },
//   {
//     id: 2,
//     name: 'Car 2',
//     carTypeId: 2,
//     carState: CarState.LOCKED,
//     fuelType: FuelType.PETROL,
//     ownerId: 1,
//     info: 'This is a test information.',
//   },
// ]

// const users = [
//   { id: 1, name: 'Beatrice' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Izzeddin' },
// ]

// describe('Cars', () => {
//   it('should render all cars', () => {
//     render(
//       <BrowserRouter>
//         <Cars users={users} carTypes={carTypes} cars={cars} bookings={bookings} />
//       </BrowserRouter>,
//     )

//     expect(screen.getByText('Car 1')).toBeInTheDocument()
//     expect(screen.getByText('Car 2')).toBeInTheDocument()
//   })
// })

// describe('Cars', () => {
//   it('should render all cars available in booking period', () => {
//     const bookingPeriod = {
//       startDate: dayjs('2023-08-17T08:00:00.000Z').toDate(),
//       endDate: dayjs('2023-08-17T11:00:00.000Z').toDate(),
//     }

//     render(
//       <BrowserRouter>
//         <Cars
//           users={users}
//           carTypes={carTypes}
//           cars={cars}
//           bookingPeriod={bookingPeriod}
//           bookings={bookings}
//         />
//       </BrowserRouter>,
//     )

//     expect(screen.getByText('Car 1')).toBeInTheDocument()
//     expect(screen.queryByText('Car 2')).not.toBeInTheDocument()
//   })
// })
