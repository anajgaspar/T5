import Fastify from 'fastify';
import cors from '@fastify/cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const fastify = Fastify();

const prisma = new PrismaClient();

fastify.get('/clientes', async (request, reply) => {
  const clientes = await prisma.cliente.findMany();
  return clientes;
});

fastify.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running at ${address}`);
});