# frozen_string_literal: true

class TrainingSessionsController < ApplicationController
  before_action :authorize_request, only: %i[create update destroy]
  before_action :set_training_session, only: %i[update destroy]

  # GET /training_sessions
  def index
    @training_sessions = TrainingSession.all

    render json: @training_sessions
  end

  # GET /training_sessions/1
  def show
    @training_session = TrainingSession.find(params[:id])

    render json: @training_session
  end

  # POST /training_sessions
  def create
    @training_session = TrainingSession.new(training_session_params)
    @training_session.user = @current_user

    if @training_session.save
      render json: @training_session, status: :created
    else
      render json: @training_session.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /training_sessions/1
  def update
    if @training_session.update(training_session_params)
      render json: @training_session
    else
      render json: @training_session.errors, status: :unprocessable_entity
    end
  end

  # DELETE /training_sessions/1
  def destroy
    @training_session.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_training_session
    @training_session = @current_user.training_session.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def training_session_params
    params.require(:training_session).permit(:name)
  end
end
