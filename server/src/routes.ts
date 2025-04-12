import { FastifyPluginAsync } from 'fastify';

const routes: FastifyPluginAsync = async (fastify) => {
  fastify.get('/', async (_request, _reply) => {
    return { message: 'Hello, World!' };
  });

  fastify.get('/health', async (_request, _reply) => {
    return { status: 'OK' };
  });
};

export { routes };
