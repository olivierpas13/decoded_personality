import { cognitiveFunctions } from "@/theory/mbtis";
import { determineFunctionColor } from "@/utils/mbtiUtils";

const CognitivesExplanation = () => {
  return (
    <div className="prose results-container w-3/4 mx-auto">
      <h2 className="p-4 text-center">Cognitive Functions</h2>
      <p className="leading-10">
        Cognitive functions are the mental processes that we use to make sense
        of the world. They are the tools that we use to gather information and
        make decisions. Each of the 16 personality types has a unique set of
        <span className="font-semibold">cognitive functions</span>. These
        functions are what make each type unique.
      </p>
      <p className="leading-10">
        There are eight cognitive functions in total. Each function is either
        introverted or extroverted, and each function is either sensing,
        intuition, thinking, or feeling. The eight functions are:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {Object.values(cognitiveFunctions).map((func, index) => (
          <div className="card bg-base-100 shadow-md" key={index}>
            <div className="card-body">
              <h4 className={`${determineFunctionColor(func.abbreviation)}`}>
                {func.name}
              </h4>
              <h5>{func.abbreviation}</h5>
              <ul>
                {func.characteristics.map((char, index) => (
                  <li key={index}>{char}</li>
                ))}
              </ul>
              <h4>MBTIs with this dominant function</h4>
              <ul>
                {func.mbtis.map((mbti, index) => (
                  <li key={index}>{mbti}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-center py-3">{"Cogntive Functions Order"}</h3>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical py-5">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">1</time>
            <div className="text-lg font-black">{"Dominant function"}</div>
            This is the primary function in the stack and is the most developed
            and influential. It represents the core aspect of how a person
            perceives and interacts with the world. For example, in an INTP, the
            dominant function is Introverted Thinking (Ti), which drives their
            need for logical consistency and understanding.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2</time>
            <div className="text-lg font-black">Auxiliary function</div>
            The auxiliary function supports the dominant function and helps to
            balance it. It provides a complementary perspective and is often
            used to achieve the goals set by the dominant function. In the INTP,
            the auxiliary function is Extraverted Intuition (Ne), which helps
            generate new ideas and possibilities to support the Ti&apos;s logical
            framework.1
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">3</time>
            <div className="text-lg font-black">Tertiary function</div>
            The tertiary function is less developed than the dominant and
            auxiliary functions but still plays a significant role, especially
            in times of stress or when the individual is seeking growth. It
            often represents a more immature or playful side of the personality.
            In the INTP, the tertiary function is Introverted Sensing (Si),
            which can manifest as a focus on past experiences or a desire for
            comfort and routine under stress.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">4</time>
            <div className="text-lg font-black">Inferior function</div>
            The inferior function is the least developed and is often the source
            of insecurity or challenges for an individual. It represents a more
            unconscious aspect of the personality that can emerge under stress
            or when the individual is feeling vulnerable. In the INTP, the
            inferior function is Extraverted Feeling (Fe), which can manifest as
            a struggle to express emotions or a discomfort with emotional
            situations.
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default CognitivesExplanation;
