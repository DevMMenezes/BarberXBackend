const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Navalha App API',
    
  },
  schemes: [
    "http", "https"
  ],
  
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js'];



swaggerAutogen(outputFile, endpointsFiles, doc).then(async ()=>{
    await import('./index.js')
})