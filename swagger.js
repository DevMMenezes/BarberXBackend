const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Navalha App API",
  },
  host: ["localhost:3005"],
  schemes: ["https", "http"],
  consumes: ["application/json"],
  produces: ["application/json"],

  securityDefinitions: {
    apiKeyAuth: {
      type: "apiKey",
      in: "header",
      name: "X-API-KEY",
      description: "Bearer Token",
    },
  },
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
