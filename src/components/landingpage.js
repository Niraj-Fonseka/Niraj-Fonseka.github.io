import React from 'react'
import './../content.css';
import ParticlesBg from 'particles-bg'
import { Row, Col } from 'antd';
import Image from './image';

export default function LandingPage(props){



    return(
       <div className="mainview">
        <Row>
            <Col span={24}>
                <Image />
            </Col>
        </Row>
        <ParticlesBg type="cobweb" bg={true} color="#874A5B" />

       </div>
    )
}