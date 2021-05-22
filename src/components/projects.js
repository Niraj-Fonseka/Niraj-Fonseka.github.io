import React, { useState } from 'react'
import {  Layout  } from 'antd';
import './../index.css'
import ProjectsList from './projectslist';
import ProjectsContent from './projectscontent';

const { Header, Footer, Sider, Content } = Layout;

export default function Projects(props){

    const [selectedProject, setSelectedProject ] = useState("listennotes-go")
    function onProjectClick(event) {
        setSelectedProject(event.target.id);
    }

    return(
        <Layout>
            <Sider width={300}>
                <ProjectsList callback={onProjectClick}/>
            </Sider>
            <Layout>
                <Content>
                    <ProjectsContent selected={selectedProject}/>
                </Content>
            </Layout>
        </Layout>
    )
}
