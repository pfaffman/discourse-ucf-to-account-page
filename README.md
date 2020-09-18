## discourse-ucf-to-account-page

Adds the user custom fields to `my/preferences/account` for a site that has the profile tab hidden.


This overrides https://github.com/discourse/discourse/blob/master/app/assets/javascripts/discourse/app/templates/preferences/account.hbs

If changes are made to that file then this theme component will need to be updated accordingly.

Look for
```
{{!-- this is the section added to
      discourse/app/assets/javascripts/discourse/app/templates/preferences/account.hbs
      to add userfields to the account page (because the profile page
      is removed)
--}
```
 in `javascripts/discourse/templates/preferences/account.hbs`.
