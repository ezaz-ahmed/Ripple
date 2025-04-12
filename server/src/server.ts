import fastify from 'fastify';
import { routes } from './routes';
import { errorHandler } from './middleware/errorHandler';

const env = process.env.NODE_ENV || 'development';
const PORT = parseInt(process.env.PORT || '8080', 10);

// Configure the logger based on the environment
const loggerConfig =
  env === 'production'
    ? {
        level: 'info'
      }
    : {
        level: 'debug',
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
            translateTime: 'dd-MM-yyyy HH:mm:ss',
            ignore: 'pid,hostname'
          }
        }
      };

// Initialize the Fastify server with the logger
const server = fastify({
  logger: loggerConfig
});

// Register routes
server.register(routes);

// Optional: Add a custom error handler
server.setErrorHandler(errorHandler);

// Start the server
const start = async () => {
  try {
    await server.listen({ port: PORT, host: '0.0.0.0' });
    server.log.info(`Server listening at http://localhost:${PORT}`);
  } catch (err) {
    server.log.error('Error starting server:', err);
    process.exit(1);
  }
};

start();

export default server;
