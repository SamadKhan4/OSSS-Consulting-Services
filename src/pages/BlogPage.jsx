/* eslint-disable no-unused-vars */
import React from 'react'
import bg from "../assets/bg.png";
import CTA from '../components/Common/CTA';
import blog from "../assets/Common/blog.png";

const BlogPage = () => {
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

      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
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
              {item % 3 === 1
                ? "1 Jan 2026"
                : item % 3 === 2
                ? "2 Jan 2026"
                : "20 Jan 2026"}
            </div>
          </div>

          {/* Content */}
          <div className="px-[14px] pb-[16px]">
            <h3 className="text-[17px] font-bold text-[#222] leading-[1.4] mb-[10px]">
              {item % 3 === 1
                ? "How AI Is Transforming Modern Businesses"
                : item % 3 === 2
                ? "Top Web Development Trends Businesses Should Follow"
                : "Cloud Computing & Digital Transformation"}
            </h3>

            <p className="text-[13px] text-[#666] leading-[1.7] mb-[14px]">
              {item % 3 === 1
                ? "Artificial Intelligence is helping companies automate tasks, analyze large data sets, and improve decision-making."
                : item % 3 === 2
                ? "Modern web development focuses on performance, security, and user experience."
                : "Cloud technologies allow businesses to scale quickly, reduce infrastructure costs, and improve collaboration."}
            </p>

            <button className="bg-[#2637e8] text-white text-[12px] px-3 py-[6px] rounded-full">
              Read More
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