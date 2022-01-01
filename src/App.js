import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import GlobalStyles from './components/styles/Global';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={ theme } >
      <div className="App">
        <GlobalStyles />
        <Header />      
        <Body />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
