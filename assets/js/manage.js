import CarRentalDB,{
    bulkcreate,
    getData,
    Sortobj
} from './module.js'
const carRow = document.querySelector('.car-row');

let db = CarRentalDB('CarRentalDB',{
    car_table:`++id,car_name,car_image,car_type,price,plate_number,is_rented`
});
console.log(db)

getData(db.car_table,(data)=>{
    console.log(data);
});



document.addEventListener('DOMContentLoaded',()=>{
    let outpost = ''
    db.car_table.each(car =>{
        console.log(car.car_image);
      outpost += `
      <div class="col-lg-3">
      <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${car.car_image}" alt="Card image cap">
          <div class="card-body">
            <h3 class="card-title text-center">${car.car_name}</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${car.car_type}</li>
              <li class="list-group-item">${car.price}birr/day</li>
              <li class="list-group-item">${car.is_rented}</li>
            </ul>
            <a href=""><i class="fa fa-edit"></i></a>
            <a href=""><i class="fa fa-trash"></i></a><br>
          </div>
        </div>
  </div>
      `; 
      carRow.innerHTML = outpost;


    })

    

});



    
