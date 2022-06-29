import Modal from './components/modal/Modal';
import { useState } from 'react';
function App() {
  const [error, setError] = useState();
  const confirmH = () => {
    setError(null);
  };
  return (
    <>
      {error && <Modal onConfirm={confirmH} />}
      <div>
        <h1>hello</h1>
        <button
          onClick={e => {
            setError(true);
          }}
        >
          click me
        </button>
      </div>
    </>
  );
}

export default App;
