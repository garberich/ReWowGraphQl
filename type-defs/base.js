const { gql } = require('apollo-server');
 
const typeDef = gql`
    type Query
    type Mutation
`;
 
module.exports = typeDef; 