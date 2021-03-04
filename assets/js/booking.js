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
  
if(id){
    db.car_table.get({id:id})
    .then(data=>
     {
     console.log(data.car_name);
     window.data = data;
     console.log(window.data)
     console.log(window.data.is_rented);
     carName.value = data.car_name
    });
}
  
    
    // const request = db.car_table.get(id,id})
});

bookNow.onclick =() =>{

     validateForm();
    if(validateForm() === true){
        


            window.data.is_rented = true;
            let flag = bulkcreate(db.user_table,{
            user_name:userName.value,
            email:userEmail.value,
            pickup_date:pickDate.value,
            dropup_date:dropDate.value,
            password:userPassword.value,
            car: window.data});

        
            db.car_table.update({id:id},{is_rented:true})
            .then(function(updated){
                console.log("updated");
            })


    }


    userName.value = userEmail.value = userPassword.value = pickDate.value = dropDate.value = carName.value = "";
}


const validateForm = () => {
    console.log("validating");
    const userName = document.getElementById('user_name');
    const carName = document.getElementById('car_name');

    const pickDate = document.getElementById('pickup');
    const dropDate = document.getElementById('dropup');
    const userEmail = document.getElementById('user_email');
    const userPassword = document.getElementById('password');

    const choooseCar = document.getElementById('choose-car');
    const bookNow = document.getElementById('book-now');
    var datev = new Date();
    
    var date = dayjs(datev).toISOString();
    
    var rdate = date.slice(0,10);
    var emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (userName.value ===''|| userEmail.value === ''|| pickDate.value ===''|| userPassword.value ===''|| dropDate.value===''|| carName.value ===''){
        alert('please complete the form')
        return false;
    }else if(userPassword.value.length < 8){
        userPassword.placeholder = 'your password must be more than 8 characters';
        return false;
    }else if(userEmail.value.match(emailReg)){
        alert("incorrect Email")
        return false;
    }else if(dayjs(pickDate.value).isBefore(dayjs(rdate))){
        alert("incorrect Date")
        return false;
    }else if(dayjs(pickDate.value).isAfter(dayjs(dropDate.value))){

        alert("incorrect date drop up date")
        return false;

    }
    else{
        return true;
    }  
}