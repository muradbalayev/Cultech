// import { Avatar, Button } from '@mui/material';
// import { FaUser } from 'react-icons/fa';

import Blog from "../../components/Blog/Blog";
import BlogHero from "../../components/Blog/BlogHero";



const BlogPage = () => {
    const blogs = [
        {
            id: 1,
            title: 'Exploring the Beauty of Azerbaijan',
            description: 'Discover the breathtaking landscapes and rich cultural heritage of Azerbaijan in this detailed travel guide.',
            image: 'https://e-health.gov.az/media/obj/515/%C5%9F%C3%BC%C5%9Fa.jpg', // Replace with actual image
            author: 'Murad Balayev',
            date: 'October 8, 2024',
            avatar: 'https://coffee-me-partner.vercel.app/assets/goku-D1U_mjkz.jpg', // Replace with actual avatar URL
        },
        {
            id: 2,
            title: 'Top 10 Hiking Trails',
            description: 'Here are the top 10 hiking trails you must explore in Azerbaijan for an unforgettable outdoor experience.',
            image: 'https://e-health.gov.az/media/obj/515/%C5%9F%C3%BC%C5%9Fa.jpg', // Replace with actual image
            author: 'Jane Doe',
            date: 'October 5, 2024',
            avatar: 'https://coffee-me-partner.vercel.app/assets/goku-D1U_mjkz.jpg', // Replace with actual avatar URL
        },
        {
            id: 3,
            title: 'Guide to Azerbaijani Cuisine',
            description: 'Explore the rich and flavorful Azerbaijani cuisine with this ultimate food lover’s guide.',
            image: 'https://www.remotelands.com/storage/media/5311/conversions/b210929013-banner-size.jpg', // Replace with actual image
            author: 'John Smith',
            date: 'October 1, 2024',
            avatar: 'https://coffee-me-partner.vercel.app/assets/goku-D1U_mjkz.jpg', // Replace with actual avatar URL
        },
        {
            id: 4,
            title: 'Guide to Azerbaijani Cuisine',
            description: 'Explore the rich and flavorful Azerbaijani cuisine with this ultimate food lover’s guide.',
            image: 'https://www.remotelands.com/storage/media/5311/conversions/b210929013-banner-size.jpg', // Replace with actual image
            author: 'John Smith',
            date: 'October 1, 2024',
            avatar: 'https://coffee-me-partner.vercel.app/assets/goku-D1U_mjkz.jpg', // Replace with actual avatar URL
        },
        {
            id: 5,
            title: 'Guide to Azerbaijani Cuisine',
            description: 'Explore the rich and flavorful Azerbaijani cuisine with this ultimate food lover’s guide.',
            image: 'https://www.remotelands.com/storage/media/5311/conversions/b210929013-banner-size.jpg', // Replace with actual image
            author: 'John Smith',
            date: 'October 1, 2024',
            avatar: 'https://coffee-me-partner.vercel.app/assets/goku-D1U_mjkz.jpg', // Replace with actual avatar URL
        },
    ];

    return (
        <div className="w-full">
            <BlogHero />
            <div className="w-full mx-auto px-4 py-20">
                <h1 className="text-4xl font-bold text-center mb-8">Our Latest Blogs</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <Blog key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
