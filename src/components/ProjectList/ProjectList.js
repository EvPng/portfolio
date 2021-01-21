import React from 'react';
import './ProjectList.css';
import Project from '../Project/Project';
import data from '../data';
import HorizontalScroll from 'react-scroll-horizontal';

class ProjectList extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    
    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll);
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }

    // handleScroll = (e) => {
    //     console.log("projectList")
    //     e.preventDefault();
    //     var container = e.div;
    //     var containerScrollPosition = e.div.scrollLeft;
    //     container.scrollTo({
    //         top: 0,
    //         left: containerScrollPosition + e.deltaY,
    //         behaviour: 'smooth' //if you want smooth scrolling
    //     });
    // }

    render() {
        return (
            <div className="ScrollContainer">
                <p>{"<"}</p>
                <HorizontalScroll reverseScroll={ true } className="horizontalScroll">
                <div className="ProjectList">
                        {data.map((project)=>(
                            <Project key={project.id} 
                                    url={project.url} 
                                    title={project.title}
                                    imageSrc={project.imageSrc}
                                    intro={project.intro}
                                    framework={project.framework} />
                        ))}
                </div>
                </HorizontalScroll>
                <p>{">"}</p>
            </div>
        );
    }
}

export default ProjectList;