import Card from "../Bulma/Card"
import "./User.css"

const User = ({ user }) => {
  console.log(user)
  return (
    <div>
      <Card src={user.avatar_url}/>
      {/* <ul>
        <img src={user.avatar_url} alt={user.avatar_url} />
        <li>Username: {user.login}</li>
        <li>Followers: {user.followers}</li>
        <li>Following: {user.following}</li>
        <li>Created at: {user.created_at}</li>
      </ul> */}
    </div>
  );
};

export default User;
