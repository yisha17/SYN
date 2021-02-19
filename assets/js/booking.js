import CarRentalDB,{
    bulkcreate,
    getData,
    Sortobj
} from './module.js'


let db = CarRentalDB("CarRentalDB",{
    car_table:`++id,car_name,car_image,car_type,price,plate_number,is_rented`,
    user_table:`++id,user_name,email,password,pickup_date,dropup_date,car`
});

const userName = document.getElementById('user_name');
const carName = document.getElementById('car_name');
carName.disabled = true;
const pickDate = document.getElementById('pickup');
const dropDate = document.getElementById('dropup');
const userEmail = document.getElementById('user_email');
const userPassword = document.getElementById('password');

const choooseCar = document.getElementById('choose-car');
const bookNow = document.getElementById('book-now');
const urlParams = new URLSearchParams(window.location.search);
const id = Number(urlParams.get('id'));



document.addEventListener('DOMContentLoaded',()=>{
  

   db.car_table.get({id:id})
   .then(data=>
    {
    console.log(data.car_name);
    window.data = data;
    console.log(window.data)
    console.log(window.data.is_rented);
    carName.value = data.car_name
   });
    
    
    // const request = db.car_table.get(id,id})
});

bookNow.onclick =() =>{

    window.data.is_rented = true;
    let flag = bulkcreate(db.user_table,{
        user_name:userName.value,
        email:userEmail.value,
        pickup_date:pickDate.value,
        dropup_date:dropDate.value,
        password:userPassword.value,
        car: window.data
    })

    // db.user_table.update()
    db.car_table.update({id:id},{is_rented:true})
    .then(function(updated){
        console.log("updated");
    })
    .then(car => {
        console.log(car);
    })
        
   

    userName.value = userEmail.value = userPassword.value = pickDate.value = dropDate.value = carName.value = "";
}