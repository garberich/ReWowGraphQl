const VaccinationType = require('../models/VaccinationType');

const resolvers = {
    Query: {
        getVaccinationTypes: async() => {
            let find = VaccinationType.find();
            return find;
        }
    },
    Mutation: {
        newVaccinationType: (_, { input }) => {
            try {
                const vaccinationType = new VaccinationType(input);
                vaccinationType.save();
                return vaccinationType;
            } catch (error) {
                console.log(error);
            }
        }
    }
};

module.exports = resolvers;