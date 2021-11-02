import React from "react";
import NewsItem from "./NewsItem";

export default function News({ posts }) {
  return (
    <section className="grid grid-cols-2 gap-2">
      {posts.map((post) => {
        return <NewsItem key={post.id} post={post} />;
      })}
    </section>
  );
}
