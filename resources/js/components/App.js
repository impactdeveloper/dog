import React from 'react';
import ReactDOM from 'react-dom';
import store from '../state/store';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import BreedTable from './BreedTable';

function App() {
    return (
        <div className="ui container" style={{margin:'20px'}}>
            <h1>The 10 Most Popular Dog Breeds in the Country</h1>
            <div className="table-div">
                <BreedTable />
            </div>

        </div>
    );
}

export default App;
document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    )
  })
