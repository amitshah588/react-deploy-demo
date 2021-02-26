import React from 'react';
import './Form.css';
const Form = () => {
    return(
        <div>
            <form>  
            <div class="container">   
            <label class="abc">Username : </label>  <br/> 
            <input type="text" placeholder="Enter Username" name="username" required/>  <br/>
            <label style = {{ marginTop:40}} class="abc">Password : </label>   <br/>
            <input type="password" placeholder="Enter Password" name="password" required/><br/>  
            </div>
            <div style = {{ width : 150, height : 150,marginTop:40, marginLeft : 220 }}>
            <button type="submit">SUBMIT</button> 
            </div>
            </form>
        </div>
        
    )
} 

export default Form;