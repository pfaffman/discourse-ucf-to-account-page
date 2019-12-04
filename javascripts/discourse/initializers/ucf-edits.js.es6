import { withPluginApi } from 'discourse/lib/plugin-api';
import { default as discourseComputed, on } from "discourse-common/utils/decorators";
import { popupAjaxError } from "discourse/lib/ajax-error";
import { isEmpty } from "@ember/utils";
import EmberObject from "@ember/object";


export default {
    name: 'account-ucf',
    initialize() {
        withPluginApi("0.8.33", ucfEdits)
    }
}

const ucfEdits = (api) => {
    api.modifyClass("controller:preferences/account", {
        @on('init')
        addSavedAttributes(){
            this.saveAttrNames.push("user_fields");
        } ,

        @discourseComputed("model.user_fields.@each.value")
        userFields() {
            let siteUserFields = this.site.get("user_fields");
            if (!isEmpty(siteUserFields)) {
            const userFields = this.get("model.user_fields");

            // Staff can edit fields that are not `editable`
            if (!this.get("currentUser.staff")) {
                siteUserFields = siteUserFields.filterBy("editable", true);
            }

            return siteUserFields.sortBy("position").map(function(field) {
                const value = userFields
                ? userFields[field.get("id").toString()]
                : null;
                return EmberObject.create({ value, field });
            });
            }
        },

        actions:{
            save(){
                console.log('in save');
                this.set("saved", false);

                this.model.setProperties({
                  name: this.newNameInput,
                  title: this.newTitleInput,
                  primary_group_id: this.newPrimaryGroupInput
                });

                const model = this.model,
                userFields = this.userFields;
                // Update the user fields
                if (!isEmpty(userFields)) {
                    const modelFields = model.get("user_fields");
                    if (!isEmpty(modelFields)) {
                    userFields.forEach(function(uf) {
                        modelFields[uf.get("field.id").toString()] = uf.get("value");
                    });
                    }
                }
          
                return this.model
                  .save(this.saveAttrNames)
                  .then(() => this.set("saved", true))
                  .catch(popupAjaxError);
            }
        }
    });

    api.modifyClass("controller:preferences/profile", {

        @on('init')
        removeUserFields(){
          this.set("userFields", null);
        }
    });
}