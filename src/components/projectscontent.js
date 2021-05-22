import React from 'react'
import {  Layout  } from 'antd';
import './../index.css'
import { LinkOutlined  } from '@ant-design/icons';
import projectsdata from './../projects.json';

const { Header, Footer, Sider, Content } = Layout;


export default function ProjectsContent(props){

    const jsondata = JSON.parse(JSON.stringify(projectsdata))

    console.log(jsondata[props.selected].github);
    return(
        <div>
        <div style={{color:'black', fontSize: '25px'}}>
            <LinkOutlined className="projectslink" href={jsondata[props.selected].github} style={{color: 'black', paddingRight: '5px'}}/>
            {props.selected}
        </div>
        <div style={{color:'black', lineHeight: '20px', margin: '5px'}}>
            {jsondata[props.selected].description}
        </div>
        </div>

    )
}
