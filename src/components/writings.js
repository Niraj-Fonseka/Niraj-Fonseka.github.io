import React , {useEffect, useState} from 'react';
import './writings.css';
import {  Spin  }  from 'antd';
import { Card, Col, Row } from 'antd';
import {items} from './items';
import axios from 'axios';

function generateCards(data){

    var cards = [];
    for (var i = 0; i <= data.items.length ; i+=3){
        let cols = []
        for(var j = i; (j < i+3 && j != data.items.length ); j++){
            cols.push(
                <Col span={8}>
                    <a href={data.items[j].link}>
                    <Card className="blog-card" title={data.items[j].title}  bodyStyle={{ padding: 0 }} >
                        <div className="custom-image">
                            <img alt="blog-image" width="auto" width="auto" height="200" src={data.items[j].thumbnail} />
                        </div>
                        <div className="custom-card">
                            <p>
                            published date : {data.items[j].pubDate}
                            </p>
                        </div>
                    </Card>
                    </a>

                </Col>
                )
        }
        cards.push(<Row style={{ marginBottom : "10px"}} gutter={16}>{cols}</Row>)
    }

    return (
        <div style={{  padding: '30px' }}>
            {cards}
        </div>
    )
}
export default function Writings(props){

    const [data, setBlogData] = useState([])

    useEffect(()=> {
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@fonseka.live').then((res) => {
            setBlogData(res.data);
        })
    },[])
    if (data.length === 0){
        return(
            <div style={{textAlign: 'center', paddingTop: '50vh'}} >
                <Spin />
            </div>
        )
    }else{
        return(
            generateCards(items)
        )
    }

}

