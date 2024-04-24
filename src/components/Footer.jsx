import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        {/* <a className="link link-hover">About us</a> */}
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">FAQ</a>
        <a href="">About</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a target="_blank" href="https://github.com/olivierpas13" >
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
