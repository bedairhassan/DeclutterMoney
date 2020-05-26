import React, { useState } from 'react'

const DisplayImage = ({ keeyy, value }) => {

    const aspect = 4
    const width = 98
    const height = 227

    var imgs = []

    // value: 3
    // push 3 images
    for (let i = 0; i < value; i++) {

        const string = keeyy === 1 ? `coin` : keeyy
        console.log(keeyy)

        imgs.push({
            alt: `Display image of money paper with value of ${value}`,
            src: require(`../moneyy/${string}.png`)
        })
    }

    return (
        <React.Fragment>
            {imgs.map(({ src, alt }) => {

                var height2 = height / aspect
                var width2 = width / aspect


                if (src === `coin`) {
                    height2 = 125
                    width2 = 97
                }

                return (<img src={src} alt={alt} height={height2} width={width2} />)
            }



            )}
        </React.Fragment>
    )
}

export default DisplayImage
