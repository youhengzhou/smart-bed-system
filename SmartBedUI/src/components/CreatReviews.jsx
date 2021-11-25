import React, {useState,useEffect} from "react";
import axios from "axios" //axios is used for Http API request, a better way than do it with fetch()// .then.catch is also used.
import  '../css/createReviews.css';
function CreateReview() {
    const [input, setInput] = useState({
        title:'',
        content:''
    })
    function handleChange(event){
        const {name, value} =event.target;
        setInput(prevInput=>
            {
                return{
                     ...prevInput, //...prevInput is to reserve the last Input
                     [name]: value //name is dynamic, "title" then setTitle, "content" then setContent.
                    
                }
            }
        )
        console.log(event.target);
    }
    function handleClick(event){
        event.preventDefault();
        const newReview = {
            title: input.title,
            content: input.content
        }
        setInput(prevInput=>
            {
                return{
                    title:"",
                    content:""
                }
            }
            
        )
        alert("sending: "+newReview.title+"+" +newReview.content)
        console.log("sending: "+newReview.title+"+" +newReview.content)
        axios.post('http://localhost:3001/create' , newReview) //post to 3001/create with our new review, see reviewRoute.js
    }
    function handleKeyUp(event){
        if(event.keyCode==13){ //"Enter" Kyepress has the Keycode of 13
            handleClick(event)
        }
    }
    return <div className = "create-class">
        <h1 className="head">Create Review</h1>
        <form>
            <div className="form-group">
                <input onChange={handleChange} name="title" value={input.title} autoComplete="off" className = 'form-control' placeholder="Your Name"></input>
            </div>

            <div className="form-group text">
                <textarea onChange={handleChange} name="content" value={input.content} autoComplete="off" className = 'form-control' placeholder="Review Content"></textarea>
            </div>
            
            {/* Abandoned key listener(Left for learning purpose) <button onClick={handleClick} onKeyUp={handleKeyUp} className="btn btn-large btn-info">Add Note</button> */}
            <button onClick={handleClick} className="btn btn-large btn-secondary">Add Review</button>
        </form>
    </div>
}


export default CreateReview;