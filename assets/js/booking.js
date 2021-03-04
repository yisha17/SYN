'use strict';
import CarRentalDB,{
    bulkcreate,
    getData,
    Sortobj
} from './module.js'

let db = CarRentalDB("CarRentalDB",{
    car_table:`++id,car_name,car_image,car_type,price,plate_number,is_rented`
});

//choosing photo
const browse = document.getElementById('filebtn');
const chooseFile = document.getElementById('myfile');
const photoContainer = document.getElementById('image-preview');
const imgText = document.querySelector('.image-text');

//database 
const carImage = document.querySelector('.img-preview');
const carName = document.querySelector('.car-name');
const carType = document.querySelector('.car-type');
const plateNumber = document.querySelector('.plate-number');
const carPrice = document.querySelector('.car-price');
const addCar = document.querySelector('.btn-adder');
const urlParams = new URLSearchParams(window.location.search);
const id = Number(urlParams.get('id'));


addCar.onclick =(event) =>{
    if(id){
        console.log("clicked");
        console.log(id);


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
  

        db.car_table.update(id,{
                    
            car_name:carName.value,
            plate_number:plateNumber.value , 
            price:carPrice.value,
            car_type:carType.value
        
        }).then((updated)=>{
            console.log("updated");
        }).catch((error)=> {
            console.log(error);
        });
        
    }
    else{

        if(validateForm() === true){
            let flag = bulkcreate(db.car_table,{
                car_name:carName.value,
                car_image:window.result,
                car_type:carType.value,
                price:carPrice.value,
                plate_number:plateNumber.value,
                is_rented:false
            })
            console.log(carName.value)
            console.log("created")
            console.log(flag);
            carName.value = chooseFile.value= carType.value = carPrice.value = plateNumber.value = "";
            getData(db.car_table,(data)=>{
                console.log(data);
            });
        }
    }
    
    
   
  
}

browse.addEventListener('click',choosePhoto);

function choosePhoto(){
    chooseFile.click();
    console.log("successful");
    console.log(carImage.src);
}
chooseFile.addEventListener('change',function(){
    const file = this.files[0];
    if(file){
        const reader = new FileReader();

        imgText.style.display = "none";
        carImage.style.display = "block";

        reader.addEventListener('load',function(){
            carImage.setAttribute('src',this.result);
            window.result = this.result
            
        });

        //console.log(reader.readAsBinaryString(file));
         reader.readAsDataURL(file);
    }

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
document.addEventListener('DOMContentLoaded',()=>{
   
    if (id){
        addCar.textContent = "Update Car"
        db.car_table.get(id)
        .then(data => {
            carName.value = data.car_name;
            carPrice.value = data.price;
            carType.value = data.car_type;
            plateNumber.value = data.plate_number;
            carImage.setAttribute ('src',data.car_image);
        });

        console.log(window.result);
        
    }
});

const validateForm = () =>{
   if(carName.value === ""||
   carPrice.value ===""||
   carType.value ===""||
   carImage.src === ""||
   carPrice.value === ""||
   window.result ===undefined){
       alert("fill the form completely");
       return false;
   }
   else{
       return true;
   } 
}









