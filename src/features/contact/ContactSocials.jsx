function ContactSocials() {
  const socials = [
    {
      social: "email",
      un: "selvambbm24@gmail.com",
      href: "mailto:shetemanav38@gmail.com",
    },
    {
      social: "github",
      un: "vikeybm24",
      href: "https://www.github.com/vikeybm24/",
    },
    {
      social: "linkedin",
      un: "Selvam B",
      href: "https://www.linkedin.com/in/selvam-b-634826279/",
    }
  ];
  return (
    <div className="line-container flex flex-col">
      <p className="  text-3xl text-textColor">Reach Out Via Socials </p>
      <div className="flex flex-col space-y-2 pt-5">
        <p className="line text-base text-textColor md:text-2xl">
          .socials &#123;{" "}
        </p>
        {socials.map((social) => {
          return (
            <div className="  line text-base md:text-2xl" key={social.social}>
              <span className="pl-5 text-textColor md:pl-8">
                {social.social}:
              </span>
              <a
                className=" pl-2 text-base text-accentColor hover:underline md:text-2xl"
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                {social.un};
              </a>
            </div>
          );
        })}
        <p className="line text-base text-textColor md:text-2xl">&#125;</p>
      </div>
    </div>
  );
}

export default ContactSocials;
