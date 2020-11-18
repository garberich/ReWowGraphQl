const ProductType = require('../models/ProductType');

const resolvers = {
    Query: {
        getProductType: async() => {
            let find = ProductType.find();
            return find;
        }
    },
    Mutation: {
        newProductType: async(_, { input }) => {
            try {
                const productType = new ProductType(input);
                productType.save();
                return productType;
            } catch (error) {
                console.log(error)
            }
        }
    }
};

module.exports = resolvers;