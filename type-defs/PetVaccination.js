const { gql } = require('apollo-server');

const typeDef = gql`
    type PetVaccination {
        id: ID
        pet: ID
        vaccination: ID
        date_created: String
    }

    input PetVaccinationInput {
        pet: ID!
        vaccination: ID!
    }

    extend type Query {
        getPetsVaccination: [PetVaccination]
        getVaccinationsByPet(id:ID!): [PetVaccination]
    }

    extend type Mutation {
        newPetVaccination(input: PetVaccinationInput): PetVaccination
    }
`;

module.exports = typeDef;