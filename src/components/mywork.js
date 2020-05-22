import React from 'react'
import './../index.css';
import { Collapse ,Icon , Button, Col} from 'antd';
const { Panel } = Collapse;

const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
};

export default function MyWork(props){

  
    return(
        <Collapse bordered={false}     expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
            <Panel header="Projects" key="1" style={customPanelStyle}> 
                <Projects />
            </Panel>

            <Panel header="Technical Writing" key="2" style={customPanelStyle}> 
                <TechnicalWriting />
            </Panel>

        </Collapse>

        

    )
}

 function TechnicalWriting(props){
     return(
        <div className="collapse-list">
        <Collapse bordered={false} expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
            <Panel header="How I saved money with Go" key="1" style={customPanelStyle}>
                <MyWorkElement
                    link="https://medium.com/@fonseka.live/how-i-saved-money-with-go-ad9d774ee060"
                    linkName="article"
                    description="An article on how I was able to save money using Go programming language's concurrency"
                />
            </Panel>
            <Panel header="Setting CORS headers in Google Cloud Functions Python Runtime" key="2" style={customPanelStyle}>
                <MyWorkElement
                    link="https://medium.com/@fonseka.live/setting-cors-headers-in-google-cloud-functions-python-runtime-c6e589cc68ce"
                    linkName="article"
                    description="How to set CORS headers in a python cloud function when the function"
                />
            </Panel>
            <Panel header="How to maintain the order of Go Routines" key="3" style={customPanelStyle}>
                <MyWorkElement
                    link="https://medium.com/@fonseka.live/how-to-maintain-the-order-of-go-routines-117a5be86c4f"
                    linkName="article"
                    description="How to run multiple Go routines concurrently and extract the output from them in order"
                />
            </Panel>
            <Panel header="Getting started with Go modules" key="4" style={customPanelStyle}>
                <MyWorkElement
                    link="https://medium.com/@fonseka.live/getting-started-with-go-modules-b3dac652066d"
                    linkName="article"
                    description="Interactive tutorial on how to get started on dependency management in Go with Go modules"
                />
            </Panel>
            <Panel header="Multi-stage Docker Builds in Golang with Go Modules" key="5" style={customPanelStyle}>
                <MyWorkElement
                    link="https://levelup.gitconnected.com/multi-stage-docker-builds-with-go-modules-df23b7f91a67"
                    linkName="article"
                    description="Optimizing docker images using multistage docker builds"
                />
            </Panel>
            <Panel header="Github Actions : Hands On" key="6" style={customPanelStyle}>
                <MyWorkElement
                    link="https://medium.com/@fonseka.live/github-actions-hands-on-51d48eeca7ee"
                    linkName="article"
                    description="How to get started on working with GitHub Actions. This article was written right when Github Action beta was available so it may not be up to date"
                />
            </Panel>
            <Panel header="setkubecontext : change your kubernetes contexts easily" key="7" style={customPanelStyle}>
                <MyWorkElement
                    link="https://medium.com/@fonseka.live/setkubecontext-change-your-kubernetes-contexts-easily-f97c43517b67"
                    linkName="article"
                    description="An article on an opensource software I built for changing kubernates contexts easily. This came in handy for me when I was working with multiple kubernates clusters at the same time"
                />
            </Panel>
            <Panel header="Sharing data in GitHub Actions" key="8" style={customPanelStyle}>
                <MyWorkElement
                    link="https://medium.com/@fonseka.live/sharing-data-in-github-actions-a9841a9a6f42"
                    linkName="article"
                    description="How to share data between multiple GitHub action blocks using its file system"
                />
            </Panel>
            <Panel header="Detect faces using Goland and OpenCV" key="9" style={customPanelStyle}>
                <MyWorkElement
                    link="https://medium.com/@fonseka.live/detect-faces-using-golang-and-opencv-fbe7a48db055"
                    linkName="article"
                    description="Using opencv with Go to build an application that detects faces in an image or a video stream"
                />
            </Panel>
        </ Collapse >
         </div >
     )
 }

function Projects(props){
  
    return(
        <div className="collapse-list">
       <Collapse bordered={false}     expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>

    <Panel header="COVID-19" key="1" style={customPanelStyle}>
        <MyWorkElement
            link="https://covid-19-us-dataset.s3.amazonaws.com/covid.html"
            linkName="url"
            description="A dashboard to visualize the covid-19 statistics"
        />
    </Panel>
    <Panel header="Recognize" key="2" style={customPanelStyle}>
        <MyWorkElement
            link="https://github.com/Niraj-Fonseka/recognize"
            linkName="github"
            description="A gRPC webserver webserver thats written in python to do facial detection using OpenCV.The face recognition is done using OpenCV's haarcascades. I haven't really had the time to test for the false positve rate. But it's in progress. I'm also currently in the process of converting and improving the facial detection to actuation facial identification using OpenCV's built in dnn ( Deep neural network ) module. When this is implemented you will be able to identify certian people after training a model with a few pictures of that person."
        />
    </Panel>

    <Panel header="gke-ip-update" key="3" style={customPanelStyle}>
        <MyWorkElement
            link="https://github.com/Niraj-OSS/gke-ip-update"
            linkName="github"
            description="A tool to automate the process of adding an ip address for private kubernetes clusters in GKE "
        />
    </Panel>

    <Panel header="nba-api-go" key="4" style={customPanelStyle}>
        <MyWorkElement
            link="https://github.com/Niraj-OSS/nba-api-go"
            linkName="github"
            description="Go client library for the nba api"
        />
    </Panel>

    <Panel header="listennotes-go" key="5" style={customPanelStyle}>
        <MyWorkElement
            link="https://github.com/Niraj-OSS/listennotes-go"
            linkName="github"
            description="Go client library for the listen notes api"
        />
    </Panel>

    <Panel header="setkubecontext" key="6" style={customPanelStyle}>
        <MyWorkElement
            link="https://github.com/Niraj-OSS/setkubecontext"
            linkName="github"
            description="A tool to make switching between kuberantes contexts easier"
        />
    </Panel>

    <Panel header="Austin Food Inspection Scores" key="7" style={customPanelStyle}>
        <MyWorkElement
            link="https://austin-food-inspections.firebaseapp.com/"
            linkName="url"
            description="A progressive web app that shows historical inspection scores of resturants and food establishments in Austin.TX "
        />

    </Panel>

    <Panel header="Random Gopher" key="8" style={customPanelStyle}>
        <MyWorkElement
            link="https://github.com/Niraj-Fonseka/random-gopher"
            linkName="github"
            description="A webserver that generates a random Go gopher"
        />

    </Panel>
  </Collapse>
       </div>
    )

}
function MyWorkElement(props){

    return(
        <div>
                <div className="projectsElement">
                <div className="projectsbutton">
                    <Button  type="primary" size="small">
                        <a href={props.link}>
                            {props.linkName}
                        </a>
                    </Button>
                </div>
                <p>
                    {props.description}
                </p>
                </div>
            </div>
    )
}