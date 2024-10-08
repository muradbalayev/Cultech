import { MdDateRange } from 'react-icons/md';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Blog = ({blog}) => {
    const navigate = useNavigate();
  return (
    <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden">
    <img
        src={blog.image}
        alt={blog.title}
        className="h-56 w-full object-cover"
    />
    <div className="p-6 flex flex-col justify-between">
        <div className='w-full'>
            <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-4">{blog.description}</p>
        </div>
        <div className="flex w-full items-center justify-between">
            {/* Avatar and Author Info */}
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

            {/* Read More Button */}
            <Button onClick={() => navigate(`/blog/${blog.id}`)} variant="contained" color="primary" size="small">
                Read More
            </Button>
            {/* <button className='px-3 py-2 bg-green-600 hover:bg-green-800 transition all text-white rounded'>
                Read More
            </button> */}
        </div>
    </div>
</div>
  )
}

export default Blog
