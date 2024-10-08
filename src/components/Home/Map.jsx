const Map = () => {
    const cardData = [
        {
            id: 1,
            image: 'https://e-health.gov.az/media/obj/515/%C5%9F%C3%BC%C5%9Fa.jpg', // Replace with real image URLs
            title: "Şuşa Qalası",
            walkTime: '3 min',
            price: '120 AZN',
            rating: '4.2/5 (220 reviews)',
        },
        {
            id: 2,
            image: 'https://e-health.gov.az/media/obj/515/%C5%9F%C3%BC%C5%9Fa.jpg', // Replace with real image URLs
            title: "Şuşa Qalası",
            walkTime: '1 min',
            price: '120 AZN',
            rating: '4.2/5 (220 reviews)',
        },
        {
            id: 3,
            image: 'https://e-health.gov.az/media/obj/515/%C5%9F%C3%BC%C5%9Fa.jpg', // Replace with real image URLs
            title: "Şuşa Qalası",
            walkTime: '15 min',
            price: '120 AZN',
            rating: '4.2/5 (220 reviews)',
        },
        {
            id: 4,
            image: 'https://e-health.gov.az/media/obj/515/%C5%9F%C3%BC%C5%9Fa.jpg', // Replace with real image URLs
            title: "Şuşa Qalası",
            walkTime: '15 min',
            price: '120 AZN',
            rating: '4.2/5 (220 reviews)',
        },
        {
            id: 5,
            image: 'https://e-health.gov.az/media/obj/515/%C5%9F%C3%BC%C5%9Fa.jpg', // Replace with real image URLs
            title: "Şuşa Qalası",
            walkTime: '15 min',
            price: '120 AZN',
            rating: '4.2/5 (220 reviews)',
        },
    ];

    return (
        <div className="flex md:flex-row flex-col md:gap-4 gap-10 w-full md:h-[850px] py-20">
            {/* Left side - Cards section */}
            <div className="md:w-1/2 w-full p-4 overflow-y-auto md:h-auto h-[600px] flex flex-col gap-4">
                {cardData.map((card) => (
                    <div key={card.id} className="bg-white shadow-md rounded-lg">
                        <div className="flex ">
                            <img src={card.image} alt={card.title} className="w-1/3 rounded-l-lg object-cover" />
                            <div className="p-4 w-2/3">
                                <h2 className="text-lg font-semibold">{card.title}</h2>
                                <div>
                                    <p className="text-sm text-gray-600">Walk to lift: {card.walkTime}</p>
                                    <p className="text-gray-400 line-through">{card.price}</p>
                                </div>
                                <p className="text-lg font-bold text-green-600">{card.price}</p>
                                <p className="text-sm text-gray-500">{card.rating}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right side - map iframe */}
            <div className="md:w-1/2 w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30979.3170580012!2d46.58650900235027!3d40.14310541604762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403b830b35c4f63d%3A0x12d303d24b6bc2f3!2sAzerbaijan!5e0!3m2!1sen!2s!4v1696753071984!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    className="rounded-xl"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Map;
