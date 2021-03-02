import CarRentalDB,{
    bulkcreate,
    getData,
    Sortobj
} from './module.js'

const name = document.getElementById('user_name');
const password = document.getElementById('password'); 
const login = document.getElementById('login');
let db = CarRentalDB('CarRentalDB',{
    car_table:`++id,car_name,car_image,car_type,price,plate_number,is_rented`,
    user_table:`++id,user_name,email,password,pickup_date,dropup_date,car`,
	admin_table:`++id,user_name,password`
});

// let flag = bulkcreate(db.admin_table,{
// 	user_name:"yishak",
// 	password:"yisa"
// });

login.addEventListener('click', () => {
	console.log("login clicked");
	db.admin_table.each(data =>{
		console.log(data.password);
		if(name.value === data.user_name && password.value === data.password){
			console.log(true);
			window.location.href = '/admin.html';
		}
	});

	
})




document.getElementById('button').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";	
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});

