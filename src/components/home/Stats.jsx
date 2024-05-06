const Stats = () => {
  return (
    <div className=" stats shadow col-span-2 w-full lg:w-3/4 flex flex-row">
      <div className="stat w-1/3 ">
        <div className="stat-title ">Personalities</div>
        <div className="stat-value text-center text-primary">16</div>
        <div className="stat-desc text-wrap">
          INTP, ENTP, ENTJ, INFP and many more!
        </div>
      </div>
      <div className="stat w-1/3">
        <div className="stat-title text-wrap">Cognitive functions</div>
        <div className="stat-value text-center text-secondary">8</div>
        <div className="stat-desc  text-wrap">
          There are 4 on our &quot;stack&quot; that are our main ones
        </div>
      </div>
      <div className="stat w-1/3">
        <div className="stat-value text-center text-3xl text-primary">
          10
        </div>
        <div className="stat-title">Quick and accurate questions</div>
        <div className="stat-desc text-primary text-wrap">
          Unlike other tests we use cognitive functions to test
        </div>
      </div>
    </div>
  );
};

export default Stats;
