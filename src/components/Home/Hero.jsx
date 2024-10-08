import heroimg from '../../assets/hero.jpg'

const Hero = () => {
  return (
    <div 
      className="w-full h-[90vh] bg-cover bg-center flex items-center justify-center" 
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      <div className="text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Project</h1>
        <p className="text-lg md:text-2xl mb-6">We provide the best solutions for our economic problems</p>
        <button className="bg-indigo-600 hover:bg-indigo-800 text-white font-semibold py-2 px-4 rounded-md shadow-lg transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Hero
