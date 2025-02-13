
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Movies & Actors API",
      version: "1.0.0",
      description: "Filmlar va aktyorlar uchun API hujjatlari",
    },
    servers: [{ url: "http://63.177.173.107:4000" }],
  },
  apis: ["./routes/*.js"], // Router fayllar ichidan Swaggerni o‘qiydi
};

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("Swagger Docs → http://localhost:4000/docs");
}

export default swaggerDocs;
