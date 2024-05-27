import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <Link href="/en" className="text-xl p-2">
        English
      </Link>
      <Link href="/de" className="text-xl p-2">
        Denish
      </Link>
      <Link href="/fr" className="text-xl p-2">
        French
      </Link>
      <Link href="/hi" className="text-xl p-2">
        Hindi
      </Link>
      <Link href="/sp" className="text-xl p-2">
        Spanish
      </Link>
    </div>
  );
}
