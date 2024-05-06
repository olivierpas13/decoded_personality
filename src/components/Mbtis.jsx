import { mbtis } from "@/theory/mbtis";
import { determineBackgroundMBTI } from "@/utils/mbtiUtils";
import { Link } from "@tanstack/react-router";

const Mbtis = () => {
  return (
    <div className="prose results-container">
      <h1 className="m-4 py-8 text-2xl font-bold">Personality Types </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 px-8">
        {Object.values(mbtis).map((mbti, index) => (
          <Link
            style={{ textDecoration: "none" }}
            to={`/results/${mbti.alias}`}
          >
            <div
              key={index}
              className={`card shadow-md ${determineBackgroundMBTI(mbti.family)}`}
            >
              <div className="card-body">
                <h3 className="text-lg font-bold card-title">{mbti.name}</h3>
                <hr className="m-0" />
                <div className="flex">
                  <p className="flex-1">{mbti.alias}</p>
                  <ul className="flex flex-2 ">
                    {mbti.cognitives.map((cognitive, index) => (
                      <li className="badge badge-neutral badge-outline m-1 badge-sm" key={index}>
                        {cognitive.abbreviation}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="badge badge-accent"> {mbti.family} </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Mbtis;
