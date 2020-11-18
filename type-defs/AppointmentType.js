const { gql } = require('apollo-server');

const typeDef = gql`
    type AppointmentType {
        id: ID
        name: String
    }
 
    input AppointmentTypeInput {
        name: String!
    }
 
    extend type Query {
        getAppointmentType: [AppointmentType]
    }
 
    extend type Mutation {
        newAppointmentType(input: AppointmentTypeInput): AppointmentType
    }
`;
module.exports = typeDef