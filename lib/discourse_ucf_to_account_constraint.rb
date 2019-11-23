class DiscourseUcfToAccountConstraint
  def matches?(request)
    SiteSetting.discourse_ucf_to_account_enabled
  end
end
