import CarRentalDB,{
    bulkcreate,
    getData,
    Sortobj
} from './module.js'


let db = CarRentalDB('CarRentalDB',{
    user_table:`++id,user_name,email,password,pickup_date,dropup_date,car`
});

const urlParams = new URLSearchParams(window.location.search);
const id = Number(urlParams.get('id'));
const all = document.getElementById('cos'); 


document.addEventListener('DOMContentLoaded',()=>{
    if(id){
        let outpost =''
        db.user_table.get(id)
        .then((user)=>{
            outpost +=`
            <div class="container bg-warning mt-5 text-center ">
            <h1>${user.user_name}</h1>
        </div>
        
        <div class="container">
            <div class="col-lg-3 mt-2 mb-5">
                <div class="card" style="width: 60rem; height:80vh">
                    <img class="card-img-top" src="/assets/img/car1.jpg" alt="Card image cap">
                    <div class="card-body">
                      <h2 class="card-title text-center bg-success">${user.car.car_name}</h2>
                      <ul class="list-group list-group-flush text-center">
                        <li class="list-group-item bg-danger">pickup date:${user.pickup_date}</li>
                        <li class="list-group-item bg-info">dropoff date:${user.dropup_date}</li>
                        <li class="list-group-item bg-warning">total price:${(dayjs(user.dropup_date).diff(dayjs(user.pickup_date),"day")) * parseInt(user.car.price)}</li>
                        <li class="list-group-item"><a href="index.html" class="btn btn-success">Go to Home Page</a></li>
                
                      </ul>
                    </div>
                  </div>
            </div>
        </div>   
            
            `;

            all.innerHTML = outpost;
        });
    }

    


});
