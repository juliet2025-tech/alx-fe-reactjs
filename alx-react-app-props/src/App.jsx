import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "/src/Footer.jsx";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import UserContext from "./UserContext";

function App() {
  const userData = {
    name: "Ojide Chibundo Juliet",
    age: 22,
    bio: "Front-end developer in training at ALX Africa.",
  };

  return (
    <UserContext.Provider value={userData}>
      <Header />
      <MainContent />

      <UserProfile />

      {/* Counter Component */}
      <Counter />

      <Footer />
    </UserContext.Provider>
  );
}

export default App;
