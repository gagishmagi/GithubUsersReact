import './Card.css'

export default function Card(props){
    return (
        <div className="card" style={cardStyle}>
            <img src={props.src} className="card-img-top" alt={props.alt}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">
                <p>Followers: {props.followers}</p>
                <p>Following: {props.following}</p>
                <p>Created at: {props.created_at}</p>
                </p>
                <a href={props.url} className="btn btn-primary">Go to repository</a>
            </div> 
        </div>
    )
}

let cardStyle = {
    width: "300px"
}