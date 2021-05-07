import React from 'react'
import './../content.css';
import ParticlesBg from 'particles-bg'
import { Row, Col } from 'antd';
import niraj from './../niraj.jpeg';
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

export default function LandingPage(props){



    return(
       <div className="mainview">
        <Row>
            <Col span={24}>
                <img className="profile" src={niraj}/>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <div className="buttons">
                    <Button className="button" type="primary"  size="default" />
                    <Button className="button" type="primary" size="default" />
                    <Button className="button" type="primary" size="default"/>
                </div>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <div className="morebuttons">
                    <Button className="morebutton" type="primary" size="default" />
                </div>
            </Col>
        </Row>
        <ParticlesBg type="cobweb" bg={true} color="#874A5B" />

       </div>
    )
}