import CarRentalDB,{
    bulkcreate,
    getData,
    Sortobj
} from './module.js'

let db = CarRentalDB("CarRentalDB",{
    car_table:`++id,car_name,car_image,car_type,price,plate_number,is_rented`
});
var carType = document.querySelectorAll('.dropdown-item');
const available_cars = document.getElementById('available-cars');
const cart1 = document.getElementById('cart1');
const cart2 = document.getElementById('cart2');
const cart3 = document.getElementById('cart3');
const cart4 = document.getElementById('cart4');
const cart5 = document.getElementById('cart5');
const cart6 = document.getElementById('cart6');
const cart7 = document.getElementById('cart7');
const cart8 = document.getElementById('cart8');
const cart9 = document.getElementById('cart9');
const book = document.querySelector('.book');



cart1.addEventListener('click',getType);
cart2.addEventListener('click',getType);
cart3.addEventListener('click',getType);
cart4.addEventListener('click',getType);
cart5.addEventListener('click',getType);
cart6.addEventListener('click',getType);
cart7.addEventListener('click',getType);
cart8.addEventListener('click',getType);
cart9.addEventListener('click',getType);
book.addEventListener('click',bookCar)


function getType(e){
    console.log(e.target.innerText)
    let word = e.target.innerText
    let outpost = '';
    db.car_table.each(car =>{
        console.log(car.car_name);
        if((word == car.car_type) && (car.is_rented === false)){
            console.log(car.car_type);
            outpost = `
            <div class="col-sm-3">
            <div class="card card-block">
              <img class="card-img-top" data-src="${car.car_image}" alt="100%x180" src="./assets/img/car2.jpg" data-holder-rendered="true" style="height: 180px; width: 100%; display: block;">
              <div class="card-block">
                <h4 class="card-title">${car.car_name}</h4>
                
                <a href="#" class="btn btn-primary book">BOOK</a>
              </div>
              
          </div>
          
        </div>
            `;
            available_cars.innerHTML = outpost;


        }
    })
}

function bookCar(e){
    db.car_table.get(car.car_name);
}



