10.times do
  User.create(
  	first_name: Faker::Name.first_name, 
  	last_name: Faker::Name.last_name, 
  	email: "#{Faker::HitchhikersGuideToTheGalaxy.planet}@email.com", 
  	password: "password", 
  	birthday: Faker::Date.birthday(18, 65),
  	city: "#{Faker::Address.city}, Faker::Address.state_abbr",
  	gender: ["female", "male"].sample)
end