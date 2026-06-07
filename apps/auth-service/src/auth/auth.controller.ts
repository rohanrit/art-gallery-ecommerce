import { FastifyInstance } from 'fastify';
import { authService } from './auth.service';
import { AppError } from '../common/errors';

interface LoginBody {
  email: string;
  password: string;
}

interface RegisterBody {
  email: string;
  password: string;
  name?: string;
}

export async function authRoutes(app: FastifyInstance) {
  app.post('/api/v1/auth/register', async (request, reply) => {
    try {
      const { email, password, name } = request.body as RegisterBody;
      const result = await authService.register(email, password, name);
      return reply.status(201).send(result);
    } catch (error) {
      if (error instanceof AppError) {
        return reply.status(error.statusCode).send({ message: error.message });
      }
      throw error;
    }
  });

  app.post('/api/v1/auth/login', async (request, reply) => {
    try {
      const { email, password } = request.body as LoginBody;
      const result = await authService.login(email, password);
      return reply.status(200).send(result);
    } catch (error) {
      if (error instanceof AppError) {
        return reply.status(error.statusCode).send({ message: error.message });
      }
      throw error;
    }
  });
}
