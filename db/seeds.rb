User.delete_all

User.create(
  first_name: "Bobby",
  last_name: "Bob",
  email: "b@email.com",
  password: "password",
  location: "New York, NY, United States",
  accepting_guests: true
)

User.create(
  first_name: "Sally",
  last_name: "Sal",
  email: "s@email.com",
  password: "password",
  location: "New York, NY, United States"
)

User.create(
  first_name: "Bear",
  last_name: "B",
  email: "bear@email.com",
  password: "password",
  location: "New York, NY, United States",
  accepting_guests: true
)

User.create(
  first_name: "Miu",
  last_name: "Two",
  email: "miu@email.com",
  password: "password",
  location: "New York, NY, United States",
  accepting_guests: false
)

User.create(
  first_name: "Rio",
  last_name: "Rio",
  email: "rio@email.com",
  password: "password",
  location: "Oakland, CA, United States",
  accepting_guests: false
)

