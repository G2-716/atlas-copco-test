import React from "react";

export const Triangle = (props) => {
    const {fill = 'white', ...restProps} = props;
    return (
        <svg {...restProps} viewBox="0 0 550 478" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.60779 5.64518L546.845 1.53972L278.782 474.05L3.60779 5.64518Z" fill={fill} stroke="white" strokeWidth="7"/>
        </svg>

    )
}