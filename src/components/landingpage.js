import React, { useState } from 'react'
import './../content.css';
import ParticlesBg from 'particles-bg'
import {FileTextOutlined ,LinkedinOutlined, GithubOutlined, AppstoreOutlined, PhoneOutlined} from '@ant-design/icons'
import { Row, Col } from 'antd';
import { Button } from 'antd';
import ProfileImage from './image';
import SeeMore from './seemore';

export default function LandingPage(props){

    const [seeMore , setSeeMore ] = useState(false);


    function OnClickSeeMore(event){
        setSeeMore(true)
    }

    function OnClickSeeMoreCallback(event) {
        setSeeMore(false)
    }


    if (seeMore === true) {
        return (
            <SeeMore callback={OnClickSeeMoreCallback}/>
        )
    }else{
        return(
            <div className="mainview">
             <Row>
                 <Col span={24}>
                     <img className="profile" alt="profile_pic" src={ProfileImage}/>
                 </Col>
             </Row>
             <Row>
                 <Col span={24}>
                     <div className="buttons">
                         <Button className="button" href="https://drive.google.com/file/d/140iZzoTj8Dsi3NueSPd9HAgV62dUpUnm/view?usp=sharing" > 
                            <FileTextOutlined  style={{ fontSize: '30px' }}/>
                         </Button>
                         <Button className="button" href="https://www.linkedin.com/in/niraj-fonseka-03bab3107/"> 
                            <LinkedinOutlined  style={{ fontSize: '30px' }}/>
                         </Button>
                         <Button className="button"  href="https://github.com/Niraj-Fonseka"> 
                            <GithubOutlined  style={{ fontSize: '30px' }}/>
                         </Button>
                     </div>
                 </Col>
             </Row>
             <Row>
                 <Col span={24}>
                     <div className="morebuttons">
                         <Button className="button" onClick={OnClickSeeMore}>
                                <AppstoreOutlined  style={{ fontSize: '30px' }}/>    
                         </Button>
                         <Button className="button"  disabled={true}>
                                <PhoneOutlined  style={{ fontSize: '30px' }}/>
                         </Button>
                     </div>
                 </Col>
             </Row>
             <ParticlesBg type="cobweb" bg={true} color="#bfbfbf" />
     
            </div>
         )
    }
    

}