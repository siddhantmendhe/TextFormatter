import React,{useState} from 'react'

export default function TextForm(props) {
  //hooks
  const [text,setText]=useState('');
  
  const handleUpClick=()=>{
    if(text===''){
    props.showAlert("Text is empty","danger");

    }
    else{
      let newText=text.toUpperCase()
      setText(newText);
      props.showAlert("Converted to uppercase","success");
    }
   
  }
  const handleLowClick=()=>{
    if(text===''){
      props.showAlert("Text is empty","danger");
  
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
      props.showAlert("Text is empty","danger");
  
      }
      else{
    
    navigator.clipboard.writeText(text);
    
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
      props.showAlert("Text is empty","danger");
  
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
        <div className="row">
        <div className="col-md-2 col-xs-2 col-sm-2 col-lg-2">
        <button className=" btn btn-primary my-2" onClick={handleUpClick}>Convert to Uppercase</button>

        </div>
        <div className="col-md-2 col-xs-2 col-sm-2 col-lg-2">
        <button className="btn btn-primary  my-2" onClick={handleLowClick}>Convert to Lowercase</button>
        </div>
        <div className="col-md-2 col-xs-2 col-sm-2 col-lg-2">
        <button className="btn btn-primary my-2" onClick={handleCopy}>Copy to clipboard</button>
        </div>
        <div className="col-md-2 col-xs-2 col-sm-2 col-lg-2">
        <button className="btn btn-primary my-2" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="col-md-2 col-xs-2 col-sm-2 col-lg-2">
        <button disabled={text.length===0} className="btn btn-danger my-2" onClick={handleClearText}>Clear Text</button>
        </div>
        </div>


    </div>
    <div className="container my-3">
     
      <h3>Your text summary</h3>

      <h1 className="display-6"><strong>{text.split(/[\s+.,:;]/).filter((element)=>{
        return (element.length!==0) && element!=='/[;:,.]/';

      }).length}</strong> words and <strong>{(text.replace(/\s+/g,"")).length}</strong> characters</h1>
      <h1 className="display-6">
      <strong>
        {0.008 * text.split(/[\s+.,:;]/).filter((element)=>{
        return (element.length!==0) && element!=='/[;:,.]/';

      }).length}</strong> Minutes read</h1>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textBox above to preview it here"}</p>
    </div>
    </>
  )
}
