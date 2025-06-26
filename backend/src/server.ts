import Fastify from 'fastify';
import cors from '@fastify/cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import clientesRoutes from './routes/clientesRoutes.js';
import petsRoutes from './routes/petsRoutes.js';
import produtosRoutes from './routes/produtosRoutes.js';
import servicosRoutes from './routes/servicosRoutes.js';
import consumosRoutes from './routes/consumosRoutes.js';
import relatoriosRoutes from './routes/relatoriosRoutes.js';

dotenv.config();

const fastify = Fastify();

const prisma = new PrismaClient();

fastify.register(cors, {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
});

fastify.register(clientesRoutes, { prefix: '/clientes' });
fastify.register(petsRoutes, { prefix: '/pets' });
fastify.register(produtosRoutes, { prefix: '/produtos' });
fastify.register(servicosRoutes, { prefix: '/servicos' });
fastify.register(consumosRoutes, { prefix: '/consumos' });
fastify.register(relatoriosRoutes, { prefix: '/relatorios' });

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