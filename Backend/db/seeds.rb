# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.destroy_all
# Coin.destroy_all
# Ownership.destroy_all

# auth-key is 4b84f1a1a7f47f9dd686e342ef6af4a4

alex = User.create(name: 'Alex')
alex2 = User.create(name: 'alex2')
gorilla = Coin.create(name: 'Gorilla', ticker: 'GOR', price:100000, rank:1)
gorilla2 = Coin.create(name: 'Gorilla2', ticker: 'GOR2', price:10000, rank:2010)

currencies_ticker_url = 'https://api.nomics.com/v1/currencies/ticker?key=4b84f1a1a7f47f9dd686e342ef6af4a4&ids=BTC,ETH,XRP,USDT,BCH,LTC,EOS,BNB,BSV,XLM,XTC,TRX,ADA,ATOM,LEO,XMR,HT,LINK,NEO,MIN,USDC,ETC,IOT,CRO,MKR,DASH,DOGE,OMG,BTT,STRAT&interval=1d,30d&convert=EUR'

currencies_ticker_data = HTTParty.get(currencies_ticker_url)

currencies_ticker_data.each{|coin| 
    bitcoin = Coin.create(name: coin['name'], ticker: coin['id'], price: coin['price'], rank: coin['rank'])
    # bitcoin.save
}

Ownership.create(user: alex, coin: gorilla)
Ownership.create(user: alex2, coin: gorilla)
Ownership.create(user: alex2, coin: gorilla2)

