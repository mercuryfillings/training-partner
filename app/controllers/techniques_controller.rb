# frozen_string_literal: true

class TechniquesController < ApplicationController
  before_action :authorize_request, only: %i[user_show user_index create update destroy]
  before_action :set_technique, only: %i[update destroy]

  # # GET /techniques
  # def index
  #   @techniques = Technique.all

  #   render json: @techniques
  # end

  # GET techniques from a single user
  def user_index
    @techniques = Technique.where(user_id: params[:user_id])

    render json: @techniques
  end

  # GET single technique from single user
  def user_show
    @technique = Technique.where(user_id: params[:user_id], name: params[:name])

    render json: @technique
  end

  # # GET /techniques/1
  # # not sure if this is limiting to user
  # def show
  #   @technique = Technique.where(name: params[:name])

  #   render json: @technique
  # end

  # POST /techniques
  def create
    @technique = Technique.new(technique_params)
    @technique.user = @current_user

    if @technique.save
      render json: @technique, status: :created
    else
      render json: @technique.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /techniques/1
  def update
    if @technique.update(technique_params)
      render json: @technique
    else
      render json: @technique.errors, status: :unprocessable_entity
    end
  end

  # DELETE /techniques/1
  def destroy
    @technique.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_technique
    @technique = @current_user.technique.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def technique_params
    params.require(:technique).permit(:name)
  end
end
