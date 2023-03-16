import React from 'react';
import {Form, Button} from 'react-bootstrap';

const LeftSide = () => {
  return (
    <div >
        <br></br>
        <br></br>
        <br></br>
        <h1 style={{color:"#e62626eb", fontFamily: "Arial, Helvetica, sans-serif", fontSize:"30px", marginLeft:"-120px"}}>Login</h1>
        <Form style={{marginLeft:"30%",width:"60%", marginTop:"30px", textAlign:"left" }}>
        <Form.Group className="mb-8" controlId="formBasicEmail">
        <Form.Label style={{color:"black", fontStyle:"Arial", fontWeight:"lighter"}} >Email Address :</Form.Label>
        <Form.Control type="email" placeholder="Enter email" style={{ marginBottom:"40px", width:"500px", height:"40px"}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{color:"black", fontStyle:"Arial",  fontWeight:"lighter"}}>Password :</Form.Label>
        <Form.Control style={{width:"500px", height:"40px"}} type="password" placeholder="Password" />
      </Form.Group>

      <Button class="btn btn-danger" type="submit" style={{width:"120px",color:"white", backgroundColor:"#e62626eb" , border:"none", marginLeft:"200px"}}>
       Login
      </Button>
     
        </Form>
        <a style={{color:"grey", marginTop:"50px" , marginLeft:"-70px", textDecoration:"none"}} href="https://www.w3schools.com/html/" title="">Mot de passe oublié?</a>
    </div>
  )
}

export default LeftSide 