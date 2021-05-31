const eventService = require('../services/eventService');

const eventController = {
    create: async (req, res) => {
        try {
            let status = 200;
            let message = 'OK';
            let data = {};
      
            const {data: eventCreated, error} = await eventService.create(req.body)
            // console.log(req.body);
            // console.log(error);
            if (error !== null) {
              status = 500,
              message = error
            }
      
            res.send({
              status,
              message,
              data: eventCreated || data
              
            })
        } catch (error) {
            console.log(error);
            res.send({ status: 500, message: 'failed', data: error })
          }
        },

        get: async (req, res) => {
            try {
            let status = 200;
            let message = 'OK';
            let data = {};
      
            const {data: events, error} = await eventService.get()
            // console.log(req.body);
            // console.log(error);
            if (error !== null) {
              status = 500,
              message = error
            }
      
            res.send({
              status,
              message,
              data: events || data
              
            })
        } catch (error) {
            console.log(error);
            res.send({
                status: 500,
                messgae: 'error'
            })
        }
    }
};

module.exports = eventController;