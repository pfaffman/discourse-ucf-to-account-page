import { set } from "@ember/object";
import EmberObject from "@ember/object";
import discourseComputed from "discourse-common/utils/decorators";
console.log('doing this thing');

export default {
@discourseComputed("model.user_fields.@each.value")
  publicUserFields() {
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