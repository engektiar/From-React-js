import React from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
const Home = () => {
  return (
    <Container className='mt-5'> 
    <h4 className='text-center m-3'>This is CRUD Opersation</h4>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th> Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>
          <Link to="/add">
          <Button variant="success m-2"> Add New user</Button> 
          </Link>
        
          <Button variant="primary m-2">Edite</Button>
          <Button variant="warning m-2">views</Button>
          <Button variant="danger m-2">Delete</Button>
          
          </td>
        </tr>
         
        
      </tbody>
    </Table>
    </Container>
  )
}

export default Home