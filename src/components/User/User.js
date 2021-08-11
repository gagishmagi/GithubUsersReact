import Card from "../Bootstrap/Card/Card";
import "./User.css"


const User = ({ user }) => {
  console.log(user)
  return (
    <div>
      <Card 
      src={user.avatar_url} 
      alt={user.avatar_url} 
      title={user.login} 
      url={user.html_url}
      followers={user.followers}
      following={user.following}
      created_at={user.created_at}
      />
    </div>
  );
};

export default User;
