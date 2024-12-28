const express = require('express');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const taskRoutes = require('./routes/taskRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');
const path = require('path');

const app = express();

const swaggerDocument = yaml.load(path.join(__dirname, 'docs', 'swagger.yaml'));


// Middlewares
app.use(express.json());
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/tasks', taskRoutes);
app.use(errorMiddleware);

module.exports = app;
