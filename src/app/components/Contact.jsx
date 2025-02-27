import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";

const Contact = () => {

  return (
    <section id="contact">
      <h2 className="text-4xl font-bold text-gold mt-20 text-center">Contact</h2>
      <div className="grid md:grid-cols-2 md:my-12 py-10 gap-4 relative ">
        <div >
          <div className="">
            <div className="grid">
              <h5 className="text-xl font-bold text-gold my-2">
                Let&apos;s Connect
              </h5>
              <div className="text-[#ADB7BE] mb-4 max-w-md">
                <p className="italic my-5">Let's Build Something Great!</p>
                Feel free to reach out! I'm always open to discussing new opportunities, whether it's full-time work, freelance projects, or innovative ideas.
              </div>
            </div>
            <div className="socials flex flex-row gap-2">
              <a href="https://github.com/darel-mbokazi" target="_blank" rel="noopener noreferrer">
                <FaSquareGithub className="w-6 h-6 hover:text-[#cbb36aa4] hover:transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/darel-mbokazi/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-6 h-6 hover:text-[#cbb36aa4]" />
              </a>
            </div>
          </div>
        </div>
        <div className="max-sm:mt-10">
          <form className="flex flex-col" action="https://formspree.io/f/myzkdojb" method="POST">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Subject"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full h-32 p-2.5"
                placeholder="Message..."
              />
            </div>
            <button
              type="submit"
              className="bg-gold hover:bg-[#cbb36aa4] text-white font-medium py-2.5 px-5 rounded-lg w-fit m-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
