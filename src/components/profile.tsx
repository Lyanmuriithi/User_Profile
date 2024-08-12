import './profile.css';
interface ProfileProps {
    avatarUrl: string;
    username: string;
    email: string;
    onlineStatus: boolean;
  }
  
  const Profile: React.FC<ProfileProps> = ({ avatarUrl, username, email, onlineStatus }) => {
    return (
      <div className="profile">
        <img src={avatarUrl} alt={`${username}'s avatar`} className="avatar" />
        <div className="user-details">
          <h2>{username}</h2>
          <p>{email}</p>
          <span className={`status ${onlineStatus ? 'online' : 'offline'}`}>
            {onlineStatus ? 'Online' : 'Offline'}
          </span>
        </div>
      </div>
    );
  };
  

export default Profile;
