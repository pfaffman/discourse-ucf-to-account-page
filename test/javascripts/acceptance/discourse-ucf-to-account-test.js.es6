import { acceptance } from "helpers/qunit-helpers";

acceptance("discourse-ucf-to-account", { loggedIn: true });

test("discourse-ucf-to-account works", async assert => {
  await visit("/admin/plugins/discourse-ucf-to-account");

  assert.ok(false, "it shows the discourse-ucf-to-account button");
});
