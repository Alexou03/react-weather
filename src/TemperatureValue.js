import React, { useState } from 'react';

export default function TemperatureValue(props) {
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
    return (
    <span className="TemperatureValue">
    <span className="temperature">{props.celsius}</span>
                <span className="unit">°C | <a href="/" onClick={showFahrenheit}>°F</a></span>
    </span>
    );
    }  else {
        let fahrenheit = (props.celsius * 9) / 5 + 32;
        return (
    <span className="TemperatureValue">
    <span className="temperature">{Math.round(fahrenheit)}</span>
                <span className="unit"><a href="/" onClick={showCelsius}>°C</a> | °F</span>
    </span>
    );
    }
}
    