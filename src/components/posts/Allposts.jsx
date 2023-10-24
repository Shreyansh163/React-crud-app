import React, { useContext, useEffect } from "react";
import { PostContextApi } from "../../contextApi/PostContext";
import { Link } from "react-router-dom";
import { deletePostService, getAllPostService } from "../../apis/services";

const Allposts = () => {
  let { state, setState } = useContext(PostContextApi);
  // console.log(state);
  // console.log(setState);

  useEffect(() => {
    getAllPostService().then(x => {
      setState(x);
      console.log(state);
    })
  }, []);

  // let id = useParams();
  // console.log(id);

  let deletePost = (id) => {
    deletePostService(id);
    window.location.assign("/all-posts");
  }

  return (
    <section className="allPostContainer">
      <article>
        {state?.map(post => {
          let { title, body, trainer } = post;
          return (
            <aside>
              <p>{title}</p>
              <p>{trainer}</p>
              <p>{body}</p>
              <div className="btn-group">
                <Link
                  to={`/post/${post.id}`}
                  className="btn btn-primary mx-4 bg-black border-0"
                >
                  View more
                </Link>
                <Link
                  to={`/updatepost/${post.id}`}
                  className="btn btn-primary mx-4 bg-black border-0"
                >
                  Edit
                </Link>
                <button
                  // className="btn btn-primary btn-bold mx-4 bg-black border-0"
                  className="btn btn-danger btn-sm"
                  onClick={() => deletePost(post.id)}
                >
                  Delete
                </button>
              </div>
            </aside>
          );
        })}
      </article>
    </section>
  );
};

export default Allposts;
