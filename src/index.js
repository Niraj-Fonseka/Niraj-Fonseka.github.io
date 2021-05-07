
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import LandingPage from './components/landingpage'

// import './Home.css';
// import { HashRouter, Route, Switch, Link, withRouter } from 'react-router-dom';
// import { Breadcrumb } from 'antd';
// import Resume from './components/resume'
// import MyWork from './components/mywork'
// import HomePage from './components/home'
// import Contact from './components/contact'
// import rocket from './rocket.gif'
// import { Layout } from 'antd';


// const breadcrumbNameMap = {
//   '/resume': 'Resume',
//   '/projects': 'MyWork',
//   '/contact': 'Contact',
// };


// function Head(){

//   return(
//       <div className="title">
//         <div className="title-name">
//           Niraj Fonseka
//         </div>
//         <div>
//           <img src={rocket} alt="profile_pic" width="50" height="60" />
//         </div>
//       </div>
//   )
// }

// const Home = withRouter(props => {
//   const { location } = props;
//   const pathSnippets = location.pathname.split('/').filter(i => i);
//   const extraBreadcrumbItems = pathSnippets.map((_, index) => {
//     const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
//     return (
//       <Breadcrumb.Item key={url}>
//         <Link to={url}>{breadcrumbNameMap[url]}</Link>
//       </Breadcrumb.Item>
//     );
//   });


//   [
//     <Breadcrumb.Item key="home">
//       <Link to="/">Home</Link>
//     </Breadcrumb.Item>,
//   ].concat(extraBreadcrumbItems);
//   return (
//     <Layout>
//     <div className="demo">
//       <Head />
//       <div style={{ position: "sticky", top: "0" }} >

//       <div className="demo-nav">
//         <Link to="/" className="menu-link">Home</Link>
//         <Link to="/resume" className="menu-link">Resume</Link>
//         <Link to="/projects" className="menu-link">MyWork</Link>
//         <Link to="/contact" className="menu-link">Contact</Link>
//       </div>            
//       </div>
//       <Switch>
//         <Route path="/resume" component={Resume} />
//         <Route path="/projects" component={MyWork}/>
//         <Route path="/contact" component={Contact}/>
//         <Route  component={HomePage}/>
//       </Switch>

//     </div>
//     </Layout>
//   );
// });

ReactDOM.render(
    <LandingPage />
,  document.getElementById('root'),
);
          