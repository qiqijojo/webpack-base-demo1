import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import AddTodo from '../container/AddTodo';
import ResultList from './ResultList';
import AddPeople from '../container/AddPeople';

class App extends Component {

  render() {
    return (
        <div>
          <AddPeople />
          <AddTodo />
          <ResultList />
        </div>
    );
  }
}

export default App;
