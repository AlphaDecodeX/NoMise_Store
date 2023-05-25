import React from "react";

interface Props {
  specifications: Record<string, string>;
}

const Specifications: React.FC<Props> = ({ specifications }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Keys 
            </th>
            <th scope="col" className="px-6 py-3">
              Values
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(specifications).map(([key, value]) => (
            <tr key={key} className="border-b">
              <td
                scope="row"
                className="px-6 py-4 font-medium text-white-900 whitespace-nowrap dark:text-white"
              >
                {key}
              </td>
              <td className="px-6 py-4">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Specifications;
