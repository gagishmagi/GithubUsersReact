import "./User.css"
import {Card, Button} from 'react-bootstrap'

const User = ({ user }) => {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user.avatar_url} alt={user.avatar_url} />
      <Card.Body>
        <Card.Title>{user.login}</Card.Title>
        <Card.Text>
        Followers: {user.followers}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    // <div>
    //   <ul>
    //     <img src={user.avatar_url} alt={user.avatar_url} />
    //     <li>Username: {user.login}</li>
    //     <li>Followers: {user.followers}</li>
    //     <li>Following: {user.following}</li>
    //     <li>Created at: {user.created_at}</li>
    //   </ul>
    // </div>
  );
};

export default User;
