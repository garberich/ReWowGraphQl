const Appointment = require("../models/Appointment");
const AppointmentType = require("../models/AppointmenType");
const Pet = require("../models/Pet");
 
const resolvers = {
  Query: {
    getAppointments: async () => {
        try {
            let find = Appointment.find();
            return find;   
        } catch (error) {
            console.log(error)
        }
     },
     getAppointmentById: async(_, { id }) => {
         try {
            let find = Appointment.findById(id);
            return find;   
         } catch (error) {
             console.log(error)
         }
     }
  },
 
  Mutation: {
    newAppointment: async (_, { input }) => {
        const { pet, type } = input;

        // Validate the Owner, Pet's type and Size exists
        if(!/^[0-9a-fA-F]{24}$/.test(pet))
            throw new Error("Pet don't have a correct format");
        
        if(!/^[0-9a-fA-F]{24}$/.test(type))
            throw new Error("Appointment's type don't have a correct format");

        let existsPet = await Pet.findById(pet);
        let existsType = await AppointmentType.findById(type);

        if(!existsPet)
            throw new Error("Pet don't exists");

        if(!existsType)
            throw new Error("Appointment's type don't exists");

        try {
            const appointment = new Appointment(input);
            appointment.save();
            return appointment
        } catch (error) {
            console.log(error);
        }
    }
  }
};
 
module.exports = resolvers;