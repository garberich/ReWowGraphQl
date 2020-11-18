const AppointmentType = require("../models/AppointmenType");
 
const resolvers = {
  Query: {
    getAppointmentType: async () => {
        let find = AppointmentType.find();
        return find;
     }
  },
 
  Mutation: {
    newAppointmentType: async (_, { input }) => {
        try {
            const appointmentType = new AppointmentType(input);
            appointmentType.save();
            return appointmentType
        } catch (error) {
            console.log(error);
        }
    }
  }
};
 
module.exports = resolvers;