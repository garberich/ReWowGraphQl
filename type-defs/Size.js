const { gql } = require('apollo-server');
 
const typeDef = gql`
    type Size {
        id: ID
        name: String
    }
 
    input SizeInput {
        name: String!
    }
 
    extend type Query {
        getSize: [Size]
    }
 
    extend type Mutation {
        newSize(input: SizeInput): Size
    }
`;
 
module.exports = typeDef; 