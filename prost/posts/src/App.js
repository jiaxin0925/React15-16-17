import { Header } from './conponente/hdeader';
import { Section } from './conponente/section';
import { Footer } from './conponente/footer';
// import { AppContainer } from 'react-hot-loader';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <AppContainer> */}
        <Header />
        <Section />
        <Footer />
      {/* </AppContainer> */}
    </div>
  );
}

export default App;
