const MedicalRegister = require("../models/MedicalRegister");
const Owner = require("../models/Owner");
const Pet = require("../models/Pet");
 
const resolvers = {
  Query: {
    getMedicalRegisters: async () => {
        try {
            let find = MedicalRegister.find();
            return find;   
        } catch (error) {
            console.log(error)
        }
     },
     getMedicalRegisterById: async(_, { id }) => {
         try {
            let find = MedicalRegister.findById(id);
            return find;   
         } catch (error) {
             console.log(error)
         }
     }
  },
 
  Mutation: {
    newMedicalRegister: async (_, { input }) => {
        const { pet, owner } = input;

        // Validate the Owner, Pet's type and Size exists
        if(!/^[0-9a-fA-F]{24}$/.test(pet))
            throw new Error("Pet don't have a correct format");
        
        if(!/^[0-9a-fA-F]{24}$/.test(owner))
            throw new Error("Owner don't have a correct format");

        let existsPet = await Pet.findById(pet);
        let existsOwner = await Owner.findById(owner);

        if(!existsPet)
            throw new Error("Pet don't exists");

        if(!existsOwner)
            throw new Error("Owner don't exists");

        try {
            const medicalRegister = new MedicalRegister(input);
            medicalRegister.save();
            return medicalRegister
        } catch (error) {
            console.log(error);
        }
    }
  }
};
 
module.exports = resolvers;