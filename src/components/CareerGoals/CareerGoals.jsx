import "./CareerGoals.css";

const CareerGoals = () => {
  return (
    <section id="career" className="career-goals">
      <div className="section-header">
        <h2>Career Goals</h2>
        <p>
          I am currently preparing for junior web developer opportunities where
          I can continue building my frontend and backend skills in a
          professional environment.
        </p>
      </div>

      <div className="career-grid">
        <div className="career-card card">
          <h3>Roles I Am Targeting</h3>
          <ul>
            <li>Junior Frontend Developer</li>
            <li>Junior Web Developer</li>
            <li>Junior Full-Stack Developer</li>
          </ul>
        </div>

        <div className="career-card card">
          <h3>Next Skills To Develop</h3>
          <ul>
            <li>SEO optimisation</li>
            <li>Accessibility best practices</li>
            <li>Performance auditing</li>
            <li>Advanced React patterns</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CareerGoals;