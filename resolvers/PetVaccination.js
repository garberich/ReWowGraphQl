const PetVaccination = require('../models/PetVaccination');
const Pet = require('../models/Pet');
const Vaccination = require('../models/Vaccination');

const resolvers = {
    Query: {
        getPetsVaccination: async() => {
            try {
                const find = await PetVaccination.find();
                return find;   
            } catch (error) {
                console.log(error)
            }
        },
        getVaccinationsByPet: async(_, { id }) => {
            try {
                const find = await PetVaccination.find({ pet: id});
                return find;
            } catch (error) {
                console.log(error)
            }
        }
    },
    Mutation: {
        newPetVaccination: async(_, { input }) => {
            let { pet, vaccination } = input;

            if(!/^[0-9a-fA-F]{24}$/.test(pet))
                throw new Error("Pet don't have a correct format");

            if(!/^[0-9a-fA-F]{24}$/.test(vaccination))
                throw new Error("Vaccination don't have a correct format");
            
            let existsPet = await Pet.findById(pet);
            let existsVaccination = await Vaccination.findById(vaccination);
            
            if(!existsPet)
                throw new Error("Pet don't exists");

            if(!existsVaccination)
                throw new Error("Vaccination don't exists");
            
            try {
                const pet_vaccination = new PetVaccination(input);
                pet_vaccination.save();
                return pet_vaccination;
            } catch (error) {
                console.log(error);
            }
        }
    }
};

module.exports = resolvers;