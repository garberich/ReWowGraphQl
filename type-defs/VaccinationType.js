const { gql } = require('apollo-server');

const typeDef = gql`
    type VaccinationType {
        id: ID
        name: String
    }

    input VaccinationTypeInput {
        name: String!
    }

    extend type Query {
        getVaccinationTypes: [VaccinationType]
    }

    extend type Mutation {
        newVaccinationType(input: VaccinationTypeInput): VaccinationType
    }
`;

module.exports = typeDef;