//Get data out of local storage
ParsedCustomersDB = JSON.parse(localStorage.getItem("CustomersDB"))

let emailAdd = []
const emailAddresses = ParsedCustomersDB.forEach(element => {
    element.contacts.email.map(currentEmail => emailAdd.push(currentEmail))
    console.log(emailAdd)
})
