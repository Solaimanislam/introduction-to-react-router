import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const postDetail = useLoaderData();
    const {postId} = useParams();
    const {title, id, body} = postDetail;
    const navigate = useNavigate();

    console.log(postId);

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h2>ID: {id} </h2>
            <h5>Title:{title} </h5>
            <p>Body: {body}</p>
            <button onClick={handleGoBack}>Go back</button>

        </div>
    );
};

export default PostDetails;