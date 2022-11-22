import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
const Adduser = () => {
const [name,setname]=useState("");
const [email,setemail]=useState("");
const [phone,setphone]=useState("");
const [desc,setdesc]=useState("");
 
const [error,setError]=useState(false);
const handleSubmit=(e)=>{
  e.preventDefault();
  if(name.length==0||email.length==0 || phone.length==0 ||desc.length==0){
    setError(true);
  }
  // if(firstName&&lastName)
  // {
  // console.log("First Name: ",firstName,"\nLast Name: ",lastName)
  // }
}
  return (
    <Container> 
    <h3 className='text-center mt-4'>Add new users</h3>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name}  onChange={(e) =>setname(e.target.value)} placeholder="Enter name" />  
        {error&&name.length<=0?
          <label> Name can't be Empty</label>:""} 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" value={email} onChange={(e) =>setemail(e.target.value)} placeholder="Enter email" />   
      {error&& email.length<=0?
        <label> email can't be Empty</label>:""} 
    </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="text"  value={phone} onChange={(e) =>setphone(e.target.value)} placeholder="Enter your Phone Number" />
        {error && phone.length<=0?
          <label> Phone can't be Empty</label>:""} 
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3}   value={desc} onChange={(e) =>setdesc(e.target.value)} placeholder="send your quary"/>
        {error&& desc.length<=0?
          <label> Description can't be Empty</label>:""} 
      </Form.Group>
       
     
     <Button variant="primary" type="submit" >
     Submit
   </Button>
   
    </Form>
    <a href="https://www.w3schools.com">Visit W3Schools.com!</a>
    
    </Container>
  )
}

export default Adduser