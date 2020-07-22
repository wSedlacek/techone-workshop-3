# Migration `20200720095903-init`

This migration has been generated by wSedlacek at 7/20/2020, 9:59:03 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "Apartment" (
"address" TEXT NOT NULL,
"id" TEXT NOT NULL,
"moveIn" DATE NOT NULL,
"name" TEXT NOT NULL,
    PRIMARY KEY ("id"))

CREATE TABLE "Rent" (
"id" TEXT NOT NULL,
"monthly" REAL NOT NULL,
"pet" REAL NOT NULL,
    PRIMARY KEY ("id"),FOREIGN KEY ("id") REFERENCES "Apartment"("id") ON DELETE CASCADE ON UPDATE CASCADE)

CREATE TABLE "Fees" (
"admin" REAL NOT NULL,
"application" REAL NOT NULL,
"id" TEXT NOT NULL,
"pet" REAL NOT NULL,
    PRIMARY KEY ("id"),FOREIGN KEY ("id") REFERENCES "Apartment"("id") ON DELETE CASCADE ON UPDATE CASCADE)

CREATE UNIQUE INDEX "Rent_id" ON "Rent"("id")

CREATE UNIQUE INDEX "Fees_id" ON "Fees"("id")

PRAGMA foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200720095903-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,35 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Apartment {
+  id      String   @id @default(cuid())
+  name    String
+  address String
+  moveIn  DateTime
+  rent    Rent
+  fees    Fees
+}
+
+model Rent {
+  id      String    @id @default(cuid())
+  for     Apartment @relation(fields: [id], references: [id])
+  monthly Float
+  pet     Float
+}
+
+model Fees {
+  id          String    @id @default(cuid())
+  for         Apartment @relation(fields: [id], references: [id])
+  admin       Float
+  application Float
+  pet         Float
+}
```

