import React from 'react'

import { Container, Row, Col, Button } from 'react-bootstrap';

function List({taskList, delTask, editTask, statusTodo}) {
  return (
    <>
        <Container className="my-3">
            <Row className='g-3' >
                {
                    taskList.map((ele) => (
                        <Col lg={4} key={ele.id} >
                            <div className={ ele.status ? "bg-light border rounded-3 p-3 " : "bg-success-subtle border rounded-3 p-3 "}  >
                                <h4>{ele.task}</h4>
                                <ul class="list-group">
                                         {
                                    ele.todos.map(el => (
                                        <li class="list-group-item">
                                        <input class="form-check-input me-1" onClick={() => statusTodo( ele.id, el.id)}  type="checkbox" value={el.status ? "checked" : ""} id={"firstCheckbox"+el.id}/>
                                        <label class="form-check-label ms-3" for={"firstCheckbox"+el.id}>{el.to}</label>
                                    </li>
                                    ))
                                         }
                                </ul>
                              
                                <Button onClick={() => editTask(ele.id)} variant="warning" className='btn btn-sm'>✒️</Button>
                                <Button onClick={() => delTask(ele.id)} variant="danger" className='btn btn-sm'>🗑️</Button>
                            </div>
                        </Col>
                    ))
                }
               
            </Row>
        </Container>
    </>
  )
}


export default List