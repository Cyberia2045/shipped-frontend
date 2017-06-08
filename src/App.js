import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';
import CurrentJobs from './CurrentJobs';
import Ships from './Ships';
import Jobs from './Jobs';
import SignUp from './SignUp';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      jobs: [],
      ships: [],
      currentjobs: []
    }

    this.renderJobs = this.renderJobs.bind(this);
    this.renderShips = this.renderShips.bind(this);
    this.renderCurrentJobs = this.renderCurrentJobs.bind(this);

  }

  render() {

    console.log(this.state)

    return (
      <div className="App">

      <SignUp />

        <BrowserRouter>
          <div>

            <ul className="navigation-container">
              <li className="navigation-item"><Link to="/">Home</Link></li>
              <li className="navigation-item"><Link to="/ships">Ships</Link></li>
              <li className="navigation-item"><Link to="/jobs">Help Wanted</Link></li>
              <li className="navigation-item"><Link to="/currentjobs">On the Job</Link></li>
            </ul>

            <div>
              <Route path="/jobs" component={this.renderJobs} />
              <Route path="/ships" component={this.renderShips} />
              <Route path="/currentjobs" component={this.renderCurrentJobs} />
            </div>
          </div>

        </BrowserRouter>

      </div>
    );
  }

  componentWillMount() {

    axios.get('/jobs').then(function(response) {
      this.setState({jobs: response.data})
    }.bind(this))

    axios.get('/ships').then(function(response) {
      this.setState({ships: response.data})
    }.bind(this))

    axios.get('/current_jobs').then(function(response) {
      this.setState({currentjobs: response.data})
      }.bind(this))

  }

  renderJobs() {
    return(
        <Jobs list={this.state.jobs} />
      )
  }

  renderShips() {
    return(
        <Ships list={this.state.ships} />
      )    
  }

  renderCurrentJobs() {
    return(
        <CurrentJobs list={this.state.currentjobs} ships={this.state.ships} jobs={this.state.jobs} />
      )    
  }

}

export default App;
