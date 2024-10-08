import { MdDateRange } from 'react-icons/md';
import Avatar from '@mui/material/Avatar';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';

const BlogDetail = () => {
    const blog = {
        title: "Exploring the Beauty of Nature",
        image: "https://www.remotelands.com/storage/media/5311/conversions/b210929013-banner-size.jpg", // Placeholder image for now
        description: "Discover the most breathtaking places on Earth. Nature is full of wonders, and here we explore the most amazing destinations.",
        author: "Murad Balayev",
        avatar: "https://coffee-me-partner.vercel.app/assets/goku-D1U_mjkz.jpg", // Placeholder avatar
        date: "October 8, 2024",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate, neque ut hendrerit fermentum, metus metus aliquet velit, 
        non facilisis felis nulla a magna. In hac habitasse platea dictumst. Etiam ut ante felis.`
    };

    const comments = [
        { id: 1, author: "Murad Balayev", avatar: blog.avatar, text: "This article was really insightful! I can't wait to visit these places myself." },
        { id: 2, author: "Jane Smith", avatar: blog.avatar, text: "I love nature, and this blog made me want to travel more. Great job!" },
        { id: 3, author: "John Doe", avatar: blog.avatar, text: "Beautifully written. Nature is truly breathtaking!" },
        { id: 4, author: "Alice Johnson", avatar: blog.avatar, text: "Thanks for the information! I'm adding these places to my travel list." },
    ];

    const [visibleComments, setVisibleComments] = useState(2);

    const handleLoadMore = () => {
        setVisibleComments((prev) => prev + 2); // Load 2 more comments at a time
    };

    return (
        <div className="max-w-5xl mx-auto p-6 mt-24">
            {/* Blog Image */}
            <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover rounded-lg mb-6" />

            {/* Blog Title and Meta */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-4xl font-bold">{blog.title}</h1>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <Avatar src={blog.avatar} alt={blog.author} />
                        <div>
                            <h3 className="font-semibold">{blog.author}</h3>
                            <div className="text-gray-500 flex items-center gap-1">
                                <MdDateRange />
                                <span>{blog.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Content */}
            <p className="text-lg text-gray-700 leading-7 mb-8">
                {blog.content}
            </p>

            {/* Comments Section */}
            <div className="mb-6 flex flex-col gap-4">
                <h2 className="text-2xl font-semibold mb-4">Comments</h2>
                <div className='flex flex-col gap-3 items-start'>
                    <TextField
                        fullWidth
                        multiline
                        rows={3}
                        variant="outlined"
                        placeholder="Add your comment..."
                        className="mb-4"
                    />
                    <Button variant="contained" color="primary">Submit Comment</Button>
                </div>
                <div className='comments mt-5'>
                    {/* Existing Comments */}
                    {comments.slice(0, visibleComments).map((comment) => (
                        <div key={comment.id} className="bg-gray-200 flex gap-2 items-center border p-4 rounded-lg mb-4">
                            <Avatar src={comment.avatar} alt={comment.author} />
                            <div>
                                <p className="font-bold">{comment.author}:</p>
                                <p>{comment.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {visibleComments < comments.length && (
                    <div className="flex justify-center mt-4">
                        <Button
                            variant="contained"
                            color="error"
                            onClick={handleLoadMore}
                            className="bg-blue-500 text-white hover:bg-blue-700 px-6 py-2 rounded-lg transition-all duration-300"
                        >
                            Load More...
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BlogDetail;
