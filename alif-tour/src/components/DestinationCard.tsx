
interface DestinationProps {
  destination: {
  title: string;
  description: string;
  image: string;
}
}

const DestinationCard = ({destination}:DestinationProps) => {
 return (
          <div data-aos='fade-up' className=" rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white  ">
            <img src={destination.image} alt={destination.title} className="w-full h-48 object-cover " loading="lazy" />
            <div  className="p-4">
              <h3 className="text-xl font-bold mb-2">{destination.title}</h3>
              <p className="text-gray-300 text-sm">{destination.description}</p>
            </div>
          </div>
        );
      }

export default DestinationCard