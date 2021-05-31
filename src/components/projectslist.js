import React from 'react'
import './../index.css'
import {  List, Typography  } from 'antd';

const data = [
  'listennotes-go',
  'setkubecontext',
  'gke-ip-update',
  'nba-api-go',
  'recognize',
  'Austin Food Inspection Scores',
  'fin-man',
  'COVID-19',
  'Random Gopher',
];
export default function ProjectsList(props){

    return(
        <div className="projectitemcard" style={{marginLeft: '5px', marginTop: '5px'}}>
        <List
        bordered
        dataSource={data}
        renderItem={item => (
            <List.Item className="projectitem" id={item} onClick={props.callback}>
            <Typography.Text mark></Typography.Text> {item}
            </List.Item>
        )}
        />
        </div>

    )
}
