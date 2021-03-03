import CarRentalDB,{
  bulkcreate,
  getData,
  Sortobj
} from './module.js'
const carRow = document.querySelector('.car-row');
const clientRow = document.querySelector('customer-container');
const tbody = document.getElementById('tbody');
const carRemove = document.querySelector('.car-delete');

let db = CarRentalDB('CarRentalDB',{
  car_table:`++id,car_name,car_image,car_type,price,plate_number,is_rented`,
  user_table:`++id,user_name,email,password,pickup_date,dropup_date,car`
});


getData(db.car_table,(data)=>{
  // console.log(data);
});



document.addEventListener('DOMContentLoaded',()=>{
  const customerRemove = document.getElementById('cust-delete');
  let outpost = ''
  db.car_table.each(car =>{
      // console.log(car.car_image);
    outpost += `
    <div class="col-lg-3 mt-5 mb-5">
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${car.car_image}" alt="Card image cap">
        <div class="card-body align-center">
          <h3 class="card-title text-center">${car.car_name}</h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${car.car_type}</li>
            <li class="list-group-item">${car.price}birr/day</li>
            <li class="list-group-item">${(car.is_rented)? 'Rented':'Available' }</li>
          </ul>
          <a href="admin.html?id=${car.id}"><i class="fa fa-edit"></i></a>
          <a href="#" data-id ="${car.id}" class="car-delete"><i class="fa fa-trash"></i></a><br>
        </div>
      </div>
</div>
    `; 
    carRow.innerHTML = outpost;


  })
  
  
  
  let tb = ''
  db.user_table.each(user => {
    console.log(user)
    
    tb += `
    <tr>
    <th id="id" scope="row">${user.id}</th>
    <td>${user.user_name}</td>
    <td>${user.email}</td>
    <td>${user.password}</td>
    <td>${user.pickup_date}</td>
    <td>${user.dropup_date}</td>
    <td>${user.car.car_name}</td>
    <td>${(dayjs(user.dropup_date).diff(dayjs(user.pickup_date),"day")) * parseInt(user.car.price)} Birr</td>
    <td><a id="cust-delete" class="btn btn-danger  customer-delete"><i class="fa fa-trash"></i></a></td>
  </tr>
    `;

    tbody.innerHTML = tb;

   
  })

  var datev = new Date();
  
  var date = dayjs(datev).toISOString();
  
  var rdate = date.slice(0,10);

  
  db.user_table.where('dropup_date').equals(rdate).delete()
  .then((deleted)=>{
    console.log("deleted");
  })

  
  setTimeout( carRemove.addEventListener('click',()=>{
    let id = Number(e.target.getAttribute('data-id'));
    console.log(id);

  }),6000);
 

});








  
