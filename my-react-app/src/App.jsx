
import { Container, Row, Col, Stack, Button, Image } from 'react-bootstrap';

import Example from './components/Modal';


import './App.css'
import Add from './components/Add';
import { useState } from 'react';


function App() {

  const [show, setShow] = useState(false);





let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 ]



return (
    <>
     {/* <Add  /> */}
  <Container>
    <Row>
      <Col className='border' md sm={6} lg={4}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, sapiente id debitis eveniet itaque dicta porro. Quae architecto at accusamus quis sunt dolorum consequatur odio alias repellendus nihil, consequuntur voluptate?</Col>
      <Col md sm={6} lg={4}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, sapiente id debitis eveniet itaque dicta porro. Quae architecto at accusamus quis sunt dolorum consequatur odio alias repellendus nihil, consequuntur voluptate?</Col>
      <Col md sm={6} lg={4}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, sapiente id debitis eveniet itaque dicta porro. Quae architecto at accusamus quis sunt dolorum consequatur odio alias repellendus nihil, consequuntur voluptate?</Col>
      <Col md sm={6} lg={4}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, sapiente id debitis eveniet itaque dicta porro. Quae architecto at accusamus quis sunt dolorum consequatur odio alias repellendus nihil, consequuntur voluptate?</Col>
     
    </Row>

    <Row>
      <Col>
        <Button variant='outline-success'>Click me</Button>
        <Button variant='danger' size="sm">Click me</Button>
        <Button variant='warning'>Click me</Button>
      </Col>
    </Row>
    <Row>
      <Col>
      {

      arr.map((el, index )=> <Button key={index} variant={el%2==0? 'outline-danger' : 'success'} onClick={() => alert(`this is ${el}`)} >Click me</Button> )

      }

        
   
      </Col>
    </Row>
  </Container>


  <Stack direction='horizontal' gap={3}>
    <div className='border'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, veniam?</div>
    <div className='border'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, veniam?</div>
    <div className='border'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, veniam?</div>
    <div className='border'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, veniam?</div>
    <div className='border'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, veniam?</div>

  </Stack>

  <Image src="https://placekitten.com/171/180" rounded  />

  <Button onClick={()=>setShow(!show)}>modal</Button>


  <br/>
  <br/>
  <br/>


  <Example sh={show} setShow={setShow} />

    </>
  )
}




export default App
