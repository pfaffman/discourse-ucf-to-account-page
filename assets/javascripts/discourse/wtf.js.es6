import { set } from "@ember/object";
import EmberObject from "@ember/object";
import discourseComputed from "discourse-common/utils/decorators";

export default {
  //this.route("discourse-ucf-to-account", function() {
  //  this.route("actions", function() {
  //    this.route("show", { path: "/:id" });
  //  });
    
  @discourseComputed("model.user_fields.@each.value")
  publicUserFields() {
    console.log('what about this?');
    const siteUserFields = this.site.get("user_fields");
    if (!isEmpty(siteUserFields)) {
      const userFields = this.get("model.user_fields");
      return siteUserFields
        .filterBy("show_on_user_card", true)
        .sortBy("position")
        .map(field => {
          set(field, "dasherized_name", field.get("name").dasherize());
          const value = userFields ? userFields[field.get("id")] : null;
          return isEmpty(value) ? null : EmberObject.create({ value, field });
        })
        .compact();
    }
  }, 
};
