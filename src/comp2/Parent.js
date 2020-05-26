import React, { useState, useEffect } from 'react'

// REACTJS
import Table from './Table/Table'
import Input from './Reusable/Input'
import Button from './Reusable/Button'

// CONSOLE FUNCTIONS
const { Calculate } = require('../console/index')

function Parent() {

    const [value, valueSet] = useState(-1)
    const [isAllow, isAllowSet] = useState(false)

    const Allow = (data) => isAllow ? data : [{ key: 1, value: 1 }]

    return (
        <React.Fragment>

            <center>
                <Input
                    onChange={value => valueSet(value)}
                    placeholder={`Insert total money in your pocket`} />
                
                <Button
                onClick={()=>isAllowSet(true)}
                name={`Submit`}
                />

                {
                    isAllow &&
                    <Table
                        headers={[`key`, `value`]}
                        data={Allow(Calculate(value, [200, 100, 50, 20, 10, 5, 1]))}
                    />
                }

            </center>


        </React.Fragment>
    )
}



export default Parent
