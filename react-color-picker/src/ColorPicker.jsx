import React, {useState} from 'react';
function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF");

    const handleColorChange = ({target}) =>{
        setColor(target.value);
    }

    return (
        <>
        <h1>Color Picker</h1>
        <div className="color-picker-container" style={{backgroundColor: color}}>
            <p>Selected color: {color}</p>
            </div> 
            <label>Select a color: </label>
            <input type="color" value={color} onChange={handleColorChange} />
        </>
    )



}
export default ColorPicker;