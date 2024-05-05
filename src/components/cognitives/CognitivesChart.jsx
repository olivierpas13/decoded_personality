import { mbtis } from "@/theory/mbtis";
import { determineBackgroundMBTI, determineTitleColor } from "@/utils/mbtiUtils";

const CognitivesChart = () => {
  return (
    <div className="overflow-x-auto prose results-container p-6">
        <h2 className="text-center1">Cognitive Functions Chart</h2>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th></th>
            <th>MBTI</th>
            <th>Dominant</th>
            <th>Auxiliary</th>
            <th>Tertiary</th>
            <th>Inferior</th>
          </tr>
        </thead>
        <tbody>
            {
                Object.values(mbtis).map((mbti, index) => (
                    <tr className="hover" key={index}>
                        <th>{index + 1}</th>
                        <td className={`font-bold ${determineTitleColor(mbti.family)}`}>{mbti.alias}</td>
                        <td>{mbti.cognitives[0].abbreviation} - {mbti.cognitives[0].name}</td>
                        <td>{mbti.cognitives[1].abbreviation} - {mbti.cognitives[1].name}</td>
                        <td>{mbti.cognitives[2].abbreviation} - {mbti.cognitives[2].name}</td>
                        <td>{mbti.cognitives[3].abbreviation} - {mbti.cognitives[3].name}</td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  );
};

export default CognitivesChart;
