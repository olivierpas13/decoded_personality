import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bottom-0 footer footer-center p-3 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <Link to={"/about-project"}>About</Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-3">
          <a target="_blank" href="https://github.com/olivierpas13">
            <FaGithub size={30} />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2024 </p>
      </aside>
    </footer>
  );
};

export default Footer;
