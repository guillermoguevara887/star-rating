
import React, { useState } from "react";
import { FaStar, FaRegStar } from 'react-icons/fa';


const Star = ({ totalStar = 5, filledStar = 0 }) => {
    const [hoveredStar, setHoveredStar] = useState(0);
    const [selectStar, setSelectStar] = useState(filledStar);

    const handleMouseEnter = (index) => {
        setHoveredStar(index + 1);
    }
    const handleMouseLeave = (index) => {
        setHoveredStar(0);
    }

    const handleSelectStar = (index) => {
        setSelectStar((index + 1))


    }

    const renderStar = () => {
        return Array.from({ length: totalStar }, (_, index) => {
            const isFilled = index < selectStar || index < hoveredStar;
            return (
                <span
                    key={index}
                    style={{ fontSize: "2rem", color: "gold" }}
                    onMouseEnter={() => handleMouseEnter(index)} // al pasar el mouse sobre una estrella
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleSelectStar(index)}

                >
                    {isFilled ? <FaStar /> : <FaRegStar />}
                </span>
            );

        });
    };
    return <div>{renderStar()}</div>
}
export default Star;



