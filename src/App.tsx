import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { aboutPage, addonsPage, fractalBingo, gameAndFunPage, homePage, newsPage, policyPage, recordsPage, recruitmentPage } from './constants/routing';

import useWindowSize from './hooks/useWindowSize';
import { minWidthSupport } from './constants/general';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { NoSupport } from './components/NoSupport';
import { Home } from './pages/Home';
import { News } from './pages/News';
import { NewsInformation } from './pages/News/NewsInformation';
import { Records } from './pages/Records';
import { GamesAndFun } from './pages/GamesAndFun';
import { FractalBingo } from './pages/GamesAndFun/FractalBingo';
import { Addons } from './pages/Addons';
import { AddonInformation } from './pages/Addons/AddonInformation';
import { Recruitment } from './pages/Recruitment';
import { About } from './pages/About';
import { Policy } from './pages/Policy';
import { Page404 } from './pages/Page404';

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
            <Route path={newsPage} element={<News />}>
              <Route path={`${newsPage}/:newsItem`} element={<NewsInformation />}/>
            </Route>
            <Route path={recordsPage} element={<Records />}/>
            <Route path={gameAndFunPage} element={<GamesAndFun />}>
                <Route path={`${gameAndFunPage}/${fractalBingo}`} element={<FractalBingo />}/>
            </Route>
            <Route path={addonsPage} element={<Addons />}>
                <Route path={`${addonsPage}/:addon`} element={<AddonInformation />}/>
            </Route>
            <Route path={recruitmentPage} element={<Recruitment />}/>
            <Route path={aboutPage} element={<About />}/>
            <Route path={policyPage} element={<Policy />}/>
            <Route path='*' element={<Page404 />}/>
        </Routes>
        <Footer />
        <BackgroundBorderLineEffect />
      </BrowserRouter>
    </div>
  );
}

export default App;
