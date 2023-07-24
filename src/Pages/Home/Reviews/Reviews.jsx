import { useEffect, useState } from "react";

const Reviews = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("https://college-function-server.vercel.app/review")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);

  // console.log(review)

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8">College Reviews</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {review.map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">
                {review.collegeName}
              </h3>
              <p className="text-gray-600 mb-4">{review.reviewText}</p>
              <p className="text-gray-800">- {review.reviewerName}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
