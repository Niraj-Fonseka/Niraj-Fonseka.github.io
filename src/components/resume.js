import React from 'react'
import './../index.css';
import { Collapse, Button, Icon } from 'antd';
const { Panel } = Collapse;


export default function Resume(props){

    const customPanelStyle = {
        background: '#f7f7f7',
        borderRadius: 4,
        marginBottom: 24,
        border: 0,
        overflow: 'hidden',
    };


    return(
        <div>

        <div className="collapse-list">
       <Collapse bordered={false}     expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
    <Panel header="Work Experience" key="1" style={customPanelStyle}>
      <div>
        <ul>
            <li>TBA... - ( May 2020 )
                <ul>
                    <li> Senior Infrastructure Engineer</li>
                    <ul>
                    </ul>
                </ul>
            </li>
        </ul>
        <ul>
            <li>Liveperson - ( Oct 2019 - Jan 2020 )
                <ul>
                    <li> Software / DevOps / Infrastructure Engineer</li>
                    <ul>
                        <li>Maintained multiple Kubernetes clusters running on AWS. Worked with developers to debug applications and find performance bottlenecks.</li>
                        <li>Used Prometheus, Grafana, OpenCensus to set up monitoring around infrastructure and microservices</li>
                        <li>Reduced the time to mitigate incidents by building a tool to abstract DevOps tasks and make them accessible for anyone across the company.</li>
                    </ul>
                </ul>
            </li>
        </ul>
        <ul>
            <li>The Home Depot - ( Sep 2016 - Oct 2019)
                <ul>
                    <li> Software Engineer - ( May 2017 - Oct 2019 )</li>
                    <ul>
                        <li>Worked closely with enterprise architects and principal engineers to optimize Java web applications by using different google cloud components and rewriting/refactoring them.</li>
                        <li>Led the development of a web application in Go that proactively checks and takes action on components in the cloud that are not meeting security requirements.</li>
                        <li>Lead developer for an application that reduces cloud costs by taking action on components in the cloud that are underutilized or not in use. Saved over $500,000 in cloud costs within the first year.</li>
                        <li>Developed an API in Go that mines data from over 30 different data sources and a frontend application in ReactJS to display mission-critical data to SRE teams and upper management.</li>
                        <li>Led a backend dev team of six and refactored/rewrote APIs ( from Python to Go ) for over 6 applications with various tech stacks by defining proper design, concurrency and testing patterns.</li>
                        <li>SRE for over 6 applications that were used regularly by site reliability engineers and developers to debug homedepot.com incidents</li>
                        <li>Developed a suite of self-service applications for backend performance testing, frontend performance testing and destructive testing for homedepot.com microservices and integrated them into the company’s CI/CD pipeline.</li>
                        <li>Mentored 4 interns through their summer project.</li>
                    </ul>
                </ul>
                <ul>
                    <li> Software Engineer (Part Time) - ( Sep 2016 - May 2017 )</li>
                    <ul>
                        <li>Led the development of an application that collects metrics, defines Service Level Objectives and Error Budgets for microservices at The Home Depot. </li>
                        <li>Worked on Microsoft Azure Operations Management Suite (OMS) during its adaptation stage into home depot. Used Azure Automation and Azure Log Analytics to create performance metric dashboards.</li>
                        <li>Developed a tool to automate creating tickets in ServiceNow for alerts that get pushed over the threshold in Microsoft Azure Operations Management Suite. </li>
                    </ul>
                </ul>
            </li>
        </ul>
      </div>
    </Panel>
    <Panel header="Education" key="2" style={customPanelStyle}>
    <div>
        <ul>
            <li>
                Bachelor of Science in Computer Science - University of Texas at Austin 
                <ul>
                            <li>Computer Science Courses
                                <ul>
                                    <li>Foundations of Programming ( Java ) </li>
                                    <li>Datastructures and Algorithms  ( Java , Python )</li>
                                    <li>Descrete Mathematics</li>
                                    <li>Operating Systems ( C ) </li>
                                    <li>Computer Architecture ( C ) </li>
                                    <li>Cyberphysical Systems ( C / Bash )</li>
                                    <li>Computer Security ( Java )</li>
                                    <li>Object Oriented Programming ( C++ ) </li>
                                    <li>Algorithms and Complexity</li>
                                </ul>
                            </li>
                            <br/>
                            <li>Mathematics Courses
                                <ul>
                                    <li>Single variable calculus</li>
                                    <li>Multi variable calculus</li>
                                    <li>Descrete Mathematics</li>
                                    <li>Linear Algebra and Matrix Calculations</li>
                                    <li>Multi variable calculus</li>
                                </ul>
                            </li>
                            <br/>
                            <li>Other Notable Courses
                                <ul>
                                    <li>Physics 1, 2</li>
                                    <li>Chemistry 1, 2</li>
                                    <li>Geology 1, 2</li>
                                    <li>Roman History</li>
                                    <li>Greek History / Mythology</li>
                                    <li>Russian History</li>
                                    <li>Human Brain and Psychology</li>
                                    <li>American Criminal Justice System</li>

                                </ul>
                            </li>
                            
                        </ul> 
                </li>
        </ul>
    </div>
    </Panel>
    <Panel header="Volunteer Experience ( Coming soon ...)" key="3" style={customPanelStyle} disabled>
      <p>TBD ..</p>
    </Panel>
  </Collapse>
       </div>
        <div className="downloadButton">
        <a href="https://storage.googleapis.com/my-career-info/ResumeFeb2020.pdf">
        <Button type="primary" icon="cloud-download" style={{backgroundColor:"#C0C0C0" , borderColor:"#C0C0C0"}}>
        </Button>
        </a>
        </div>

       
       </div>
    )
}
