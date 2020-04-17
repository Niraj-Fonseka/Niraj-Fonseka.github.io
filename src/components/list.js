import React from 'react'
import {  List } from 'antd';


export default function CustomList(props){

      return(
        <List
        itemLayout="horizontal"
        dataSource={props.data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<a href={item.link}>{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
      )
}
