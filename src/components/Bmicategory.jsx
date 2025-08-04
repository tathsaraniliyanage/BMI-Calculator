import React, { useState } from 'react';


function Bmicategory({ bmi }) {
    const getCategory = (bmi) => {
        if (bmi < 18.5) {
            return 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            return 'Overweight';
        } else {
            return 'Obesity';
        }
    };

    return (
        <div className='bmi-category'>
            {bmi ? (
                <h2>Your BMI Category: {getCategory(bmi)}</h2>
            ) : (
                <h2>Please calculate your BMI first</h2>
            )}
        </div>
    );
}

export default Bmicategory;