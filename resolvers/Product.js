const Product = require('../models/Product');
const ProductType = require('../models/ProductType');

const resolvers = {
    Query: {
        getProducts: async() => {
            let find = await Product.find();
            return find;
        },
        getProductById: async (_, { id }) => {
            let find = await Product.findById(id);
            return find;
        }
    },
    Mutation: {
        newProduct: async(_, { input }) => {
            let typeId = input.type;

            if(!/^[0-9a-fA-F]{24}$/.test(typeId))
                throw new Error("Item's type don't have a correct format");
            
            let existsType = await ProductType.findById(typeId);
            
            if(!existsType)
                throw new Error("Product's type don't exists");
            
            try {
                const product = new Product(input);
                product.save();
                return product;
            } catch (error) {
                console.log(error);
            }
        }
    }
};

module.exports = resolvers;