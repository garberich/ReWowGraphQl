const Owner = require('../models/Owner');

const resolvers = {
    Query: {
        getOwnerById: (_, { id }) => {
            let find = Owner.findById(id);
            return find;
        }
    },
    Mutation: {
        newOwner: (_, { input }) => {
            try {
                const owner = new Owner(input);
                owner.save();
                return owner;
            } catch (error) {
                console.log(error)
            }
        },
    }
};

module.exports = resolvers