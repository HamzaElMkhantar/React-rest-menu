import React from 'react'
import { Row , Col } from 'react-bootstrap'

export const Header = () => {
  return (
    <Row className='my-3'>
        <Col sm="12" className='justify-content-center text-center'>
            <h3 className='headerTitle'>Food Menu</h3>
            <span className='headerLine'/>
        </Col>
    </Row>
  )
}
