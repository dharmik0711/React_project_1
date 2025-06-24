import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here:');

  const handleUpClick = () => {
    console.log("Uppercase button clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    
  };
  
  const handlelowClick = () => {
    console.log("lowercase button clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
    
  };
    const handleclearClick = () => {
    
    let newText = '';
    setText(newText);
    
  };
  const handleinverseClick = () => {
    let newText = '';
    for (let i = text.length - 1; i >= 0; i--) {
      newText += text[i];
    }
    setText(newText);
  };


  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea 
          className="form-control" 
          value={text} 
          onChange={handleOnChange} 
          id="mybox" 
          rows="8">
        </textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to uppercase
      </button>  
         <button className="btn btn-primary mx-2" onClick={handlelowClick}>
        Convert to lowercase
      </button>
         <button className="btn btn-primary mx-2" onClick={handleclearClick}>
        Clear text
      </button>
           <button className="btn btn-primary mx-2" onClick={handleinverseClick}>
        inverse text
      </button>

    <div className='container my-2'>
<h1>your text here </h1>
<p>your text summary </p>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").length} Minutes to read</p>
<h2>Preview</h2>
<p>{text}</p>    </div>
    </div>


  );
}
