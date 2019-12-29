class User < ApplicationRecord
    has_many :ownerships
    has_many :coins, through: :ownerships
end
