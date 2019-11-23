import { set } from "@ember/object";
import EmberObject from "@ember/object";
import discourseComputed from "discourse-common/utils/decorators";
import { isEmpty } from "@ember/utils";

export default {
setupComponent(attrs, component){
  const siteUserFields = this.site.get("user_fields");
    if (!isEmpty(siteUserFields)) {
      const userFields = this.get("model.user_fields");
      const publicUserFields = siteUserFields
        .filterBy("show_on_user_card", true)
        .sortBy("position")
        .map(field => {
          set(field, "dasherized_name", field.get("name").dasherize());
          const value = userFields ? userFields[field.get("id")] : null;
          return isEmpty(value) ? null : EmberObject.create({ value, field });
        })
        .compact();

        component.set('publicUserFields', publicUserFields);
    }
}
};
