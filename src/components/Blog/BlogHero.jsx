import hero2 from '../../assets/hero.jpg';
import { MdDateRange } from 'react-icons/md';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const BlogHero = () => {
    const navigate = useNavigate();

    const blog = 
        {
            id: 1,
            title: 'Exploring the Beauty of Azerbaijan',
            description: 'Discover the breathtaking landscapes and rich cultural heritage of Azerbaijan in this detailed travel guide.',
            image: 'https://e-health.gov.az/media/obj/515/%C5%9F%C3%BC%C5%9Fa.jpg', // Replace with actual image
            author: 'Murad Balayev',
            date: 'October 8, 2024',
            avatar: 'https://coffee-me-partner.vercel.app/assets/goku-D1U_mjkz.jpg', // Replace with actual avatar URL
        }

  return (
    <div
      className="w-full h-[90vh] bg-cover bg-center flex gap-20 items-center justify-center"
      style={{ backgroundImage: `url(${hero2})` }}
    >
      <div className="text-center w-1/2 text-white bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Explore Our Blogs</h1>
        <p className="text-lg md:text-2xl mb-6">
          Stay updated with the latest news, trends, and stories in the world of tech, business, and more.
        </p>
          <button className="bg-gray-600 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-md shadow-lg transition duration-300">
            Read Latest Posts
          </button>
      </div>
      <div className="bg-white w-[400px] shadow-md rounded-lg overflow-hidden">
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
    </div>
  );
}

export default BlogHero;
