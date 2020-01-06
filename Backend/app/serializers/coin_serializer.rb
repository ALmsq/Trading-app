class CoinSerializer < ActiveModel::Serializer
  attributes :id, :name, :ticker, :price, :rank, :ath, :logo
end
