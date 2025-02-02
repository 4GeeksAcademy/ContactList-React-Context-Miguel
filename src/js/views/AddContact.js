import React, { useState } from "react";
import { json } from "react-router";



export const AddContact = () => {

    const [infoUser,setInfoUser] = useState();

    
    
   const postData = async () => {

        try {
            
            const response = await fetch('https://playground.4geeks.com/contact/agendas/Miguel/contacts',
            {method: "POST",
                body:JSON.stringify({name: infoUser.name,
                                    phone: infoUser.phone,
                                    email: infoUser.email,
                                    address: infoUser.address}),
                headers:{
                    "Content-Type": "application/json"
                }    
            
            });

        } catch (error) {
            
        }
    }

    const handleChange = (evento) => {

        setInfoUser({...infoUser,[evento.target.name]:evento.target.value});

        console.log("Esto es el info user");
        console.log(infoUser.name);
        
        
    }

    

    return(
        <>
        
            <div className="container">
                <form>
                        <div class="mb-3">
                            <label for="exampleInputName" class="form-label">Full Name</label>
                            <input type="text" class="form-control" onChange={(e)=>handleChange(e)} name="name" id="exampleInputName" aria-describedby="nameHelp"/>
                            <div id="NameHelp" class="form-text">Introduce aqui tu nombre</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" onChange={(e)=>handleChange(e)} name="email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPhone" class="form-label">Phone</label>
                            <input type="text" class="form-control" onChange={(e)=>handleChange(e)} name="phone" id="exampleInputPhone" aria-describedby="phoneHelp"/>
                            <div id="phoneHelp" class="form-text">Introduce aqui tu numero</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputName" class="form-label">Address</label>
                            <input type="text" class="form-control" onChange={(e)=>handleChange(e)} name="address" id="exampleInputEmail1" aria-describedby="nameHelp"/>
                            <div id="addressHelp" class="form-text">Introduce aqui tu direccion</div>
                        </div>
                        
                        <button type="submit" onClick={postData} class="btn btn-primary">Submit</button>
                </form> 
            </div>
        </>


    )
}

