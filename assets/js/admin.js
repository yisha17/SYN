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









