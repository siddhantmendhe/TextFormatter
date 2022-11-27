import React,{useState} from 'react'

export default function TextForm(props) {
  //hooks
  const [text,setText]=useState('');
  
  const handleUpClick=()=>{
    if(text===''){
    props.showAlert("Text is empty Text","danger");

    }
    else{
      let newText=text.toUpperCase()
      setText(newText);
      props.showAlert("Converted to uppercase","success");
    }
   
  }
  const handleLowClick=()=>{
    if(text===''){
      props.showAlert("Text is empty Text","danger");
  
      }else{
        let newText=text.toLowerCase()
        setText(newText);
        props.showAlert("Converted to lowercase","success");
        
      }
    
  }
  const handleOnChange=(e)=>{
    setText(e.target.value);
    console.log('On change');
  }
  //Copy function
  const handleCopy=()=>{
    if(text===''){
      props.showAlert("Text is empty Text","danger");
  
      }
      else{
    let text=document.getElementById("myBox");
    navigator.clipboard.writeText(text.value);
    props.showAlert("Coppied to Clipbord","success");
      }

  }
  //Clear Text
  const handleClearText=()=>{
    setText('');
    props.showAlert("Cleared Text","danger");


  }
  //RemoveExtraSpaces
  const RemoveExtraSpaces=()=>{
    if(text===''){
      props.showAlert("Text is empty Text","danger");
  
      }
      else{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces","success");
      }
    

  }


  // setText('New text');
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#222637':'white',color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="8 "></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy to clipboard</button>
        <button className="btn btn-primary mx-2" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>

        <button className="btn btn-danger mx-2" onClick={handleClearText}>Clear Text</button>



    </div>
    <div className="container my-3">
     
      <h1>Your text summary</h1>
      <p>{text!==''?text.split(" ").length:"0"} words and {text.length} characters</p>
      <p>{text!==''?`${0.008 * text.split(" ").length}`:"0"} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textBox above to preview it here"}</p>
    </div>
    </>
  )
}
