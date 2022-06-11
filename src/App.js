import logo from './logo.svg';
import './App.css';
import Header from './components/shared/header/Header';


import HomePage from './components/dashboard/home-page/Home-page';
import { StyledEngineProvider } from '@mui/styled-engine';
import DashboardHeader from './components/dashboard/dashboardheader/Dashboard-Header';
function App() {
  return (
    <div className="App">
      
      
      <StyledEngineProvider   injectFirst>
      <Header />
      <DashboardHeader/>
        <HomePage />
      </StyledEngineProvider>


    </div>
  );
}

export default App;
