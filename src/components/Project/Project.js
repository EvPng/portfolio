import React from 'react';
import './Project.css';
import Fade from 'react-reveal/Fade';

class Project extends React.Component {
    render() {
        return (
            <Fade cascade>
            <div className="Project">
                <h2>{this.props.framework}</h2>
                <a className='image-container' href={this.props.url} target="_blank" rel="noreferrer noopener">
                    <img src={`./${this.props.imageSrc}`} alt={this.props.title} />
                    <div className='overlay'>
                        <div className='text-on-image'>{this.props.title}</div>
                        <br />
                        <div className="text-on-image Project-information">
                            <p>{this.props.intro}</p>
                        </div>
                    </div>
                </a>
            </div>
            </Fade>
        );
    }
}

export default Project;