import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FaFacebook, FaMailBulk } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" text-white text-center p-4 border-t-2 flex flex-row justify-between items-center bg-[#263238]">
      <p className="text-sm">&copy; 2024 MVK</p>
      <div className="flex flex-row items-center gap-2">
        <Link href="https://www.facebook.com/bmemvk" target="_blank">
          <FaFacebook size={30} />
        </Link>
        <a href="mailto:mvk@bmeehk.hu">
          <CiMail size={30} />
        </a>
      </div>
      <p>
        Made With Love By{" "}
        <a className="font-bold" href="https://kir-dev.hu">
          Kir-Dev
        </a>
      </p>
    </footer>
  );
}
