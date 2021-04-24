const faker = require('faker')
const fs = require('fs')

const { price, productName, productDescription, department } = faker.commerce

const items = [...Array(30).keys()].map((_, i) => ({
  id: i + 1,
  title: productName(),
  description: productDescription(),
  price: price(),
  category: department(),
  imageUrl: 'http://placeimg.com/300/300/business'
}))

const json = { items, orders: [] }

fs.writeFileSync("./db.json", JSON.stringify(json), "utf-8", () => {
  console.log("File was successfully created")
})
