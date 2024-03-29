import { Link } from "react-router-dom";
// import PropType from 'prop-types';


const User = ({user}) => {
    const {id, name, email, phone} = user;

    const userStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle}>
            <h2>Name:{name}</h2>
            <p>Email:{email} </p>
            <p>Phone:{phone} </p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}><button>Click Me</button></Link>
        </div>
    );
};

// User.proptypes = {
//     user: PropType.object
// }

export default User;