
function compare(obj1, obj2){
    if(typeof obj1 === typeof obj2){
        if(typeof obj1 != "object"){
            return obj1 === obj2;
        }
        let obj1Enteries = Object.entries(obj1);
        let obj2Enteries = Object.entries(obj2);
        if(obj1Enteries.length !== obj2Enteries.length){
            return false;
        }
        for(let i=0; i<obj1Enteries.length; i++){
            if(!compare( obj1Enteries[i][1], obj2Enteries[i][1]) ){
                return false;
            }
        }
        return true;
        }else{
        return false;
    }
}

let obj1 = {
    a: 1, 
    b: 2, 
    c: {
        d: "hello",
        e:{f: 2}
    }
}

let obj2 = {
    a: 1,
    b: 2, 
    c: {
        d: "hello",
        e:{f: 2}
    }
}

console.log(compare(obj1, obj2));