import {
  generateProject,
  app,
  collection,
  field,
  relation,
  shortcuts,
  sharedModel,
  GeneratorKind,
  faker,
} from "../utils";

export const Users = collection({
  id: "Users",
  representedBy: "fullName",
  behaviors: {
    softdeletable: true,
  },
  mock: {
    count: 2,
  },
  fields: [
    // Standard fields present for user (isEnabled, createdAt)
    ...shortcuts.fields.user.standard(),
    // Information about password storage (hash, email, etc)
    shortcuts.field.user.password(),
    shortcuts.field.softdeletable(),
    ...shortcuts.fields.timestampable(),
    field({
      id: "roles",
      type: field.types.ENUM,
      enumValues: ["ADMIN", "USER"],
      isArray: true,
    }),
    field({
      id: "fullName",
      type: field.types.STRING,
      isReducer: true,
    }),
    field({
      id: "email",
      type: field.types.STRING,
      isReducer: true,
    }),
  ],
  relations: [...shortcuts.relations.blameable()],
});
