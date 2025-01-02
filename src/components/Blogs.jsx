import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiUser, FiCalendar } from 'react-icons/fi';
import { motion } from 'framer-motion'; // Import Framer Motion
import BlogImg1 from "../assets/blog/blog_1.jpg";
import BlogImg2 from "../assets/blog/blog_12.jpg";
import BlogImg3 from "../assets/blog/blog_6.jpg";
import BlogImg4 from "../assets/blog/blog_8.jpg";
import BlogImg5 from "../assets/blog/blog_2.jpg";
import BlogImg6 from "../assets/blog/blog_4.jpg";

const categories = [
    "All",
    "Video Editing",
    "Web Development",
    "Branding",
    "Strategy",
    "Marketing"
];

const blogs = [
    {
        id: 1,
        title: "Mastering Video Editing Techniques",
        excerpt: "Learn essential video editing techniques to create stunning visuals that captivate your audience.",
        category: "Video Editing",
        image: BlogImg1,
        author: "Jane Doe",
        date: "2024-01-10",
        readTime: "6 min read",
        trending: true
    },
    {
        id: 2,
        title: "Web Development Trends in 2024",
        excerpt: "Explore the latest web development trends and tools shaping the digital landscape.",
        category: "Web Development",
        image: BlogImg2,
        author: "John Smith",
        date: "2024-01-15",
        readTime: "8 min read",
        trending: true
    },
    {
        id: 3,
        title: "Branding Essentials for Startups",
        excerpt: "Understand the fundamentals of branding and how it helps build a strong identity for your business.",
        category: "Branding",
        image: BlogImg3,
        author: "Emily Davis",
        date: "2024-01-18",
        readTime: "5 min read",
        trending: true
    },
    {
        id: 4,
        title: "Creating Winning Strategies for Growth",
        excerpt: "Learn how to formulate effective strategies to drive business growth and success.",
        category: "Strategy",
        image: BlogImg4,
        author: "Michael Lee",
        date: "2024-01-20",
        readTime: "7 min read"
    },
    {
        id: 5,
        title: "Maximizing ROI with Smart Marketing",
        excerpt: "Discover strategies to maximize your marketing ROI and achieve better results for your business.",
        category: "Marketing",
        image: BlogImg5,
        author: "Sophia Brown",
        date: "2024-01-25",
        readTime: "6 min read"
    },
    {
        id: 6,
        title: "Enhancing Web Accessibility in 2024",
        excerpt: "Learn how to make your websites more accessible for all users, including those with disabilities.",
        category: "Web Development",
        image: BlogImg6,
        author: "Chris Martin",
        date: "2024-01-28",
        readTime: "7 min read"
    }
];

export default function Blog() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredBlogs = blogs.filter(blog => {
        return selectedCategory === "All" || blog.category === selectedCategory;
    });

    const trendingPosts = blogs.filter(blog => blog.trending).slice(0, 5);
    const recentPosts = blogs.slice(0, 3);

    // Framer Motion Variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
    };

    return (
        <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="container mx-auto px-4 py-8 text-white"
        >
            {/* Categories */}
            <div className="mb-8">
                <motion.div variants={item} className="flex flex-wrap gap-2">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm ${
                                selectedCategory === category
                                    ? 'bg-cyan-600 text-white'
                                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <motion.div variants={container} className="lg:col-span-2">
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredBlogs.map(blog => (
                            <motion.div
                                key={blog.id}
                                variants={item}
                                className="bg-gray-800 rounded-lg shadow-md overflow-hidden group"
                            >
                                <motion.div
                                    className="relative overflow-hidden"
                                    whileHover={{ rotate: 2 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                                    />
                                </motion.div>
                                <div className="p-4">
                                    <span className="text-sm text-cyan-500 font-medium">{blog.category}</span>
                                    <h3 className="text-xl font-semibold mt-2 mb-2">{blog.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{blog.excerpt}</p>
                                    <div className="flex items-center text-sm text-gray-500 mb-4">
                                        <FiUser className="mr-2" />
                                        <span className="mr-4">{blog.author}</span>
                                        <FiClock className="mr-2" />
                                        <span>{blog.readTime}</span>
                                    </div>
                                    <Link
                                        to={`/blog/${blog.id}`}
                                        className="text-cyan-500 hover:text-cyan-400 font-medium inline-flex items-center group"
                                    >
                                        Read More
                                        <motion.svg
                                            className="w-4 h-4 ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            initial={{ x: -10 }}
                                            animate={{ x: 0 }}
                                            transition={{ duration: 0.3, type: "spring" }}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </motion.svg>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Sidebar */}
                <motion.div variants={container} className="lg:col-span-1 space-y-6">
                    {/* Trending Posts */}
                    <motion.div variants={item} className="bg-gray-800 rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4 text-cyan-500">Trending Posts</h2>
                        <div className="space-y-4">
                            {trendingPosts.map(post => (
                                <Link
                                    key={post.id}
                                    to={`/blog/${post.id}`}
                                    className="flex items-start hover:bg-gray-700 p-2 rounded"
                                >
                                    <motion.img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-20 h-20 object-cover rounded"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                    <div className="ml-4">
                                        <h3 className="font-medium text-sm mb-1 text-white">{post.title}</h3>
                                        <p className="text-gray-400 text-xs">{post.readTime}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Recent Posts */}
                    <motion.div variants={item} className="bg-gray-800 rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4 text-cyan-500">Recent Posts</h2>
                        <div className="space-y-4">
                            {recentPosts.map(post => (
                                <Link
                                    key={post.id}
                                    to={`/blog/${post.id}`}
                                    className="block hover:bg-gray-700 p-2 rounded"
                                >
                                    <h3 className="font-medium text-sm mb-1 text-white">{post.title}</h3>
                                    <div className="flex items-center text-xs text-gray-400">
                                        <FiCalendar className="mr-1" />
                                        <span>{new Date(post.date).toLocaleDateString()}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Categories */}
                    <motion.div variants={item} className="bg-gray-800 rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4 text-cyan-500">Categories</h2>
                        <div className="space-y-2">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded"
                                >
                                    <span
                                        className={`${
                                            selectedCategory === category
                                                ? 'text-cyan-500 font-medium'
                                                : 'text-gray-300'
                                        }`}
                                    >
                                        {category}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
