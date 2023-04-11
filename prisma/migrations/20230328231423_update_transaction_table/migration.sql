/*
  Warnings:

  - You are about to drop the column `value` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `conversion_rate` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currency_convert` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currency_converted` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value_convert` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value_converted` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "value",
ADD COLUMN     "conversion_rate" INTEGER NOT NULL,
ADD COLUMN     "currency_convert" INTEGER NOT NULL,
ADD COLUMN     "currency_converted" INTEGER NOT NULL,
ADD COLUMN     "value_convert" INTEGER NOT NULL,
ADD COLUMN     "value_converted" INTEGER NOT NULL;
