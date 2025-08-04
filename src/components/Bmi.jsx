import React, { useState } from 'react';

function Bmi() {

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');


    const findCategory = (bmi) => {
        if (bmi < 18.5) {
            return 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            return 'Overweight';
        } else {
            return 'Obesity';
        }
    }

    const calculateBmi = () => {
        if (weight > 0 && height > 0) {
            const result = (weight / (height * height)).toFixed(2);
            setBmi(result);
            setCategory(findCategory(result));
        } else {
            setBmi(null);
            setCategory('Please enter valid values');
        }
    };


    return (
        <div className='bmi-container'>
            <h1>BMI Calculator</h1>

            {/* weight input field */}
            <div className='input-container'>
                <label htmlFor="weight">Weight (kg): </label>
                {/* <input type="number" id="weight" name="weight" /> */}
                <input
                    type="number"
                    id="weight"
                    name="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />

            </div>
            <div className='input-container'>
                {/* height input field */}
                <label htmlFor="height">Height (m): </label>
                {/* <input type="number" id="height" name="height" step="0.01" /> */}
                <input
                    type="number"
                    id="height"
                    name="height"
                    step="0.01"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />

            </div>

            <button type="button" onClick={calculateBmi}>Calculate BMI</button>

            {/* result display */}
            {/* <div id="result" >
                <h2 >Your BMI will be displayed here</h2>
                {bmi &&
                    <>
                        <h2>Your BMI: {bmi}</h2>
                        <h2>Your BMI Category: {findCategory(bmi)}</h2>
                    </>
                }
            </div> */}

            <div id="result">
                {bmi ? (
                    <>
                        <h2>Your BMI: {bmi}</h2>
                        <h2>Your BMI Category: {category}</h2>
                    </>
                ) : (
                    <h2>{category || "Your BMI will be displayed here"}</h2>
                )}
            </div>

            {/* footer section*/}
            <div className='footer'>
                <p>Developed by Prabodha Thathsarani</p>
                <p>© 2025 BMI Calculator</p>
            </div>
        </div>
    );
}

export default Bmi;