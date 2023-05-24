import React from "react";

type Props = {
    imgUrl: string,
    className?: string
}

const Logo: React.FC<Props> = ({imgUrl})=>{
    return (
        <div className="w-1/3">
            <img src={imgUrl} alt="Logo" className="w-80"/>
        </div>
    );
}

export default Logo;