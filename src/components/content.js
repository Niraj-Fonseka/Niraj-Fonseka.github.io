import React from 'react'
import Projects from './projects';
import Writings from './writings';

export default function Content(props){



    if (props.selected === "projects") {
        return(
            <div>
                <Projects />
            </div>
        )
    }else if(props.selected === "writing"){
        return(
            <div>
                <Writings />
            </div>
        )           
    }else{
        return(
            <div>
                Content
            </div>
        )
    }

}
