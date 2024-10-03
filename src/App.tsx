import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes/ROUTES';
import './index.css'; // Import global styles first
import './App.css'; // Component-specific styles

/**
|--------------------------------------------------
| Import your components
|--------------------------------------------------
*/
import Home from './pages/Homepage';
import Faq from './pages/Faq';
import Shop from './pages/Shop';

function App() {
  return (
    <>
      <div className="w-full max-w-[100vw] overflow-x-hidden h-full ">
        <Suspense
          fallback={
            <div className="h-screen w-screen bg-white opacity-20 flex items-center justify-center">
              <p className="font-bold flex items-center gap-2">
                <img src="/images/Brand.svg" alt="Sleep Petiq Logo" className="h-10" />
              </p>
            </div>
          }
        >
          {/**
|--------------------------------------------------
| route's
|--------------------------------------------------
*/}

          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.shop} element={<Shop />} />
            <Route path={routes.faq} element={<Faq />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
