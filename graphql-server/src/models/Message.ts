import { builder } from "../builder";

builder.prismaObject("Message", {
  fields: (t: any) => ({
    id: t.exposeID("id"),
    body: t.exposeString("body"),
    createdAt: t.expose("createdAt", { type: "Date" }),
  }),
});
