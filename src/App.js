import './App.css';
import Form from './Components/Form/Form';
import { useState } from 'react';
import Display from './Components/Display/Display';

function App() {
  const [formData, setFormData] = useState('');
  const [showForm, setShowForm] = useState(true);

  const displayFormData = (formData) => {
    setFormData(formData);
    setShowForm(false);
  }

  const clearData = () => {
    setFormData("");
    setShowForm(true);
  }

  if (showForm) {
    return (
      <div className="App">
        <Form passFormData={displayFormData}/>
      </div>
    );
  }

  return (
    <div className="App">
      <Display data={formData} clear={clearData}/>
    </div>
  );
}

export default App;
