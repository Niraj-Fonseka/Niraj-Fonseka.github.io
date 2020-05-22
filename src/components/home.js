import React from 'react'
import './../content.css';
import { Typography } from 'antd';
import niraj from './../niraj.jpeg'
import { Layout } from 'antd';

const { Paragraph } = Typography;

const {  Content } = Layout;

export default function HomePage(props){



    return(
        <Content>
        <div className="content">
            
            <img alt="example" src={niraj} width="286" height="290" />
            <div className="description">
            <Paragraph >Hello! My Name is Niraj. I graduated from the University of Texas with a degree in Computer Science and a Minor in Business Administration. I'm currently working as a Software Engineer at H-E-B, while working on my Masters in Computer Science at Georgia Tech and MIT.</Paragraph>
            </div>
        </div>
        </Content>

    )
}
