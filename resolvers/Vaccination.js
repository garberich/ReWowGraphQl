const Vaccination = require('../models/Vaccination');
const VaccinationType = require('../models/VaccinationType');

const resolvers = {
    Query: {
        getVaccinations: async() => {
            let find = Vaccination.find();
            return find;
        }
    },
    Mutation: {
        newVaccination: async (_, { input }) => {
            let typeId = input.type;

            if(!/^[0-9a-fA-F]{24}$/.test(typeId))
                throw new Error("Vaccination's type don't have a correct format");

            let existsType = await VaccinationType.findById(typeId);
            
            if(!existsType)
                throw new Error("Vaccination's type don't exists");
            
            try {
                const vaccination = new Vaccination(input);
                vaccination.save();
                return vaccination;
            } catch (error) {
                console.log(error)
            }
        }
    }
};

module.exports = resolvers