import { useParams } from "react-router-dom";
import { FiClock, FiUser, FiCalendar } from "react-icons/fi";
import BlogImg1 from "../assets/blog/blog_1.jpg";
import BlogImg2 from "../assets/blog/blog_12.jpg";
import BlogImg3 from "../assets/blog/blog_6.jpg";
import BlogImg4 from "../assets/blog/blog_8.jpg";
import BlogImg5 from "../assets/blog/blog_2.jpg";
import BlogImg6 from "../assets/blog/blog_4.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Sample Blog Data
const blogs = [
  {
    id: 1,
    title: "Mastering Video Editing Techniques",
    content:
      "Video editing is a skill that combines creativity and technical expertise. In this blog, we will delve deeper into advanced techniques such as color grading, motion tracking, and special effects to create professional-quality videos.",
    category: "Video Editing",
    image: BlogImg1,
    author: "Jane Doe",
    date: "2024-01-10",
    readTime: "6 min read",
  },
  {
    id: 2,
    title: "Web Development Trends in 2024",
    content:
      "Stay ahead in the ever-evolving world of web development. Learn about progressive web apps, AI-driven user experiences, and the latest trends in JavaScript frameworks.",
    category: "Web Development",
    image: BlogImg2,
    author: "John Smith",
    date: "2024-01-15",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Branding Essentials for Startups",
    content:
      "Branding is more than just a logo. Discover how to craft a unique brand identity, communicate your vision effectively, and stand out in a competitive market.",
    category: "Branding",
    image: BlogImg3,
    author: "Emily Davis",
    date: "2024-01-18",
    readTime: "5 min read",
  },
  {
    id: 4,
    title: "Creating Winning Strategies for Growth",
    content:
      "Strategic planning is the key to achieving sustainable growth. This blog covers practical tips and methods for developing winning strategies in business.",
    category: "Strategy",
    image: BlogImg4,
    author: "Michael Lee",
    date: "2024-01-20",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Maximizing ROI with Smart Marketing",
    content:
      "Smart marketing involves data-driven strategies, personalized campaigns, and creative thinking. Learn how to maximize ROI through these techniques.",
    category: "Marketing",
    image: BlogImg5,
    author: "Sophia Brown",
    date: "2024-01-25",
    readTime: "6 min read",
  },
  {
    id: 6,
    title: "Enhancing Web Accessibility in 2024",
    content:
      "Web accessibility ensures that everyone can use your website, regardless of ability. Learn how to implement accessibility features and comply with WCAG standards.",
    category: "Web Development",
    image: BlogImg6,
    author: "Chris Martin",
    date: "2024-01-28",
    readTime: "7 min read",
  },
];

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-8 text-white">
        <h1 className="text-2xl font-bold text-red-500">Blog not found!</h1>
        <Link
          to="/"
          className="text-cyan-500 hover:text-cyan-400 mt-4 inline-block"
        >
          Go back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 text-white"
    >
      <div className="bg-gray-800 rounded-lg shadow-md p-6">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full max-h-64 object-cover rounded-lg mb-4"
        />
        <span className="text-sm text-cyan-500 font-medium">{blog.category}</span>
        <h1 className="text-3xl font-bold mt-2 mb-4">{blog.title}</h1>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <FiUser className="mr-2" />
          <span className="mr-4">{blog.author}</span>
          <FiCalendar className="mr-2" />
          <span>{new Date(blog.date).toLocaleDateString()}</span>
          <FiClock className="mr-2 ml-4" />
          <span>{blog.readTime}</span>
        </div>
        <p className="text-gray-400 leading-7">{blog.content}</p>
        <Link
          to="/"
          className="mt-6 inline-block text-cyan-500 hover:text-cyan-400 font-medium"
        >
          Back to Blogs
        </Link>
      </div>
    </motion.div>
  );
}
