import { useRef, useEffect } from 'react';
import { initializeGame } from './js/game';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      initializeGame(canvasRef.current);
    }
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

export default App;
