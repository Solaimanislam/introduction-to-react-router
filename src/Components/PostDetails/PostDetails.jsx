import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const postDetail = useLoaderData();
    const {title, id, body} = postDetail;
    return (
        <div>
            <h2>ID: {id} </h2>
            <h5>Title:{title} </h5>
            <p>Body: {body}</p>

        </div>
    );
};

export default PostDetails;