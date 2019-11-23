module DiscourseUcfToAccount
  class DiscourseUcfToAccountController < ::ApplicationController
    requires_plugin DiscourseUcfToAccount

    before_action :ensure_logged_in

    def index
    end
  end
end
