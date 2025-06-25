-- DropForeignKey
ALTER TABLE `consumoproduto` DROP FOREIGN KEY `ConsumoProduto_produtoId_fkey`;

-- DropForeignKey
ALTER TABLE `consumoservico` DROP FOREIGN KEY `ConsumoServico_servicoId_fkey`;

-- DropIndex
DROP INDEX `ConsumoProduto_produtoId_fkey` ON `consumoproduto`;

-- DropIndex
DROP INDEX `ConsumoServico_servicoId_fkey` ON `consumoservico`;

-- AddForeignKey
ALTER TABLE `ConsumoProduto` ADD CONSTRAINT `ConsumoProduto_produtoId_fkey` FOREIGN KEY (`produtoId`) REFERENCES `Produto`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ConsumoServico` ADD CONSTRAINT `ConsumoServico_servicoId_fkey` FOREIGN KEY (`servicoId`) REFERENCES `Servico`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
