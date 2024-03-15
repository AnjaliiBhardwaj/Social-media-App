import React from "react";
import { useParams } from "react-router-dom";

export default function Posts() {
  const params = useParams();
  console.log(params);
  return <div>Posts{params.postId}</div>;
}
