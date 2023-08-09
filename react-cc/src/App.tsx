import React, { useState } from 'react';
import Button from './components/Button';
import Alert from './components/Alert';

function App() {
  const [showAlert, setShowAlert] = useState(false);

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const handleButtonClick = () => {
    setShowAlert(true);
  };

  return (
    <div>
      <Button color="primary" onClick={handleButtonClick}>
        Show Alert
      </Button>
      {showAlert && <Alert onClose={handleAlertClose} />}
    </div>
  );
}

export default App;
