const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Navalha App API',
    
  },
  host:["navapp.ddns.net:3005"],
  schemes: ["https","http"],
  
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js'];



swaggerAutogen(outputFile, endpointsFiles, doc);