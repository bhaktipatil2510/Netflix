import React from "react";
import "./Blog.css";

export const Blog = () => {
  const blogs = [
    {
      img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
      title: "Top 10 Netflix Originals to Watch in 2025",
      desc: "Discover the most anticipated Netflix releases of 2025 and what makes them worth watching.",
    },
    {
      img: "https://images.unsplash.com/photo-1517602302552-471fe67acf66",
      title: "Behind the Scenes: How Netflix Creates Blockbusters",
      desc: "A look into how Netflix brings your favorite movies and series to life.",
    },
    {
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      title: "Netflix’s Secret to Cinematic UI Design",
      desc: "How Netflix’s interface keeps millions engaged — insights from their design philosophy.",
    },
    {
      img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=1200&q=80",
      title: "The Future of Streaming: What’s Next for Netflix?",
      desc: "From interactive storytelling to AI recommendations — explore Netflix’s next move.",
    },
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-title">Netflix Blog</h1>
      <p className="blog-subtitle">
        Discover stories, news, and insights from your favorite streaming world 🎬
      </p>

      <div className="blog-grid">
        {blogs.map((item, index) => (
          <div className="blog-card" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="blog-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
