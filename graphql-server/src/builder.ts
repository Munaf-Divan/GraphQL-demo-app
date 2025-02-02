import { DateResolver } from "graphql-scalars";

import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";

import { prisma } from "./db";

import type PrismaTypes from "@pothos/plugin-prisma/generated";

export const builder = new SchemaBuilder<{
  Scalars: {
    Date: { Input: Date; Output: Date };
  };
  PrismaTypes: PrismaTypes;
}>({
  plugins: [PrismaPlugin],
  prisma: { client: prisma },
});

builder.queryType({});
builder.mutationType({});
builder.addScalarType("Date", DateResolver, {});
