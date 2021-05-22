import React from 'react'
import {  Layout  } from 'antd';
import './../index.css'
const { Header, Footer, Sider, Content } = Layout;
export default function Projects(props){



    return(
        <Layout>
            <Sider width={300}>Sider</Sider>
            <Layout>
                <Content>Content</Content>
            </Layout>
        </Layout>
    )
}
