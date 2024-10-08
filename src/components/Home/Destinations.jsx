import { motion } from 'framer-motion'

const Destinations = () => {
    const destinations = [
        {
          name: 'Şuşa',
          img: 'https://www.remotelands.com/storage/media/5311/conversions/b210929013-banner-size.jpg',
        },
        {
          name: "Gəncə",
          img: 'https://www.remotelands.com/storage/media/5311/conversions/b210929013-banner-size.jpg',
        },
        {
          name: 'Qarabağ',
          img: 'https://www.remotelands.com/storage/media/5311/conversions/b210929013-banner-size.jpg',
        },
        {
          name: 'Ağdam',
          img: 'https://www.remotelands.com/storage/media/5311/conversions/b210929013-banner-size.jpg',
        },
        {
          name: 'Xankəndi',
          img: 'https://e-health.gov.az/media/obj/515/%C5%9F%C3%BC%C5%9Fa.jpg',
        },
      ]

  return (
    <div className="max-w-7xl mx-auto py-10">
      <motion.h2 
        className="text-4xl font-bold text-gray-800 mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Popular destinations
      </motion.h2>
      
      {/* Filter Options */}
      <div className="flex justify-center space-x-8 mb-8 text-lg font-semibold">
        <button className="text-indigo-600 border-b-2 border-indigo-600">Regions</button>
        <button className="text-gray-600 hover:text-gray-900">Cities</button>
        <button className="text-gray-600 hover:text-gray-900">Places</button>
        <button className="text-gray-600 hover:text-gray-900">View all</button>
      </div>

      {/* Destination Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination, index) => (
          <motion.div 
            key={index}
            className="rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <img src={destination.img} alt={destination.name} className="w-full h-48 object-cover" />
            <div className="p-4 bg-white">
              <p className="text-gray-700 font-semibold text-lg">{destination.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Destinations
