require_dependency "discourse_ucf_to_account_constraint"

DiscourseUcfToAccount::Engine.routes.draw do
  get "/" => "discourse_ucf_to_account#index", constraints: DiscourseUcfToAccountConstraint.new
  get "/actions" => "actions#index", constraints: DiscourseUcfToAccountConstraint.new
  get "/actions/:id" => "actions#show", constraints: DiscourseUcfToAccountConstraint.new
end
