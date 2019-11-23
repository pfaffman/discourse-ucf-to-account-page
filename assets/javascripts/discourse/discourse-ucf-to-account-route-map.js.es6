import { set } from "@ember/object";
import EmberObject from "@ember/object";

export default function() {
  this.route("discourse-ucf-to-account", function() {
    this.route("actions", function() {
      this.route("show", { path: "/:id" });
    });    
  });
};
