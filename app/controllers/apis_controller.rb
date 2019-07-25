class ApisController < ApplicationController
  layout 'api'

  def index
    @id = "PPV8CQQ2"
    @url = "https://api.clashofclans.com/v1/clans/%23#{@id}"
    @response = RestClient.get(@url, {Authorization: ENV["TOKEN"]})
    @data = JSON.parse @response
    # render json: @data
    # puts @data
  end

  private


end
