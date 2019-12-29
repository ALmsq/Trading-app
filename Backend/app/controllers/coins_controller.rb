class CoinsController < ApplicationController
    def index
        @coins = Coin.all
        render json: @coins
    end

    def show
        @coin = Coin.find(params[:id])
        render json: @coin
    end

    def create
        @coin = Coin.create(coin_params)
        render json: @coin
    end

    def update
        @coin = Coin.find(params[:id])
        @coin.update(coin_params)
        render json: @coin
    end

    def destroy
        @coin = Coin.find(params[:id])
        @coin.destroy
        render json: @coin
    end

    private

    def coin_params
        params.permit(:name, :ticker, :price, :rank )
    end
end
