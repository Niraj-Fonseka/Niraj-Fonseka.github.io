import React from 'react'
import {  Layout  } from 'antd';
import './../index.css'
import { LinkOutlined  } from '@ant-design/icons';
import projectsdata from './../projects.json';

const { Header, Footer, Sider, Content } = Layout;


export default function ProjectsContent(props){

    const jsondata = JSON.parse(JSON.stringify(projectsdata))

    console.log(jsondata[props.selected].description);
    return(
        <div>
        <div style={{color:'black'}}>
            <LinkOutlined className="projectslink" style={{color: 'black' , fontSize: '18px', paddingRight: '5px'}}/>
            Sdasda
        </div>
        <div style={{color:'black'}}>
            {jsondata[props.selected].description}
        </div>
        </div>

    )
}
