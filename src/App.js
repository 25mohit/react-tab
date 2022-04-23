import React from 'react';
import './App.css';
import Tab from './components/tab';
import TabNav from './components/TabNav';
import { Test } from './components/Test';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selected : 'Home'
    }
  }

  setSelected = (tab) => {
    this.setState({ selected: tab });
  }

  render () {
    return (
      <div className="App mt-4">
        <TabNav tabs={['Home', 'Settings', 'Profile']} selected={ this.state.selected } setSelected={ this.setSelected }>
          <Tab isSelected={ this.state.selected === 'Home' }>
            <Test />
          </Tab>

          <Tab isSelected={ this.state.selected === 'Settings' }>
            <h1>THis is Settings Section</h1>
          </Tab>

          <Tab isSelected={ this.state.selected === 'Profile' }>
            <ul>
              <li>Line Test 1</li>
              <li>Line Test 2</li>
              <li>Line Test 3</li>
            </ul>
          </Tab>
        </TabNav>
      </div>
    );
  }
}

export default App;
