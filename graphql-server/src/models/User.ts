import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("User", {
  fields: (t: any) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    messages: t.relation("messages"),
  }),
});

builder.queryField("users", (t) =>
  t.prismaField({
    type: ["User"],
    resolve: async (query, root, args, ctx, info) => {
      return prisma.user.findMany({ ...query });
    },
  })
);

builder.mutationField("createUser", (t) =>
  t.prismaField({
    type: "User",
    args: {
      name: t.arg.string({ required: true }),
    },
    resolve: (query, root, args, ctx, info) => {
      return prisma.user.create({ ...query, data: { ...args } });
    },
  })
);

builder.mutationField("deleteUser", (t) =>
  t.prismaField({
    type: "User",
    args: {
      id: t.arg.id({ required: true }),
    },
    resolve: (query, root, args, ctx, info) => {
      return prisma.user.delete({ ...query, where: { id: Number(args.id) } });
    },
  })
);
