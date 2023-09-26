export default function Contact() {
  return (
    <>
      <div className="w-screen h-screen">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.762166100477!2d3.361489476784928!3d6.551682822831498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d93fd606989%3A0x9a43a711ee918ce2!2s1%20Oremeji%20St%2C%20Ilupeju%20102215%2C%20Lagos!5e0!3m2!1sen!2sng!4v1695721280982!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="py-[40px] md:py-[60px] lg:py-[100px] bg-mist">
        <h3 className="text-center mb-[20px] md:mb-[40px] text-primary-color font-[600] text-[20px] md:text-[28px]">
          Contact Us
        </h3>
        <div className="w-[90%] xl:w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] md:gap-[40px]">
          <div className="grid gap-[10px]">
            <input type="text" placeholder="Your name" className="p-[15px] bg-transparent border border-primary-color" />
            <input type="email" placeholder="Your email address" className="p-[15px] bg-transparent border border-primary-color" />
            <input type="text" placeholder="Your company name" className="p-[15px] bg-transparent border border-primary-color" />
            <input type="text" placeholder="Your telephone" className="p-[15px] bg-transparent border border-primary-color" />
            <textarea name="" placeholder="Your message" className="p-[15px] bg-transparent border border-primary-color resize-none"></textarea>
            <button className="p-[15px] bg-primary-color text-white">Send message</button>
          </div>
          <div>
            <p className="text-[16px] md:text-[20px] font-[500] mb-[10px]">You can find us here</p>
            <p className="text-[14px] md:text-[16px]">
              1, Oremeji Street, Off Obanle Aro Ave, Ilupeju, Lagos, 100252{" "}
              <br />
              <b className="italic">E</b>: info@r28.ng <br />{" "}
              <b className="italic">T:</b>+234 (0) 908 799 1029
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
