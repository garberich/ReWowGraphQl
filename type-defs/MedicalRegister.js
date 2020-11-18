const { gql } = require('apollo-server');

const typeRef = gql`
    type MedicalRegister {
        id: ID
        owner: ID
        pet: ID
        description: String
        date_created: String
    }

    input MedicalRegisterInput {
        description: String
        pet: ID!
        owner: ID!
    }

    extend type Query {
        getMedicalRegisterById(id: ID!): [MedicalRegister]
        getMedicalRegisters: [MedicalRegister]
    }

    extend type Mutation {
        newMedicalRegister(input: MedicalRegisterInput): MedicalRegister
    }
`;

module.exports = typeRef