import { useEffect, useState } from "react";
import ClgCard from "../../../component/ClgCard/ClgCard";

const CollegeCard = () => {
  const [college, setCollege] = useState([]);

  useEffect(() => {
    fetch("https://college-function-server.vercel.app/college")
      .then((res) => res.json())
      .then((data) => {
        setCollege(data);
      });
  }, []);

  //  console.log(college);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {college.map((college, index) => (
            <ClgCard key={index} college={college} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollegeCard;
