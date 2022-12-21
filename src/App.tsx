import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './config/router-config';
import Header from './layout/Header';
import Footer from './layout/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main">
        <Routes>
          {routes.map(route => (
            <Route key={route.path} path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
