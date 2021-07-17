const sampleController = {
    async getSamples(req, res, next){
        return res.send({
            message: "Hello there"
        });
    }
};

module.exports = sampleController;