import CarRentalDB,{
    bulkcreate,
    getData,
    Sortobj
} from './module.js'

const db = CarRentalDB("CarRentalDB",{
    car_table:`++id,car_name,car_image,car_type,price,plate_number,is_rented`
});

const suv = document.querySelector('.suv'); 
const minivan = document.querySelector('.minivan'); 
const limo = document.querySelector('.limo'); 
const truck = document.querySelector('.truck'); 

document.addEventListener('DOMContentLoaded',()=>{
    db.car_table.each(car=>{
        console.log(car);
        let suvCount = 0;
        let minivanCount = 0;
        let limoCount = 0;
        let truckCount = 0;

        if (car.car_type == 'Mini Truck'){
            truckCount++;
            console.log(truckCount)
            truck.innerHTML = truckCount;
            
            
        }else if(car.car_type == 'MINIVAN'){
            minivanCount++;
            minivan.innerHTML = minivanCount;
        }else if(car.car_type == 'Limousine'){
            limoCount+=1;
            limo.innerText = limoCount;
        }else if(car.car_type == 'Mini Truck'){
            
            
        }
        suv.innerText = suvCount;
        
        
        
    })
});