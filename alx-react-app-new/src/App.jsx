import Header from './Header';
import MainContent from './MainContent';
import Footer from '/src/Footer.jsx';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <Header />
      <MainContent />

      <UserProfile
        name="Ojide Chibundo Juliet"
        age={22}
        bio="Front-end developer in training at ALX Africa."
      />

      {/* Counter Component */}
      <Counter />

      <Footer />
    </>
  );
}

export default App;
