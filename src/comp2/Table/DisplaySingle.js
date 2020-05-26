import React from 'react'
import DisplayImage from './DisplayImage'

const DisplaySingle = ({item:{key,value}})=>{

    if(value!==0){
        return(<tr>
            <td>{key}</td>
            <td>{value}</td>
            <td><DisplayImage keeyy={key} value={value}/></td>
            </tr>)
    }else{
        return(<tr></tr>)
    }
}

export default DisplaySingle
