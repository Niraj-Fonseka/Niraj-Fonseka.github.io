import React, { useState } from 'react'
import './../content.css';
import ParticlesBg from 'particles-bg'
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
                         <Button className="button" type="primary"  size="default" href="https://drive.google.com/file/d/140iZzoTj8Dsi3NueSPd9HAgV62dUpUnm/view?usp=sharing"> Resume </Button>
                         <Button className="button" type="primary" size="default" href="https://www.linkedin.com/in/niraj-fonseka-03bab3107/"> LinkedIn </Button>
                         <Button className="button" type="primary" size="default" href="https://github.com/Niraj-Fonseka"> Github </Button>
                     </div>
                 </Col>
             </Row>
             <Row>
                 <Col span={24}>
                     <div className="morebuttons">
                         <Button className="morebutton" type="primary" size="default" onClick={OnClickSeeMore}> Learn more </Button>
                     </div>
                 </Col>
             </Row>
             <ParticlesBg type="cobweb" bg={true} color="#bfbfbf" />
     
            </div>
         )
    }
    

}