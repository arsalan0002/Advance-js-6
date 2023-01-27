var mobiles = [

    {
        name: "a30",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 2000,
        brands: "Samsung"
    },
    {
        name: "note10",
        ram: "6gb",
        rom: "128gb",
        camera: "50px",
        price: 4000,
        brands: "Samsung"
    },
    {
        name: "s10",
        ram: "3gb",
        rom: "128gb",
        camera: "10px",
        price: 5000,
        brands: "Samsung"
    },

    {
        name: "iphone4",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
        brands: "Apple"
    },
    {
        name: "iphone4s",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 20000,
        brands: "Apple"
    },
    {
        name: "iphone5",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 30000,
        brands: "Apple"
    },
    {
        name: "iphone6",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 30000,
        brands: "Apple"
    },
    {
        name: "redminote10",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
        brands: "Xiaomi"
    },
    {
        name: "redminote11",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
        brands: "Xiaomi"
    },
    {
        name: "redmi10",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
        brands: "Xiaomi"
    },
    {
        name: "redmi10pro",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
        brands: "Xiaomi"
    },
    {
        name: "a3s",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
        brands: "Oppo"
    },
];



let brands = mobiles.map((x) => x.brands);
brands = [...new Set(brands)];
// console.log(brands);

let models;

let a = document.getElementById('brand');
console.log(a.value);

let modelSelect = document.getElementById('model');

// // console.log(models);
// // console.log(a);
function init() {
    brands.forEach((x) => {
        console.log("Inside init function", x);
        a.innerHTML += `<option value ='${x}'>${x}</option>`
    });
}

init();

function getBrand() {
    console.log(a.value);

    models = mobiles.filter((x) => x.brands === a.value).map((x) => x.name);
    console.log(models);

    modelSelect.innerHTML = "";


    models.forEach(x => {
        modelSelect.innerHTML += `<option value ='${x}'>${x}</option>`;
    });
}
;

function searchMob() {
    let obj = mobiles.find(x => x.brands === a.value && x.name === modelSelect.value);

    console.log(obj);
}
searchMob();