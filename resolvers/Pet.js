const Pet = require('../models/Pet');
const Owner = require('../models/Owner');
const PetType = require('../models/PetType');
const Size = require('../models/Size');

const resolvers = {
    Query: {
        getPetsByOwner: async (_, { id }) => {
            try {
                const find = await Pet.find({ owner: id});
                return find;   
            } catch (error) {
                console.log(error)
            }
        }
    },
    Mutation: {
        newPet: async (_, { input }) => {
            const { owner, size, type } = input;

            // Validate the Owner, Pet's type and Size exists
            if(!/^[0-9a-fA-F]{24}$/.test(owner))
                throw new Error("Owner don't have a correct format");
            
            if(!/^[0-9a-fA-F]{24}$/.test(size))
                throw new Error("Pet's size don't have a correct format");

            if(!/^[0-9a-fA-F]{24}$/.test(type))
                throw new Error("Pet's type don't have a correct format");

            let existsOwner = await Owner.findById(owner);
            let existsSize = await Size.findById(size);
            let existsType = await PetType.findById(type);

            if(!existsOwner)
                throw new Error("Owner don't exists");
            
            if(!existsSize)
                throw new Error("Pet's size don't exists");

            if(!existsType)
                throw new Error("Pet's type don't exists");
            

            try {
                const pet = new Pet(input);
                pet.save();
                return pet;
            } catch (error) {
                console.log(error)
            }
        }
    }
};

module.exports = resolvers;