class CoinSerializer < ActiveModel::Serializer
  attributes :id, :name, :ticker, :price, :rank
end
