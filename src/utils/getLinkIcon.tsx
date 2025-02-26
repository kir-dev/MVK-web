import {
  FaFacebook,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

export function getLinkIcon(url: string) {
  if (url.includes("facebook")) {
    return <FaFacebook />;
  }
  if (url.includes("instagram")) {
    return <FaInstagram />;
  }
  if (url.includes("youtube")) {
    return <FaYoutube />;
  }
  if (url.includes("twitter")) {
    return <FaTwitter />;
  }
  if (url.includes("linkedin")) {
    return <FaLinkedin />;
  }
  return <FaLink />;
}
