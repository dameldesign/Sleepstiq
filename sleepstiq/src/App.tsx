import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { useTheme } from 'next-themes';
import { Button } from './components/ui/button';
import { Moon, Sun } from 'lucide-react';
import './index.css';

function App() {
  const [count, setCount] = useState(0);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/public/images/Brand.svg" className="logo " alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-4xl text-brand font-bold mb-4">Relax & Rest</h1>
      <Button onClick={toggleTheme} className="flex items-center gap-2">
        {theme === 'light' ? (
          <>
            <Moon size={16} />
            Switch to Dark
          </>
        ) : (
          <>
            <Sun size={16} />
            Switch to Light
          </>
        )}
      </Button>
    </div>
    </>
  );
}

export default App;
