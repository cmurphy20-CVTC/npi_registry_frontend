import React from "react";

function Footer() {
  return (
    <footer className=" mx-auto min-h-screen">
      <div className="mx-auto h-auto bg-blue-500 pt-6">
        <p className="pb-6 text-center text-white underline-offset-auto">
          ©{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://splendid-alfajores-593dac.netlify.app/"
          >
            Casey Murphy Web Dev
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
