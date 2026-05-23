/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import blog from "../assets/Common/blog.png";

const blogs = [
  {
    id: 1,
    title: "How AI Is Transforming Modern Businesses",
    date: "1 Jan 2026",
    desc: "Artificial Intelligence is helping companies automate tasks, analyze large data sets, and improve decision-making.",
  },
  {
    id: 2,
    title: "Top Web Development Trends Businesses Should Follow",
    date: "2 Jan 2026",
    desc: "Modern web development focuses on performance, security, and user experience.",
  },
  {
    id: 3,
    title: "Cloud Computing & Digital Transformation",
    date: "20 Jan 2026",
    desc: "Cloud technologies allow businesses to scale quickly, reduce infrastructure costs, and improve collaboration.",
  },
];

const BlogComponent = ({
  badge = "Blog",
  title = "Insights & Latest Updates",
  subtitle = "Stay informed with the latest trends, expert insights, and industry updates from the world of technology.",
  data = blogs,
}) => {
  return (
    <section className="w-full bg-[#f4f6f8] py-[70px] px-4 md:px-8 lg:px-[80px]">
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center justify-center h-[28px] px-4 rounded-full border border-[#2637e8]/30 text-[#2637e8] text-[12px] mb-4">
            {badge}
          </span>

          <h2 className="text-[24px] md:text-[40px] font-bold text-[#222] mb-4">
            {title}
          </h2>

          <p className="text-[#555] text-[15px] md:text-[18px] leading-[1.6] max-w-[650px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[14px] overflow-hidden border border-black/10"
            >
              <div className="relative p-[8px]">
                <img
                  src={item.image || blog}
                  alt={item.title}
                  className="w-full h-[180px] object-cover rounded-[10px]"
                />

                <div className="absolute right-[12px] bottom-[12px] bg-[#2637e8] text-white px-3 py-1 rounded-[8px] text-[14px]">
                  {item.date}
                </div>
              </div>

              <div className="px-4 pb-5">
                <h3 className="text-[18px] font-bold text-[#222] leading-[1.4] mb-3">
                  {item.title}
                </h3>

                <p className="text-[#555] text-[15px] leading-[1.7] mb-5">
                  {item.desc}
                </p>

                <Link
                  to={`/blog#blog-${item.id}`}
                  className="inline-flex bg-[#2637e8] text-white px-4 py-2 rounded-full text-[14px]"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogComponent;
