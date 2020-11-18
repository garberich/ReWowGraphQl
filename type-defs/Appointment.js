const { gql } = require('apollo-server');

const typeRef = gql`
    type Appointment {
        id: ID
        pet: ID
        type: ID
        date_created: String
        date_appointment: String
    }

    input AppointmentInput {
        date_appointment: String!
        pet: ID!
        type: ID!
    }

    extend type Query {
        getAppointmentById(id: ID!): [Appointment]
        getAppointments: [Appointment]
    }

    extend type Mutation {
        newAppointment(input: AppointmentInput): Appointment
    }
`;

module.exports = typeRef