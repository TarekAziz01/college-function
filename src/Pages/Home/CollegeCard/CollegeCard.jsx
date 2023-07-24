import ClgCard from "../../../component/ClgCard/ClgCard";

const CollegeCard = () => {

    const collegeData = [
      {
        image: "path-to-image-1.jpg",
        name: "College A",
        admissionDates: "August 2023",
        events: "Annual Fest, Cultural Night, Career Fair",
        researchHistory: "Established in 1950, pioneers in medical research.",
        sports: "Football, Basketball, Swimming",
      },
      {
        image: "path-to-image-2.jpg",
        name: "College B",
        admissionDates: "July 2023",
        events: "Tech Fest, Literary Week, Science Exhibition",
        researchHistory: "Leader in computer science research.",
        sports: "Cricket, Volleyball, Tennis",
      },
    ];

    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {collegeData.map((college, index) => (
              <ClgCard key={index} college={college} />
            ))}
          </div>
        </div>
      </section>
    );
};

export default CollegeCard;