class Coin < ApplicationRecord
    has_many :ownerships
    has_many :users, through: :ownerships

    def ohlc
        [self.open_time, self.open, self.high, self.low, self.close]
    end
end
