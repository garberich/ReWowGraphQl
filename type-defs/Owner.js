const { gql } = require('apollo-server');

const typeDef = gql`
    type Owner {
        id: ID
        first_name: String
        last_name: String
        phone: String
        addres: String
        date_created: String
    }

    input OwnerInput {
        first_name: String!
        last_name: String!
        phone: String!
        addres: String!
    }

    extend type Query {
        getOwnerById(id: ID!): Owner
    }

    extend type Mutation {
        newOwner(input: OwnerInput): Owner
    }
`;

module.exports = typeDef;