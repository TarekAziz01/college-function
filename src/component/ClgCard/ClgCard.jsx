/* eslint-disable react/prop-types */

const ClgCard = ({ college }) => {
    // const { image, name, admissionDates, events, researchHistory, sports } = college;
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img
        src={college.image}
        alt={college.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{college.name}</h3>
        <p className="text-gray-600 mb-2">
          Admission Dates: {college.admissionDates}
        </p>
        <p className="text-gray-600 mb-2">Events: {college.events}</p>
        <p className="text-gray-600 mb-2">
          Research History: {college.researchHistory}
        </p>
        <p className="text-gray-600">Sports: {college.sports}</p>
      </div>
    </div>
  );
};

export default ClgCard;