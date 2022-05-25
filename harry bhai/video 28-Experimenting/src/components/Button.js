import React, { useState } from 'react'
import "../CompoStyles/Button.css"

function Button(props) {

    // this.state = {
    //     BackCol: "white",
    //   };

    const [Mymode, setMymode] = useState("light")
   
    
    const toggleModefunc = () => {
        if (Mymode === "light") {
            setMymode("dark")
            document.body.style.backgroundColor = "#042743";
            props.addContactHandler()
            
            
            //   const elements = document.querySelectorAll(".card-body")
            //   elements.forEach(elems => {
                //     elems.style.backgroundColor = "#042743";
                //     elems.style.color = "#fff"
                // });
          
            }
            
            else {
                setMymode("light")
                document.body.style.backgroundColor = "white";
                props.addContactHandler()
                
                
            
            // const elements2 = document.querySelectorAll(".card-body")
            //   elements2.forEach(elems => {
            //     elems.style.backgroundColor = "#fff";
            //     elems.style.color = "black"
            // });
        }
    }

    return (
        <div className='light-btn'>
            <input type="checkbox" className="checkbox" id="checkbox" onClick={toggleModefunc} />
            <label htmlFor="checkbox" className="label">
                <i className="fas fa-moon" />
                <i className="fas fa-sun" />
                <div className="ball">
                </div>
            </label></div>

    )
}

export default Button