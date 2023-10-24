import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOnePostService } from '../../apis/services';

const Post = () => {
  let { id } = useParams();
  let [post, setPost] = useState(null);

  useEffect(() => {
    getOnePostService(id).then(x => {
      setPost(x);
    });
  })
  
  return (
    <section className="container-fluid">
      <article className="container">
        {post === null ? (
          "loading..."
        ) : (
          <main className="card">
            <div className="card-body">
              <h2 className="text-uppercase text-black-50 font-weight-bold">
                {post.title}
              </h2>
              <h4 className="text-uppercase text-black-50 font-weight-bold">
                {post.trainer}
              </h4>
              <h4 className="text-uppercase text-black-50 font-weight-bold">
                {post.body}
              </h4>
            </div>
          </main>
        )}
      </article>
    </section>
  );
}

export default Post