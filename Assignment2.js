function myStringify(object){
    let str = '';
    let resultString = myStringifyHelper(object, str);
    return resultString;
}

function myStringifyHelper(object, str){
    if( !(typeof object === "object")){
        if(typeof object === 'string'){
            str += '"'+object+'"';
        }else{
            str += object;
        }return str;
    }else{
        str += '{';
        let objectEnteries = Object.entries(object);
        for(let i = 0; i < objectEnteries.length; i++){
            if(i != 0){
                str += ',';
            }
            str += '"'+objectEnteries[i][0]+'":';
            str = myStringifyHelper(objectEnteries[i][1], str);
        }
        str += '}';
        return str;
    }
}

const obj ={
    a : 1,
    b : 2,
    c : "hello",
    d : {aa: 1, 
        b: "hello",
        c:{a:1.2}
    }
}

let str = myStringify(obj);
console.log(str);