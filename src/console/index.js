// import {Increment} from './tools'
const {Increment} = require('./tools')

const Calculate = (input,array)=>{

    var output=[]
    array.forEach(element => output.push({key:element,value:0}));
    
    var index=0
    var inspector = array[index]

    while(true){

        if(input>=inspector){ 
            input-=inspector
            output=Increment(output,inspector)
        }else{ 
            inspector=array[++index]
        }

        // stopping condition
        switch(input){
            case 0: return output
        }
    }
}

// const input = 269
// const array = [200,100,50,20,10,5,1]
// const ret = Calculate(input,array)
// console.log(ret)

module.exports={Calculate}