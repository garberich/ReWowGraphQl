const { gql } = require('apollo-server');

const typeDef = gql`
    type ProductType {
        id: ID
        name: String
    }

    input ProductTypeInput {
        name: String!
    }

    extend type Query {
        getProductType: [ProductType]
    }

    extend type Mutation {
        newProductType(input: ProductTypeInput): ProductType
    }
`;

module.exports = typeDef;