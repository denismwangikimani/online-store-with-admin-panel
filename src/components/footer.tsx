import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-4 flex items-center justify-center gap-2">
        <Logo />
        <p className="text-center text-md text-black font-serif">
          © 2025{" "}
          <a
            className="underline"
            target="_blank"
            href="https://github.com/denismwangikimani"
          >
            House Of Kimani
          </a>
          , Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;