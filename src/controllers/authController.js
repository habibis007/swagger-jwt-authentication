const authService = require('../services/authService');

const authController = {
    async loginUser(req, res, next){
        try{
            let response = await authService.verifyUser(req);
            return res.status(200).json({data: response});
        } catch (error){
            next(error);
        }
    }
};
module.exports = authController;