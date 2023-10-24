import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editOnePostService, getOnePostService } from "../../apis/services";
import { toast } from "react-toastify";

const UpdatePost = () => {
  let [data, setData] = useState({
    title: "",
    trainer: "",
    body: "",
  });

  let { title, trainer, body } = data; 

  let navigator = useNavigate();

  let { id } = useParams();
  // console.log(id);

  useEffect(() => {
    getOnePostService(id).then(x => {
      setData(x);
      console.log(data);
    });
  }, []);

  let handleChange = e => {
    console.log(e.target);
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };

  let handleEdit = e => {
    e.preventDefault();
    try {
      let payload = { title, trainer, body };
      console.log(payload);
      editOnePostService(id, payload).then(_ =>
        console.log("Post updated successfully")
      );
      navigator("/all-posts");
      toast.success("Successfully Updated");
      
    } catch (error) {
      console.log(error);
      toast.error("error");
    } finally {
      setData({
        title: "",
        trainer: "",
        body: "",
      });
    }
  };

  return (
    <div className="col-md-4 mx-auto my-2">
      <h1 className="text-uppercase font-weight-bold text-center">
        Update Post
      </h1>
      <form className="card p-2" onSubmit={handleEdit}>
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
          <button className="btn btn-primary btn-bold">Update Post</button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePost;
