const Size = require("../models/Size");
 
const resolvers = {
  Query: {
    getSize: async () => {
        let find = Size.find();
        return find;
     },
  },
 
  Mutation: {
    newSize: async (_, { input }) => {
        try {
            const size = new Size(input);
            size.save();
            return size
        } catch (error) {
            console.log(error);
        }
    }
  },
};
 
module.exports = resolvers;