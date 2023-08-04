import React from 'react';
import CreateComponent from './component/CreateComponent.js';
import IndexComponent from './component/IndexComponent.js';
import EditComponent from './component/EditComponent.js';

function App() {
  return (
    <div>
      <h1>Library App</h1>
      <IndexComponent />
      <CreateComponent />
      <EditComponent />
    </div>
  );
}

export default App;
