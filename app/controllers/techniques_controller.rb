class TechniquesController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_technique, only: [:update, :destroy]

  # GET /techniques
  def index
    @techniques = Technique.all

    render json: @techniques
  end

  # GET /techniques/1
  def show
    @technique = Technique.find(params[:id])

    render json: @technique
  end

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
