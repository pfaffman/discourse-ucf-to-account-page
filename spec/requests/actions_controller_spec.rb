require 'rails_helper'

describe discourse-ucf-to-account::ActionsController do
  before do
    Jobs.run_immediately!
  end

  it 'can list' do
    sign_in(Fabricate(:user))
    get "/discourse-ucf-to-account/list.json"
    expect(response.status).to eq(200)
  end
end
