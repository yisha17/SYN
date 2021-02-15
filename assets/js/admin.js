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





addCar.onclick =(event) =>{
    
   
    let flag = bulkcreate(db.car_table,{
        car_name:carName.value,
        car_image:chooseFile.value,
        car_type:carType.value,
        price:carPrice.value,
        plate_number:plateNumber.value,
        is_rented:false
    })
    console.log("created")
    console.log(flag);
    carName.value = chooseFile.value= carType.value = carPrice.value = plateNumber.value = "";
    getData(db.car_table,(data)=>{
        console.log(data);
    });
}









browse.addEventListener('click',choosePhoto);

function choosePhoto(){
    chooseFile.click();
    console.log("successful");
}
chooseFile.addEventListener('change',function(){
    const file = this.files[0];
    if(file){
        const reader = new FileReader();

        imgText.style.display = "none";
        carImage.style.display = "block";

        reader.addEventListener('load',function(){
            carImage.setAttribute('src',this.result);
        });

        reader.readAsDataURL(file);
    }

});

//Database process









