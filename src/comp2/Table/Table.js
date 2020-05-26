import React from 'react'
import DisplaySingle from './DisplaySingle'

const Table = ({ headers, data }) =>
    <React.Fragment>
        <table>
            <thead>
                <th>{headers[0]}</th>
                <th>{headers[1]}</th>
            </thead>
            <tbody>
                {
                    data.map(item=><DisplaySingle item={item}/>)
                }
            </tbody>
        </table>
    </React.Fragment>



export default Table
