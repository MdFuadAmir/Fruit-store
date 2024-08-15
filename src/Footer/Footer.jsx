import { LuLeafyGreen } from "react-icons/lu";

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-200 text-base-content p-10">
  <aside>
  <div className="flex gap-2 items-center text-2xl font-bold">
                <p className="text-[#DC143C]">FRUIT</p>
                <p className="text-orange-500">STORE</p>
                <LuLeafyGreen color="green"/>
            </div>
    <p>
      Fuad It Ltd.
      <br />
      Providing reliable tech since 2024
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;