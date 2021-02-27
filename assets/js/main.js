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
    var add = {}
    db.car_table.each(car=>{
       
        
        console.log(cars);
        
        add.push(car.car_type);
        
    })
    db.car_table.toArray()
    .then(value => {console.log(value);
        let minivanCount = 0;
        let limoCount = 0;
        let truckCount = 0;
        let suvCount = 0;
    for(let i = 0; i < value.length;i++){
        if(value[i].car_type === 'SUV'){
            suvCount++;
        }
        if(value[i].car_type == 'Mini Truck'){
            truckCount+=1;
        }
        if(value[i].car_type == 'Limousine'){
            limoCount+=1;
        }
        else if(value[i].car_type == 'MINIVAN'){
            minivanCount++;
        }
        
    }
    suv.innerHTML = suvCount;
    truck.innerHTML = truckCount;
    limo.innerHTML = limoCount;
    minivan.innerHTML = minivanCount
    
    });
   

    
    
});