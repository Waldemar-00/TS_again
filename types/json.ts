const json = {
  "officeId": 5,
  "isOpened": false,
  "contacts": {
    "phone": "+375297770099",
    "email": 'exampl@tds.com',
      "address": {
        "city": "San Francisco",
      },
    },
  "description": "similique fugit est illum et dolorum harum et voluptate eaque quidem exercitationem quos nam commodi possimus cum odio nihil nulla dolorum exercitationem magnam ex et a et distinctio debitis"
}
type Json = typeof json

const office: Json = json

console.log(office.contacts.email)
