const { gql } = require('apollo-server');

const typeDef = gql`
    type Pet {
        id: ID
        name: String
        owner: Owner
        size: Size
        type: PetType
        date_created: String
    }

    input PetInput {
        name: String!
        owner: ID!
        size: ID!
        type: ID!
    }

    extend type Query {
        getPetsByOwner(id: ID!): [Pet]
    }

    extend type Mutation {
        newPet(input: PetInput): Pet
    }
`;

module.exports = typeDef;