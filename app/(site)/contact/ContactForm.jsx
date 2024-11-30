"use client";

import FormfacadeEmbed from "@formfacade/embed-react";

const ContactForm = () => {
  return (
    <div style={{direction: "rtl"}}>
      <FormfacadeEmbed
        formFacadeURL="https://formfacade.com/include/115160867892145040450/form/1FAIpQLScyHn_SphdEmgC38nKg1R5GcE7pPw7fCSFFyuaKC9z4687bvQ/classic.js/?div=ff-compose"
        onSubmitForm={() => console.log("Form submitted")}
      />
    </div>
  );
};

export default ContactForm;
