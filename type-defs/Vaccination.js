const { gql } = require('apollo-server');

const typeDef = gql`
    type Vaccination {
        id: ID
        name: String
        type: VaccinationType
    }

    input VaccinationInput {
        name: String!
        type: ID!
    }

    extend type Query {
        getVaccinations: [Vaccination]
    }

    extend type Mutation {
        newVaccination(input: VaccinationInput): Vaccination
    }
`;

module.exports = typeDef