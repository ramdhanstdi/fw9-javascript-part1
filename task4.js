let data = {
    id: 1,
    name: "leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:{
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "gwenborough",
        zipcode: "92998-3874"
    },
    phone : "1-770-736-8031 x56442",
    website: "hildegard.org"
}

//a
let dataMe = {
    name: "Ramdhan Setiadhi",
    email: "ramdhansetiadhi@gmail.com",
    hobby: "main game"
}

let dataNew = {...data, ...dataMe}
console.log(dataNew)

//b
const {address}=data
const {street,city}=address
console.log(street);
console.log(city);