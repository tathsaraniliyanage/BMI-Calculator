import React, { useState } from 'react';


function Bmi() {

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);



    const calculateBmi = () => {
        if (weight > 0 && height > 0) {
            const result = (weight / (height * height)).toFixed(2);
            setBmi(result);

        } else {
            setBmi('Please enter valid values');

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
            <div id="result" >
                <h2 >Your BMI will be displayed here</h2>
                {bmi &&
                    <h2>Your BMI: {bmi}</h2>
                }
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