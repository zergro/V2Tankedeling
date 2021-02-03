const contentful = require('contentful-management')

const client = contentful.createClient({
  accessToken: 'CFPAT-gOfRPZgLx-ka-ineE8gKj45v3c4NEKCitNhybYWM9KQ'
})

client.getSpace('o26jaa5lkfrt')
.then((space) => space.getEnvironment('<environment-id>'))
.then((environment) => environment.createEntry('<content_type_id>', {
  fields: {
    title: {
      'en-US': 'Entry title'
    }
  }
}))
.then((entry) => console.log(entry))
.catch(console.error)