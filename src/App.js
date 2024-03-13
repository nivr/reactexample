import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import { record } from 'aws-amplify/analytics';
import { configureAutoTrack } from 'aws-amplify/analytics';
import amplifyconfig from './amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

configureAutoTrack({
  enable: true,
  type: 'pageView',
  options: {
    attributes: {
      customField: 'placeholderValue'
    },
    urlProvider: () => {
      return window.location.origin + window.location.pathname;
    }
  }
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
