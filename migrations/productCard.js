require("dotenv").config();
const { newMigration } = require("@graphcms/migration");

// create a new migration for an environment
// using auth token and environment endpoint url.
const migration = newMigration({
  authToken: process.env.authToken,
  endpoint: process.env.endpoint,
});

migration.createRemoteTypeDefinition({
  definition:
    "type CommerceLayerSimple { code: String!, name: String!, formatted_ammount: String!, available: Boolean }",
  displayName: "Commerce Layer Simple",
  description: "Information from the Inventory managment",
});

migration.model("Product").addRemoteField({
  apiId: "inventory",
  displayName: "Inventory",
  remoteConfig: {
    method: "GET",
    payloadFieldApiIds: ["productId"],
    returnType: "CommerceLayerSimple",
    url: "https://gcms-demo-inventory.vercel.app/api/inventory",
  },
});

// run migration
migration.run();
