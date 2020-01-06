class OwnershipsController < ApplicationController
    def index
        @ownerships = Ownership.all 
        render json: @ownerships
    end

    def show
        @ownership = Ownership.find(params[:id])
        render json: @ownership
    end

    def create
        @ownership = Ownership.create(ownership_params)
        render json: @ownership
    end

    def update
        @ownership = Ownership.find(params[:id])
        @ownership.update(ownership_params)
        render json: @ownership
    end

    def destroy
        @ownership = Ownership.find(params[:id])
        @ownership.destroy
        render json: @ownership
    end

    private

    def ownership_params
        params.permit(:user_id, :coin_id, :amount)
    end

end
