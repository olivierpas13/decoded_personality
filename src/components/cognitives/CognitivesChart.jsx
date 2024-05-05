import { mbtis } from "@/theory/mbtis";
import {
  determineBackgroundMBTI,
  determineFunctionColor,
  determineTitleColor,
} from "@/utils/mbtiUtils";

const CognitivesChart = () => {
  return (
    <div className="overflow-1 prose results-container py-4">
      <h2 className="text-center py-3">Cognitive Functions Chart</h2>
      <table className="table table-zebra w-screen">
        <thead>
          <tr>
            <th className="hidden md:flex"></th>
            <th>MBTI</th>
            <th>Dominant</th>
            <th>Auxiliary</th>
            <th>Tertiary</th>
            <th>Inferior</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(mbtis).map((mbti, index) => (
            <tr className="hover" key={index}>
              <th className="hidden md:flex">{index + 1}</th>
              <td className={`font-bold ${determineTitleColor(mbti.family)}`}>
                {mbti.alias}
              </td>
              {mbti.cognitives.map((cognitive, index) => (
                <td
                  className={`${determineFunctionColor(cognitive.abbreviation)}`}
                  key={index}
                >
                  {cognitive.abbreviation}
                  <span className="hidden md:inline-block font-semibold text-gray-500">
                    - {cognitive.name}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CognitivesChart;
