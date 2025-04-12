import { FastifyReply, FastifyRequest } from 'fastify';

export const errorHandler = (
  error: Error,
  request: FastifyRequest,
  reply: FastifyReply
) => {
  request.log.error(error);

  if (error instanceof SyntaxError) {
    reply.status(400).send({ message: 'Invalid JSON payload' });
  } else {
    reply.status(500).send({ message: 'Internal Server Error' });
  }
};
