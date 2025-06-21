-- DropForeignKey
ALTER TABLE `consumoproduto` DROP FOREIGN KEY `ConsumoProduto_clienteId_fkey`;

-- DropForeignKey
ALTER TABLE `consumoservico` DROP FOREIGN KEY `ConsumoServico_clienteId_fkey`;

-- DropIndex
DROP INDEX `ConsumoProduto_clienteId_fkey` ON `consumoproduto`;

-- DropIndex
DROP INDEX `ConsumoServico_clienteId_fkey` ON `consumoservico`;

-- AddForeignKey
ALTER TABLE `ConsumoProduto` ADD CONSTRAINT `ConsumoProduto_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Cliente`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ConsumoServico` ADD CONSTRAINT `ConsumoServico_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Cliente`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
