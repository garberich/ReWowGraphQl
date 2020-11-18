const { gql } = require('apollo-server');
 
const typeDef = gql`
    type PetType {
        id: ID
        name: String
    }
 
    input PetTypeInput {
        name: String!
    }
 
    extend type Query {
        getPetType: [PetType]
    }
 
    extend type Mutation {
        newPetType(input: PetTypeInput): PetType
    }
`;
 
module.exports = typeDef; 