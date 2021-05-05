import React from 'react'
import './../content.css';
import niraj from './../niraj.jpeg'
import ParticlesBg from 'particles-bg'
import { Row, Col } from 'antd';

export default function LandingPage(props){



    return(
       <div className="mainview">
        <Row>
            <Col span={24}>
                <img style={{ borderRadius: "5px", marginTop: "100px" , boxShadow:"200px"}} src={niraj} height="325" width="300"  />

            </Col>
        </Row>
        <ParticlesBg type="cobweb" bg={true} color="#874A5B" />

       </div>
    )
}