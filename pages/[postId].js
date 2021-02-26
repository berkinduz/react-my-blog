import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const BlogPost = ({ post }) => (
  <div className="container">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
    <h1 className="hero-title">
        <Link href="/"><a className="hero-title-link">Berkin Düz</a></Link></h1>
      <div className="hero-social-links">
        <Link href="https://www.twitter.com/duzberkin">
          <a className="social-link"><img src="https://img.icons8.com/ios/24/000000/twitter--v1.png"/></a>
        </Link>
        <Link href="https://www.linkedin.com/in/berkinduz">
          <a className="social-link"><img src="https://img.icons8.com/ios/30/000000/linkedin-2--v1.png"/></a>
        </Link>
        <Link href="https://www.instagram.com/berkinduz">
          <a className="social-link"><img src="https://img.icons8.com/metro/26/000000/instagram-new.png"/></a>
        </Link>
      </div>
    </div>

    <div className="blog">
      <h2 className="blog-title">
        <Link href="/test">
          <a className="blog-title-link">{post.title}</a>
        </Link>
      </h2>
      <div className="blog-text">
        <ReactMarkdown source={post.details} />
      </div>
      <div className="blog-date">{post.date}</div>
    </div>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');


      .container {
        max-width: 650px;
        width: 100%;
        margin: 0 auto;
      }

      .hero {
        text-align: center;
        margin: 96px 0;
      }

      .blog {
        font-family: 'Roboto', sans-serif;
      }
      .social-link {
        margin-right: 8px;
        color: blue;
      }

      .social-link:visited {
        color: blue;
      }

      .blog-date {
        text-align: right;
        color: #cccccc;
        margin: 12px 0 48px 0;
      }

      .blog-title {
        color: #35459e;
        font-family: 'Roboto', sans-serif;
      }

      .blog-title-link:visited {
          color: #35459e;
      }

      a {
        text-decoration: none;
      }


      .hero-title {
        color: black;
        font-size: 48px;
        font-family: 'Dancing Script', cursive;

      }

      .hero-title-link:visited {
        color: black;
      }

      * {
       
      }

    `}</style>
  </div>
);

BlogPost.getInitialProps = async ({ req, query }) => {
  const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;
