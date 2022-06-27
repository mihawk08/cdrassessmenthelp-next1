import Chatra from '@chatra/chatra'
import React from 'react'
import { Col, Row ,Button } from 'react-bootstrap'
import Headings from '../Headings'
import Paragraphs from '../Paragraphs'

const Anz1 = ({title,description,image}) => {
  return (
    <div>
         <Row>
            <Col md={5} style={{paddingRight:"60px", paddingLeft:"px"}} className="py-5 ">
                <Headings title={title} align="potato"/>
<Paragraphs
 data={description} align="potato"/>
            
<div className='py-4'>
<Button href='/contact-us' style={{backgroundColor:"#970012",fontWeight:"600",color:"#fff",borderRadius:"4px",border:"none"}}>
  Contact Us
</Button>
<Button  onClick={() => Chatra("openChat", true)} style={{backgroundColor:"#fff",marginLeft:'10px',color:"#970012",fontWeight:"600",border:"1px solid #970012"}}>
GET INSTANT HELP
</Button>
</div>
<p className='text-center text-md-start' style={{color:"#434343",fontWeight:"00"}}>Trusted by thousand of Engineers from around the world</p>

</Col>

<Col md={7}>
  <img src={image} alt={title} className='img-fluid'/>
</Col>
</Row>

    </div>
  )
}

export default Anz1