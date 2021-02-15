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
const pickDate = document.getElementById('pickup');
const dropDate = document.getElementById('dropup');
const userEmail = document.getElementById('user_email');
const userPassword = document.getElementById('password');

const choooseCar = document.getElementById('choose-car');
const bookNow = document.getElementById('book-now');

bookNow.onclick =() =>{
   let flag =bulkcreate(db.user_table,{
        user_name:userName.value,
        email:userEmail.value,
        pickup_date:pickDate.value,
        dropup_date:dropDate.value,
        password:userPassword.value,
        car: carName.value
    })
   

    userName.value = userEmail.value = userPassword.value = pickDate.value = dropDate.value = carName.value = "";
}