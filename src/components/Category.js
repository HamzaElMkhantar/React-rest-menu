import React from 'react'
import {Row , Col} from 'react-bootstrap'

export const Category = ({ fitreByCategory , allCategory }) => {

    const onFilter = (cat) => {
        fitreByCategory(cat)
    }

  return (
    <Row className='my-2 mb-5'>
        <Col sm="12" className='d-flex justify-content-center'>
            <div>
                {
                    allCategory.length >= 1 ?
                    allCategory.map( item => {
                        return(
                            <buttton key={Math.random()} onClick={ () => onFilter(item) } className="btn categoryBtn mx-2">{item}</buttton>
                        )
                    } ) 
                    : "No Category"
                }
                {/* <buttton onClick={ () => fitreByCategory("noCategory") } className="btn categoryBtn mx-2">All</buttton> 
                <buttton onClick={ () => onFilter('Breakfast') } className="btn categoryBtn mx-2">Breakfast</buttton>  */}
                {/* <buttton onClick={ () => fitreByCategory() } className="btn categoryBtn mx-2">All</buttton>  */}
            </div>
        </Col>
    </Row>
  )
}
