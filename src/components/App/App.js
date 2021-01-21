import React from 'react';
import './App.css';
import ProjectList from '../ProjectList/ProjectList';
import Nav from '../Navigation/Nav';
import Fade from 'react-reveal/Fade';

class App extends React.Component {

  // constructor(props) {
  //     super(props);

  //     // This binding is necessary to make `this` work in the callback
  //     this.onWheel = this.onWheel.bind(this);
  // }

  // onWheel = (e) => {
  //     e.preventDefault();
  //     var container = e.target;
  //     var containerScrollPosition = e.target.scrollLeft;
  //     container.scrollTo({
  //         top: 0,
  //         left: containerScrollPosition + e.deltaY,
  //         behaviour: 'smooth' //if you want smooth scrolling
  //     });
  // }

  render() {
    return (
      <div className="App">
        <Nav />
        <Fade bottom cascade>
          <h1>Development & Design</h1>
        </Fade>
        <ProjectList />
        <footer>
          <p>This portfolio is built with React.</p>
          <p>@ Shiyi Peng 2021</p>
        </footer>
      </div>
    );
  }
}

export default App;
