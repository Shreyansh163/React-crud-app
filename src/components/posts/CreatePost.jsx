import React, { useState } from "react";
import { createPostService } from "../../apis/services";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreatePost = () => {
  let navigate = useNavigate();

  let [posts, setPosts] = useState({
    title: "",
    body: "",
    trainer: "",
    loading: false,
  });

  let { title, body, trainer, loading } = posts;

  let handleChange = e => {
    let { name, value } = e.target;
    setPosts({ ...posts, [name]: value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    try {
      console.log(posts);
      let payload = {
        title,
        body,
        trainer,
      };
      createPostService(payload);
      navigate("/all-posts");
      // window.location.assign("/");  // reloading will happen if we use this.
      toast.success("Successfully Posted");
    } catch (error) {
      console.log(error);
      toast.error("error");
    } finally {
      setPosts({ title: "", body: "", trainer: "", loading: false });
    }
  };

  return (
    <div className="col-md-4 mx-auto my-2">
      <h1 className="text-uppercase font-weight-bold text-center">
        Create Post
      </h1>
      <form className="card p-2" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="py-2">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={title}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="trainer" className="py-2">
            Trainer
          </label>
          <input
            type="text"
            className="form-control"
            name="trainer"
            value={trainer}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="body" className="py-2">
            Description
          </label>
          <textarea
            name="body"
            id="body"
            value={body}
            cols="30"
            rows="10"
            className="form-control"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group mx-auto my-2">
          <button className="btn btn-primary btn-bold">Add Post</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
