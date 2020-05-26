const dynamicsort=(property,order) =>{
    var sort_order = 1;
    if(order === "desc"){
        sort_order = -1;
    }
    return function (a, b){
        // a should come before b in the sorted order
        if(a[property] < b[property]){
                return -1 * sort_order;
        // a should come after b in the sorted order
        }else if(a[property] > b[property]){
                return 1 * sort_order;
        // a and b are the same
        }else{
                return 0 * sort_order;
        }
    }
}

// arr=Increment(arr)
var Increment=(arr,target)=>{

    
    var tmp = arr.filter(item=>item.key===target)[0]
    if(tmp===undefined){
        console.log(`target ${target} is non-existent. error 404`)
        return;
    }
    tmp={...tmp,value:tmp.value+1}
    
    var ret = arr.filter(item=>item.key!==target)
    ret.push(tmp)

    return ret.sort(dynamicsort("key","desc"))
}

// const arr = [200,100,50,20,10,5,1]
// var output=[]
// arr.forEach(element => output.push({key:element,value:0}));
// console.log(Increment(output,5))

module.exports={Increment,dynamicsort}