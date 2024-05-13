import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"www.turuq.co"} className="absolute top-0 left-0 m-5">
        <Image src={"/babyblue.png"} alt="turuq.co" width={200} height={200} />
      </Link>
      <h1 className="text-4xl font-black">Welcome to Turuq World Explorer</h1>
    </main>
  );
}
