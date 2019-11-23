# frozen_string_literal: true

# name: discourse-ucf-to-account
# about: Move User Custom Fields to the Account page
# version: 0.1
# authors: pfaffman
# url: https://github.com/pfaffman

register_asset 'stylesheets/common/discourse-ucf-to-account.scss'
register_asset 'stylesheets/desktop/discourse-ucf-to-account.scss'
register_asset 'stylesheets/mobile/discourse-ucf-to-account.scss'

enabled_site_setting :discourse_ucf_to_account_enabled

PLUGIN_NAME ||= 'DiscourseUcfToAccount'

load File.expand_path('lib/discourse-ucf-to-account/engine.rb', __dir__)

after_initialize do
  # https://github.com/discourse/discourse/blob/master/lib/plugin/instance.rb
end
