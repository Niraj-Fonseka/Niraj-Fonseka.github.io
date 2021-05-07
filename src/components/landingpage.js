import React from 'react'
import './../content.css';
import ParticlesBg from 'particles-bg'
import { Row, Col } from 'antd';
import niraj from './../niraj.jpeg';
import { Button } from 'antd';

export default function LandingPage(props){



    return(
       <div className="mainview">
        <Row>
            <Col span={24}>
                <img className="profile" alt="profile_pic" src={niraj}/>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <div className="buttons">
                    <Button className="button" type="primary"  size="default" disabled={true}> Resume </Button>
                    <Button className="button" type="primary" size="default" href="https://www.linkedin.com/in/niraj-fonseka-03bab3107/"> LinkedIn </Button>
                    <Button className="button" type="primary" size="default" href="https://github.com/Niraj-Fonseka"> Github </Button>
                </div>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <div className="morebuttons">
                    <Button className="morebutton" type="primary" size="default" disabled={true}> Learn more </Button>
                </div>
            </Col>
        </Row>
        <ParticlesBg type="cobweb" bg={true} color="#874A5B" />

       </div>
    )
}