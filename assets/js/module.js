
const CarRentalDB = (dbname,tableName) =>{
    const db = new Dexie(dbname);
    db.version(4).stores(tableName);
    db.open();

    return db;
}


//insert function

const bulkcreate = (dbtable,data)=>{
    dbtable.bulkAdd([data]);
    let flag = empty(data);
    if(flag){
        console.log("data inserted successfully");
    }else{
        console.log("please provide data");
    }

    return flag;
}
//check empty

const empty = object => {
    let flag = false;
    for(const value in object){
        if(object[value]!= "" && object.hasOwnProperty(value)){
            flag = true;
        }else{
            flag = false;
        }
    }
    return flag;
    
}



//get data from databse
const getData = (dbtable,fn) =>{
    let index = 0;
    let obj = {};
    dbtable.count(count=>{
        if(count){
            dbtable.each(table =>{
                obj = Sortobj(table)
                fn(obj,index++);
            })
        }else{
            fn(0);
        }
    })
}
//sort
const Sortobj = sortobj =>{
    let obj = {};

    obj ={
        id:sortobj.id,
        car_name:sortobj.car_name,
        car_image:sortobj.car_image,
        car_type:sortobj.car_type,
        price:sortobj.price,
        plate_number:sortobj.plate_number,
        is_rented:sortobj.is_rented
    }
    console.log(obj)
    return obj;
}


export default CarRentalDB; 
export{
    bulkcreate,
    getData,
    Sortobj
}
