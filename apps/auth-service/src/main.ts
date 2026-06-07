import Fastify from 'fastify';
import cors from '@fastify/cors';
import { env } from './config/env';
import { authRoutes } from './auth';

async function bootstrap() {
  const app = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty',
        options: { colorize: true },
      },
    },
  });

  await app.register(cors, {
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true,
  });

  await app.register(authRoutes);

  try {
    await app.listen({ port: env.PORT, host: '0.0.0.0' });
    console.log(`Auth service running on http://localhost:${env.PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

bootstrap();
