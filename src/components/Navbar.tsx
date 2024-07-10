import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border bg-white px-6 py-3 text-black w-screen">
      <div className="flex flex-row items-center justify-between border-t-black">
        <div className="align flex items-center">
          <Link
            href="/"
            className="flex w-fit align-middle flex-row items-center gap-3"
          >
            <Image src="/mvk-logo.svg" alt="MVK logo" width={100} height={24} />
            <h1 className="">Műegyetemi Versenycsapat Közösség</h1>
          </Link>
        </div>
        <nav className="flex items-center justify-end text-right gap-8">
          <Link href="/teams">Csapatok</Link>
          <Link href="/news">Hírek</Link>
          <Link href="/races">Versenyek</Link>
        </nav>
      </div>
    </header>
  );
}
