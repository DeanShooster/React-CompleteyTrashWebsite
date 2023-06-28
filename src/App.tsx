import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { aboutPage, addonsPage, gameAndFunPage, homePage, newsPage, policyPage, recordsPage, recruitmentPage } from './constants/routing';

import useWindowSize from './hooks/useWindowSize';
import { minWidthSupport } from './constants/general';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { NoSupport } from './components/NoSupport';
import { Home } from './pages/Home';
import { Policy } from './pages/Policy';

import './App.scss';
import { BackgroundBorderLineEffect } from './components/BackgroundBorderLineEffect';

function App() {

  const {windowSize} = useWindowSize();
  if(windowSize <= minWidthSupport) return <NoSupport />;


  return (
    <div className='body Poppins'>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path={homePage} element={<Home />}/>
            <Route path={newsPage} element={null}/>
            <Route path={recordsPage} element={null}/>
            <Route path={gameAndFunPage} element={null}/>
            <Route path={addonsPage} element={null}/>
            <Route path={recruitmentPage} element={null}/>
            <Route path={aboutPage} element={null}/>
            <Route path={policyPage} element={<Policy />}/>
        </Routes>
        <Footer />
        <BackgroundBorderLineEffect />
      </BrowserRouter>
    </div>
  );
}

export default App;
