const { ApolloServer } = require('apollo-server');
const _ = require("lodash");

const connectDB = require('./config/db');

// type defs
const baseTypeDef = require("./type-defs/base");
const sizeTypeDef = require("./type-defs/Size");
const petTypeTypeDef = require("./type-defs/PetType");
const productTypeTypeDef = require("./type-defs/ProductType");
const productTypeDef = require("./type-defs/Product");
const vaccinationTypeTypeDef = require("./type-defs/VaccinationType");
const vaccinationTypeDef = require("./type-defs/Vaccination");
const ownerTypeDef = require("./type-defs/Owner");
const petTypeDef = require("./type-defs/Pet");
const petVaccinationTypeDef = require("./type-defs/PetVaccination");
const appointmentTypeTypeDef = require("./type-defs/AppointmentType");
const appointmentTypeDef = require("./type-defs/Appointment");
const medicalRegisterTypeDef = require("./type-defs/MedicalRegister");

// resolvers
const sizeResolver = require("./resolvers/Size");
const petTypeResolver = require("./resolvers/PetType");
const productTypeResolver = require("./resolvers/ProductType");
const productResolver = require("./resolvers/Product");
const vaccinationTypeResolver = require("./resolvers/VaccinationType");
const vaccinationResolver = require("./resolvers/Vaccination");
const ownerResolver = require("./resolvers/Owner");
const petResolver = require("./resolvers/Pet");
const petVaccinationResolver = require("./resolvers/PetVaccination");
const appointmentTypeResolver = require("./resolvers/AppointmentType");
const appointmentResolver = require("./resolvers/Appointment");
const medicalRegisterResolver = require("./resolvers/MedicalRegister");

// Connect to DB
connectDB();

const server = new ApolloServer({
  typeDefs: [baseTypeDef, sizeTypeDef, petTypeTypeDef, productTypeTypeDef, productTypeDef, vaccinationTypeTypeDef, vaccinationTypeDef, ownerTypeDef, petTypeDef, petVaccinationTypeDef, appointmentTypeTypeDef, appointmentTypeDef, medicalRegisterTypeDef],
  resolvers: _.merge({}, sizeResolver, petTypeResolver, productTypeResolver, productResolver, vaccinationTypeResolver, vaccinationResolver, ownerResolver, petResolver, petVaccinationResolver, appointmentTypeResolver, appointmentResolver, medicalRegisterResolver),
});


// Start server
server.listen().then( ({url}) => {
    console.log(`Server ready in URL ${url}`);
});