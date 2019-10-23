import React from 'react'

import { colors } from 'utils/theme'

export const Circle = ({
    fill = colors.white,
    color = colors.tundora,
    r=12
    }) =>{
    const cXY = r+1;
    const heightWidth = cXY * 2;

    return(
        <svg height={heightWidth} width={heightWidth}>
            <circle stroke={color} strokeWidth="2" fill="transparent"  cx={cXY} cy={cXY} r={r}/>
        </svg>
    )
}

export const Here = ({ fill = colors.purpleDarkColor, width = 24, height = 32 }) =>{
    return (
        <svg width={width} height={height}>
            <g id="Icons" stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
                <g id="Rounded" transform="translate(-377.000000, -1306.000000)">
                    <g id="Communication" transform="translate(100.000000, 1162.000000)">
                        <g id="-Round-/-Communication-/-location_on" transform="translate(272.000000, 142.000000)">
                            <g>
                                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                <path d="M12,2 C8.13,2 5,5.13 5,9 C5,13.17 9.42,18.92 11.24,21.11 C11.64,21.59 12.37,21.59 12.77,21.11 C14.58,18.92 19,13.17 19,9 C19,5.13 15.87,2 12,2 Z M12,11.5 C10.62,11.5 9.5,10.38 9.5,9 C9.5,7.62 10.62,6.5 12,6.5 C13.38,6.5 14.5,7.62 14.5,9 C14.5,10.38 13.38,11.5 12,11.5 Z" id="🔹Icon-Color" fill={fill}></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
</svg>

    )
}

export const Check = ({ color = colors.success, width = 24, height = 24 }) => {
    return(
        <svg width={width} height={height} fill="none" stroke={color} strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
    )
}

export const Arrow = ({ fill = '#121313', width = 35, height = 32, right, left }) => {
    const rotate = (right && 0) || (left && 180) || 0;
    return(
        <svg width={width} height={height} fill={fill} style={{transform:`rotate(${rotate}deg)`}} >
            <path clipRule='evenodd' d="M31.705,15.284L31.705,15.284L31.705,15.284
                 l-9.97-9.991c-0.634-0.66-1.748-0.162-1.723,0.734v4.976C20.008,11.002,20.004,11,20,11H1c-0.55,0-1,0.45-1,1v8c0,0.55,0.45,1,1,1
                 h19c0.004,0,0.008-0.002,0.012-0.002v4.972c-0.024,0.892,1.082,1.376,1.715,0.742l9.977-9.999
                 C32.098,16.318,32.098,15.678,31.705,15.284z M22.017,23.564V19H22h-1h-0.988v0.002C20.008,19.002,20.004,19,20,19h-1H2v-6h17h1
                 c0.004,0,0.008-0.002,0.012-0.002V13H21h1h0.017V8.432l7.55,7.566L22.017,23.564z"/>
            <g /><g /><g /><g /><g /><g />
        </svg>
    )
}
