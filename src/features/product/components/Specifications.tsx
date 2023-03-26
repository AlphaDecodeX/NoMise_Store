import React from "react";

interface Props {
  specifications: Record<string, string>;
}

const Specifications: React.FC<Props> = ({ specifications }) => {
  return (
    <div className="bg-white shadow-md rounded my-6">
      <table className="text-left w-full border-collapse">
        <tbody>
          {Object.entries(specifications).map(([key, value]) => (
            <tr key={key} className="border-b">
              <td className="py-4 px-6 border-l border-gray-200">{key}</td>
              <td className="py-4 px-6 border-l border-gray-200">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Specifications;
