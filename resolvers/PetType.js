const PetType = require("../models/PetType");
 
const resolvers = {
  Query: {
    getPetType: async () => {
        let find = PetType.find();
        return find;
     }
  },
 
  Mutation: {
    newPetType: async (_, { input }) => {
        try {
            const petType = new PetType(input);
            petType.save();
            return petType
        } catch (error) {
            console.log(error);
        }
    }
  }
};
 
module.exports = resolvers;