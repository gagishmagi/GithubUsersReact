import "./Users.css"

const User = ({ user }) => {

  return (
    <div>
      <ul>
        <img src={user.avatar_url} />
        <li>Username: {user.login}</li>
        <li>Followers: {user.followers}</li>
        <li>Following: {user.following}</li>
        <li>Created at: {user.created_at}</li>
      </ul>
    </div>
  );
};

export default User;
