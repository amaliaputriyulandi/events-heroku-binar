const { userModel, eventModel } = require('../database');

const eventService = {
    create: async (payload) => {
        try {
            const event = {
                user_id: payload.decodedToken.id,
                name: payload.name,
                description: payload.description
    
            }

            let error = null;
            let result = await eventModel.create(event)

            return {
                data: result,
                error
            }
        } catch (error) {
            console.log(error);
            return error
        }


        
    },
    get: async () => {
        try {
            let error = null;
            let result = await eventModel.findAll();

            return {
                data: result,
                error
            }
        } catch (error) {
            console.log(error);
            return error
        }
    }
};

module.exports = eventService;
