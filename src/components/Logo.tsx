import React from "react";

type Props = {
    imgUrl: string,
    className?: string
}

const Logo : React.FC<Props> = ({imgUrl, className})=>{
    return (
        <div className={className}>
            <img src={imgUrl} alt="Logo" />
        </div>
    );
}

export default Logo;