import Profile from './components/profile';

function App() {
  const user = {
    avatarUrl: 'https://example.com/avatar.jpg',
    username: 'Lian Muriithi',
    email: 'muriithilyan@gmail.com',
    onlineStatus: true,
  };

  return (
    <div className="App">
      <Profile
        avatarUrl={user.avatarUrl}
        username={user.username}
        email={user.email}
        onlineStatus={user.onlineStatus}
      />
    </div>
  );
}

export default App;
