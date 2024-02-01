# Hostfully App

Hostfully app allows you to create, edit and delete reservations on a set of locations.

## Screenshots

![App Screenshot](https://i.imgur.com/epsgIHH.jpeg)

![App Screenshot](https://i.imgur.com/Dllcm2v.jpeg)

## System Design

The Project was built on top of 3 main data pilars =>

#### Locations is a list of possible locations where the user can create a booking.

    type Location = {
    id: string;
    location: string;
    price: number;
    name: string;
    type: string;
    reservations: Reservation[];
    image: string;
    details: string;
    };

#### Bookings is a list of the bookings the user has created, the user should be able to edit and delete items from that list.

    type Booking = {
    id: string;
    location: string;
    startDate?: Date;
    dailyPrice: number;
    name: string;
    endDate?: Date;
    price: number;
    image: string;
    numberOfDays: number;
    locationId: string;
    };

#### Reservation is a list that lives inside of each location. The purpose of that list is to avoid overlaps between different bookings.

    type Reservation = {
    id: string;
    startDate?: Date;
    endDate?: Date;
    };

## Tech Stack

**Vite/React**: Vite has great performance and it's very simple to setup. In addition React don't recommend using Create React App anymore.

**Store**: Zustand is a light weight library that has it's implementation similiar to Redux, but with less boilerplate. A great benefit from using it is that the global state don't need to be wrapped around the app and you can trigger actions without dispatch functions.

**Styled Components**: Great tool for handling css with the power of JS to add dynamic values and props.

**Material UI**: It was added to handle more complex components like DatePickers, Toasters and Modals.

**Daysjs**: Very light weight library that was added to handle Dates helpers.

**Jest**: Was used to cover tests for storage, helpers and rendering components

**Jest**: Was used to run a test suit that covers all the 3 possible operations ( create, edit, delete) and also check for booking overlap validation.

## Run Locally

Clone the project

```bash
  git clone https://github.com/allanreges/hostfully
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Running Tests

To run unit tests: run the following command:

```bash
  npm run test:unit
```

To run e2e tests: run the following command:

```bash
  npm run test:e2e
```
