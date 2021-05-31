import React from 'react'
import Projects from './projects';
import Blog from './writings';

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
                <Blog />
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
