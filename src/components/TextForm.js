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
        <div class="row">
        <div class="col-md-2 col-xs-2 col-sm-2 col-lg-2">
        <button className=" btn btn-primary my-2  btn-sm" onClick={handleUpClick}>Convert to Uppercase</button>

        </div>
        <div class="col-md-2 col-xs-2 col-sm-2 col-lg-2">
        <button className="btn btn-primary  my-2  btn-sm" onClick={handleLowClick}>Convert to Lowercase</button>
        </div>
        <div class="col-md-2 col-xs-2 col-sm-2 col-lg-2">
        <button className="btn btn-primary my-2  btn-sm" onClick={handleCopy}>Copy to clipboard</button>
        </div>
        <div class="col-md-2 col-xs-2 col-sm-2 col-lg-2">
        <button className="btn btn-primary my-2  btn-sm" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div class="col-md-2 col-xs-2 col-sm-2 col-lg-2">
        <button className="btn btn-danger my-2 btn-sm" onClick={handleClearText}>Clear Text</button>
        </div>
        </div>


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
