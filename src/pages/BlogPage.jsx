/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import bg from "../assets/bg.png";
import CTA from '../components/Common/CTA';
import blog from "../assets/Common/blog.png";

const blogCards = [
  {
    id: 1,
    date: "1 Jan 2026",
    title: "How AI Is Transforming Modern Businesses",
    desc: "Artificial Intelligence is helping companies automate tasks, analyze large data sets, and improve decision-making.",
    more: "From smart chatbots to predictive analytics, AI helps teams reduce repetitive work, respond faster to customers, and make better operational decisions.",
  },
  {
    id: 2,
    date: "2 Jan 2026",
    title: "Top Web Development Trends Businesses Should Follow",
    desc: "Modern web development focuses on performance, security, and user experience.",
    more: "Fast-loading pages, mobile-first layouts, accessible interfaces, and secure integrations are now essential for building trust and converting visitors.",
  },
  {
    id: 3,
    date: "20 Jan 2026",
    title: "Cloud Computing & Digital Transformation",
    desc: "Cloud technologies allow businesses to scale quickly, reduce infrastructure costs, and improve collaboration.",
    more: "Cloud platforms make it easier to launch new services, protect data, and support teams working across locations with reliable digital tools.",
  },
  {
    id: 4,
    date: "1 Jan 2026",
    title: "How AI Is Transforming Modern Businesses",
    desc: "Artificial Intelligence is helping companies automate tasks, analyze large data sets, and improve decision-making.",
    more: "AI adoption works best when businesses start with clear goals, clean data, and practical workflows that save real time for their teams.",
  },
  {
    id: 5,
    date: "2 Jan 2026",
    title: "Top Web Development Trends Businesses Should Follow",
    desc: "Modern web development focuses on performance, security, and user experience.",
    more: "Businesses should prioritize responsive design, SEO-ready structure, and maintainable code so their websites can keep improving over time.",
  },
  {
    id: 6,
    date: "20 Jan 2026",
    title: "Cloud Computing & Digital Transformation",
    desc: "Cloud technologies allow businesses to scale quickly, reduce infrastructure costs, and improve collaboration.",
    more: "The right cloud setup supports backups, remote access, integrations, and flexible growth without heavy infrastructure overhead.",
  },
];

const BlogPage = () => {
  const [expandedBlog, setExpandedBlog] = useState(null);

  return (
    <main>
        {/* Hero */}
              <section
                    className="w-full h-[210px] bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: `url(${bg})` }}
                  >
                    <h1 className="text-white text-[34px] font-bold">Blog</h1>
              </section>


{/* Blog Content */}
<section className="w-full bg-[#f4f6f8] py-[70px] px-4 md:px-8 lg:px-[95px]">
  <div className="max-w-[1240px] mx-auto">

    {/* Heading */}
    <div className="text-center mb-[42px]">
      <span className="inline-block text-[11px] text-[#2637e8] border border-[#2637e8]/20 rounded-full px-3 py-1 mb-4">
        Blog
      </span>

      <h2 className="text-[36px] font-bold text-[#1b1b1b] mb-3">
        Insights & Latest Updates
      </h2>

      <p className="text-[#555] text-[14px] max-w-[560px] mx-auto leading-[1.6]">
        Stay informed with the latest trends, expert insights,
        and industry updates from the world of technology.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">

      {blogCards.map((item) => (
        <div
          key={item.id}
          id={`blog-${item.id}`}
          className="bg-white rounded-[14px] border border-black/10 overflow-hidden"
        >
          {/* Image */}
          <div className="relative p-[8px]">
            <img
              src={blog}
              alt="blog"
              className="w-full h-[165px] object-cover rounded-[10px]"
            />

            <div className="absolute bottom-[10px] right-[10px] bg-[#2637e8] text-white text-[11px] px-3 py-[4px] rounded-[8px]">
              {item.date}
            </div>
          </div>

          {/* Content */}
          <div className="px-[14px] pb-[16px]">
            <h3 className="text-[17px] font-bold text-[#222] leading-[1.4] mb-[10px]">
              {item.title}
            </h3>

            <p className="text-[13px] text-[#666] leading-[1.7] mb-[14px]">
              {item.desc}
            </p>

            {expandedBlog === item.id && (
              <p className="text-[13px] text-[#444] leading-[1.7] mb-[14px]">
                {item.more}
              </p>
            )}

            <button
              type="button"
              onClick={() =>
                setExpandedBlog((current) =>
                  current === item.id ? null : item.id
                )
              }
              className="bg-[#2637e8] text-white text-[12px] px-3 py-[6px] rounded-full"
            >
              {expandedBlog === item.id ? "Show Less" : "Read More"}
            </button>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>


        {/* Call to Action Content */}
        <CTA />
    </main>
  )
}

export default BlogPage
