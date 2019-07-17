# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Social.destroy_all
Social.create!(pagename: 'twitter', pageurl: 'https://twitter.com', imageurl: 'https://image.flaticon.com/icons/svg/8/8800.svg')
Social.create!(pagename: 'linkedin', pageurl: 'https://linkedin.com', imageurl: 'https://image.flaticon.com/icons/svg/34/34227.svg')
Social.create!(pagename: 'facebook', pageurl: 'https://facebook.com', imageurl: 'https://image.flaticon.com/icons/svg/59/59439.svg')
Social.create!(pagename: 'youtube', pageurl: 'https://youtube.com', imageurl: 'https://image.flaticon.com/icons/svg/733/733646.svg')
Social.create!(pagename: 'soundcloud', pageurl: 'https://soundcloud.com', imageurl: 'https://image.flaticon.com/icons/svg/33/33649.svg')