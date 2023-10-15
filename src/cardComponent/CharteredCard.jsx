/* eslint-disable react/prop-types */

const CharteredCard = ({ data }) => {
  const {
    name,
    intro,
    rating,
    taskComplexity,
    deliveryTime,
    price,
  } = data;

  return (
    <div className="bg-white shadow-md rounded-md p-4 m-2">
      <h3 className="text-xl font-semibold text-gray-800 mt-2">{name}</h3>
      <p className="text-sm text-gray-600">{intro}</p>
      <div className="flex items-center mt-2">
        <div className="flex items-center">
          <span className="text-sm text-gray-600 mr-1">Rating:</span>
          <span className="text-lg font-semibold text-indigo-600">{rating}</span>
        </div>
        <div className="ml-4 flex items-center">
          <span className="text-sm text-gray-600 mr-1">Complexity:</span>
          <span className="text-lg font-semibold text-indigo-600">
            {taskComplexity}
          </span>
        </div>
      </div>
      <div className="flex items-center mt-2">
        <div className="flex items-center">
          <span className="text-sm text-gray-600 mr-1">Delivery Time:</span>
          <span className="text-lg font-semibold text-indigo-600">
            {deliveryTime}
          </span>
        </div>
        <div className="ml-4 flex items-center">
          <span className="text-sm text-gray-600 mr-1">Price:</span>
          <span className="text-lg font-semibold text-indigo-600">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default CharteredCard;
