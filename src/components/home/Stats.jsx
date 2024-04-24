const Stats = () => {
  return (
    <div className=" mt-8 stats shadow col-span-2 w-screen flex flex-row">
      <div className="stat w-1/3 ">
        <div className="stat-title ">Personalities</div>
        <div className="stat-value text-center text-primary">16</div>
        <div className="stat-desc text-wrap">INTP, ENTP, ENTJ, INFP and many more!</div>
      </div>
      <div className="stat w-1/3">

        <div className="stat-title text-wrap">Cognitive functions</div>
        <div className="stat-value text-center text-secondary">8</div>
        <div className="stat-desc  text-wrap">There are 4 on our "stack" that are our main ones</div>
      </div>
      <div className="stat w-1/3">
        <div className="stat-value text-center text-3xl text-primary">98.7%</div>
        <div className="stat-title">Accuracy</div>
        <div className="stat-desc text-primary text-wrap">Unlike other tests we use cogntive functions to test</div>
      </div>
    </div>
  );
};

export default Stats;
