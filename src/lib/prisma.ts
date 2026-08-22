import "dotenv/config";

import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

import { PrismaClient } from "../../generated/prisma/client";

const connectString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaBetterSqlite3( {   url: connectString });

const prisma = new PrismaClient( { adapter });

export 