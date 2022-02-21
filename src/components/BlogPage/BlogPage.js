import React from "react";
import SomeBlogs from "../Blogs/SomeBlogs";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const BlogPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <SomeBlogs></SomeBlogs>
      <Footer></Footer>
    </div>
  );
};

export default BlogPage;
