import React from 'react'
import Projects from './projects';

export default function Content(props){



    if (props.selected === "projects") {
        return(
            <div>
                <Projects />
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
