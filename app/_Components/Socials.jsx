import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Socials = () => {
  return (
    <div className="socials">
      <div className="socials-head"> Follow Us : </div>
      <div className="socials-icon">
        <a
          href="https://twitter.com/AbdallhSabry9"
          className="icon"
          target="_blanck"
        >
          <TwitterIcon />
        </a>
        <a href="#s" className="icon">
          <InstagramIcon />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100007172563893"
          target="_blanck"
          className="icon"
        >
          <FacebookIcon />
        </a>

        <a href="https://wa.me/+201091415560" className="icon" target="_blanck">
          <WhatsAppIcon />
        </a>
      </div>
    </div>
  );
};

export default Socials;
