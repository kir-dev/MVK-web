import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" text-black text-center p-4 border-t-2 flex flex-row justify-between items-center">
      <p className="text-sm">&copy; 2024 MVK</p>
      <div className="flex flex-col items-center gap-0.5">
        <Link href="https://www.facebook.com/bmemvk" target="_blank">
          <img
            height="32"
            width="32"
            src="https://cdn.simpleicons.org/facebook"
          />
        </Link>
        <p>Kapcsolat:</p>
        <a href="mailto:mvk@bmeehk.hu">mvk@bmeehk.hu</a>
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
