const { gql } = require('apollo-server');

const typeDef = gql`
    type Product {
        id: ID
        name: String
        type: ProductType
        price: Float
    }

    input ProductInput {
        name: String!
        type: ID!
        price: Float!
    }

    extend type Query {
        getProducts: [Product]
        getProductById(id: ID!): Product
    }

    extend type Mutation {
        newProduct(input: ProductInput): Product
    }
`;
module.exports = typeDef