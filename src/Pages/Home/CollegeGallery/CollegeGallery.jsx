
import img1 from "../../../assets/home/cg1.jpg"
import img2 from "../../../assets/home/cg2.jpg"
import img3 from "../../../assets/home/cg3.jpg"
import img4 from "../../../assets/home/cg4.jpg"

const CollegeGallery = () => {
    const images = [img1, img2, img3, img4];
    return (
      <section className="bg-gradient-to-r from-blue-400 via-teal-500 to-green-500 py-12">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-white mb-8">
            College Graduate Group Pictures
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((imageUrl, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg"
              >
                <img
                  src={imageUrl}
                  alt={`College Graduate Group ${index + 1}`}
                  className="w-full h-48 object-cover transition duration-500 ease-in-out transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default CollegeGallery;