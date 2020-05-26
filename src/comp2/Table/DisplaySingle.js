import React from 'react'

const DisplaySingle = ({item:{key,value}})=>{

    if(value!==0){
        return(<tr>
            <td>{key}</td>
            <td>{value}</td>
            </tr>)
    }else{
        return(<tr></tr>)
    }
}

export default DisplaySingle
