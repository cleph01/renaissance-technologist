// Card Component to represent each pillar
const PillarCard = ({ title, description, imgSrc, link, emoji }: { title: string; description: string; imgSrc: string; link: string; emoji: string }) => {
    return (
      <div className="bg-neutral-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
        {/* <img className="w-full h-48 object-cover rounded-xl mb-4" src={imgSrc} alt={title} /> */}
        <div className="flex justify-center mb-4">
          <span className="text-4xl">{emoji}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold font-heading text-yellow-500 mb-3">{title}</h2>
        <p className="text-gray-400 font-sans leading-relaxed">{description}</p>
        <a href={link} className="text-blue-500 mt-4 font-sans inline-block hover:underline">
          Learn More
        </a>
      </div>
    );
  };

  export default PillarCard;