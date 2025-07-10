import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here:');

  const handleUpClick = () => {
    console.log("Uppercase button clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
      props.showAlert("Text converted to uppercase!", "success");
    
  };
  
  const handlelowClick = () => {
    console.log("lowercase button clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
           props.showAlert("Text converted to lowercase!", "success");
    
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
           props.showAlert("Text inversed!", "success");
  };


  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  

  return (
    <div style={{color : props.mode === 'dark' ? 'white' : 'black' }}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea 
          className="form-control" 
          value={text} 
          onChange={handleOnChange} 
          style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white',color : props.mode === 'dark' ? 'white' : 'black'   }}
          id="mybox" 
          rows="8">
        </textarea>
      </div>
<button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>
  Convert to uppercase
</button>

<button disabled={text.length === 0} className="btn btn-primary my-1 mx-2" onClick={handlelowClick}>
  Convert to lowercase
</button>

<button disabled={text.length === 0} className="btn btn-primary my-1 mx-2" onClick={handleclearClick}>
  Clear text
</button>

<button disabled={text.length === 0} className="btn btn-primary my-1 mx-2" onClick={handleinverseClick}>
  Inverse text
</button>


    <div className='container my-2'>
<h1>your text here </h1>
<p>your text summary </p>
<p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").length} Minutes to read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter your text to preview it here"}</p>    </div>
    </div>


  );
}
// {text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length   using hthid element we can make sure that blank spaces are nt counted