import Fastify from 'fastify';
import cors from '@fastify/cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import clientesRoutes from './routes/clientesRoutes.js';
import petsRoutes from './routes/petsRoutes.js';

dotenv.config();

const fastify = Fastify();

const prisma = new PrismaClient();

fastify.register(cors, { origin: '*' });

fastify.register(clientesRoutes, { prefix: '/clientes' });
fastify.register(petsRoutes, { prefix: '/pets' });

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Servidor rodando em http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();