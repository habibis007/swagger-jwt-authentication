require('dotenv').config();
const express = require('express');
const routes = require('./routes');
//  import environment variables
const {API_PORT, BASE_PATH, NODE_ENV} = require('./config/serverConfig');
// listener
let api;
const server = {
    launchServer(){
        return new Promise((resolve,reject) =>{
            try{
                const app = express();
                app.use(express.json());
                app.use((err, req, res, next) =>{
                    if(err){
                        res.status(400).json({
                            errorMessage: 'wrong request data'
                        })
                    } else {
                        next();
                    }
                });

                /**
                 * TODO: Swagger
                 */

                 // routes
                app.use(BASE_PATH, routes);
                api = app.listen(API_PORT, function (){
                    console.log(`Sample API listening on port ${API_PORT}`);
                    // emit event for unit testing
                    app.emit("App running");
                })
            } catch (error){
                console.log(error);
                this.stopServer();
                reject(error);
            }
        });
    },

    stopServer(){
        shutDownServer();
    }
};

module.exports = server;

function shutDownServer(){
    // stop server
    if(api){
        console.log("Server is shutting down...");
        api.close(()=>{
            console.log("server down.");
            process.exit(0);
        });
    } else{
        console.log("Server shutting down...");
        process.exit(0);
    }

    // forcefully shut server down
    setTimeout(()=>{
        console.log("Shutting server down forcefully...");
        process.exit(1);
    }, 3000);
}