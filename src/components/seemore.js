import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './../index.css';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import Content from './content';
const { SubMenu } = Menu;


export default function SeeMore(props){
    const [current, setCurrent] = React.useState("projects");

    
    const handleClick = e => {
        setCurrent(e.key);
      };
    
  
      return (
        <div>

        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="back" style={{backgroundColor: "#f4f4f4", borderRadius: "5px" }} onClick={props.callback} icon={<MailOutlined />}>
            Back
          </Menu.Item>
          <Menu.Item key="projects" style={{width: '100px' , textAlign : 'center'}} icon={<AppstoreOutlined />}>
            Projects
          </Menu.Item>
          <Menu.Item key="writing" disabled style={{width: '100px' , textAlign : 'center'}} icon={<AppstoreOutlined />}>
            Writing
          </Menu.Item>
          <Menu.Item key="photography" disabled style={{width: '100px' , textAlign : 'center'}} icon={<AppstoreOutlined />}>
            Photography
          </Menu.Item>
        </Menu>
        <Content selected={current}/>
        </div>

      );
}
