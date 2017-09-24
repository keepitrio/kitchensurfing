10.times do
  User.create(
  	first_name: Faker::Name.first_name, 
  	last_name: Faker::Name.last_name, 
  	email: "#{Faker::HitchhikersGuideToTheGalaxy.planet}@email.com", 
  	password: "password", 
  	location: "#{Faker::Address.city}, #{Faker::Address.state_abbr}, #{Faker::Address.country}"
end