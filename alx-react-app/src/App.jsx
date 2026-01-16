import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <h1>User Profile</h1>

      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
    </>
  );
}

export default App;
