import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/images/logo-01.svg"; // adjust filename if needed

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="SafeWork.AI">
      <Image
        src={logoImg}
        alt="SafeWorkAI logo"
        width={32}
        height={32}
        priority
      />
    </Link>
  );
}
