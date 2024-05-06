const AboutProject = () => {
  return (
    <div className="about-project prose results-container p-5">
      <h1 className="about-project-title">
        <span className="text-red-900 font-light">Harvard - CS50</span> Final Project</h1>
      <h2>
        <span className="text-gray-500">Author </span> Olivier Paspuel
      </h2>
      <p className="about-project-description px-10 leading-loose">
        This project is a personality test that uses the Myers-Briggs Type
        Indicator (MBTI) to determine your personality type. The MBTI is a
        self-report questionnaire indicating differing psychological preferences
        in how people perceive the world and make decisions. The test uses
        cognitive functions to determine your mbti makind you decide in
        real-life based questions. The test then uses these categories to
        determine one of sixteen personality types.
      </p>
      <h2>Technologies Used</h2>
      <ul className="grid grid-flow-col grid-rows-4">
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Three.js</li>
        <li>Tanstack React Router</li>
        <li>Tailwind CSS</li>
        <li>DaisyUI</li>
        <li>React Three Fiber</li>
        <li>React Icons</li>
      </ul>
      <div className="grid grid-flow-col px-10">
        <div>
          <h2>Features</h2>
          <ul>
            <li>Interactive 3D models</li>
            <li>Models are prefetched</li>
            <li>Quick and accurate personality test</li>
            <li>Personality types descriptions</li>
            <li>Personality types families</li>
            <li>Cognitive functions</li>
            <li>Compatibility</li>
          </ul>
        </div>
        <div>
          <h2>Future Features</h2>
          <ul>
            <li> Careers</li>
            <li> Famous people</li>
            <li> Fictional characters</li>
            <li> Fictional worlds</li>
            <li> Movies</li>
            <li> Books</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
