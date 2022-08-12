import { useState } from "react"

const TextForm = () => {
    const [text,setText]=useState("Enter the text")

    // function handleText(){
    //   console.log("text event is fired")     // this is the normal functionis here
    // }


    const convertUpText=()=>{

        console.log("text handel is fired");
        let newtext=text.toUpperCase();
        setText(newtext);
    }

    const convertLoText=()=>{

        console.log("text handel is fired");
        let newtext=text.toLowerCase();
        setText(newtext);
    }

    const changeText=(event)=>{
        console.log("change on");
        setText(event.target.value)
    }

  return (
 <>
 
    <h2>Text utlis</h2>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={changeText} id="text" cols="2" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={convertUpText}>Conver to upperCase</button>
<button className="btn btn-primary mx-1" onClick={convertLoText}>Conver to lowerCase</button>

<div className="container">
    <h1>text summary</h1>
    <p>{text.split(" ").filter((Element)=>Element).length} words and {text.length} chracters</p>
    <p>{0.008 * text.split(" ").length} minutes read words</p>

    <h2>prevew</h2>
    <p>{text}</p>
</div>
 </>
  )
}

export default TextForm