import Header from './Header';
import MainContent from './MainContent';
import Footer from '/src/Footer.jsx';
import UserProfile from './components/UserProfile';

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

      <Footer />
    </>
  );
}

export default App;

