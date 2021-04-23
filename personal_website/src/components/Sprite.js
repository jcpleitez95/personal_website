import React from 'react';
import m1 from './sprites/m1.png';

export default function Sprite({data, position}) {
    // const {y, x, h, w} = data

    return (
        <div style={{
            display: "inline-block",
            position: "absolute",
            top: 400,
            left: 0,
            height: `64px`,
            width: `64px`,
            backgroundImage: `url(${m1})`,
            backgroundPosition: `-64px -64px`,
            backgroundRepeat: "no-repeat",
            imageRendering: "pixelated",

        }}>
        </div>
    )
}
