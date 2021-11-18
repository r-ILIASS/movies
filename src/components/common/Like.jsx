import React from "react";

const Like = ({ liked, handleLike }) => {
  return (
    <i
      onClick={handleLike}
      className={liked ? "fa fa-heart" : "fa fa-heart-o"}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
    ></i>
  );
};

export default Like;
