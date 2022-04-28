import React, { useState } from 'react';

export default function Form(props){
    const style = {
        // position:'absolute',
        // top:'8rem',
        // right:'8vw'
        height:'87vh'
    }
 
    const changeupper = (text)=>{
        if(!text){
            props.showAlert("Empty text","warning");
        }
    //   preventDefault();
    else{
       console.log(text);
       setText(text.toUpperCase());
       props.showAlert("Changed to Uppercase","success");
       setTimeout(()=>{
           props.SetAlert(null)
       },1500)}
    }
    const changelower = (text)=>{
        if(!text){
            props.showAlert("Empty text","warning");
        }
        //   preventDefault();
        else{
           console.log(text);
           setText(text.toLowerCase());
           props.showAlert("Changed to lowercase","success");
        //    console.log(props.alert);
        }}
        const clear = (text)=>{
            if(!text){
                props.showAlert("Empty text","warning");
            }
            else{
            setText("");
            props.showAlert("Text cleared","success");
            // console.log(props.alert);
        }}
    const copyText =  ()=> {
        if(!text){
            props.showAlert("Empty text","warning");
        }
            /* Get the text field */
            else{
            var copyText = document.getElementById("myInput");
          
            /* Select the text field */
            copyText.select();
          
            /* Copy the text inside the text field */
            document.execCommand("copy");
            props.showAlert("Text Copied","success");
            document.getSelection().removeAllRanges();
            // copyText.deselect();
            /* Alert the copied text */
            }
          }
        const extraSpace = (s)=>{
            if(!text){
                props.showAlert("Empty text","warning");
            }
            else{
            s = s.replace(/(^\s*)|(\s*$)/gi,"");
            s = s.replace(/[ ]{2,}/gi," ");
            s = s.replace(/\n /,"\n");
            setText(s);
            props.showAlert("Extra space removed","success");
        }    }
       
    const [text, setText] = useState('Enter text here');
    const [words1, setWords] = useState('0');
    
    return (
        <>
        <div className='container my-2' style={style}>
            <h3>Try it - Change to uppercase | Change to lowercase | Remove extra spaces</h3>
            
                <textarea style={props.style}  placeholder='Enter your text here' className='form-control' id='myInput' onChange={(e)=>{setText(e.target.value)}}  rows='8' value={text}  />
                <button disabled={text.length===0} onClick={()=>{changeupper(text)}}  className="btn btn-primary mx-1 my-1">Change to upperCase</button>
                <button disabled={text.length===0} onClick={()=>{changelower(text)}}  className="btn btn-primary mx-1 my-1">Change to lowerCase</button>
                <button disabled={text.length===0} onClick={()=>{clear(text)}}  className="btn btn-primary mx-1 my-1">Clear Text</button>
                <button disabled={text.length===0} onClick={()=>{extraSpace(text)}} id='extraspace'  className="btn btn-primary mx-1 my-1">Remove Extra Spaces</button>
     
                <button disabled={text.length===0} onClick={()=>{copyText()}} id='copy'  className="btn btn-primary mx-1 my-1">Copy</button>
                <br/>
                
                number of words are - {text.split(/\s+/).filter((element)=>{return element.length!=0}).length} and number of characters are - {text.length}
    
        </div>
        </>
    )
}
