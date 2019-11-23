module DiscourseUcfToAccount
  class Engine < ::Rails::Engine
    engine_name "DiscourseUcfToAccount".freeze
    isolate_namespace DiscourseUcfToAccount

    config.after_initialize do
      Discourse::Application.routes.append do
        mount ::DiscourseUcfToAccount::Engine, at: "/discourse-ucf-to-account"
      end
    end
  end
end
