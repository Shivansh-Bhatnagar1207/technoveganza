import Link from "next/link";
import Image from "next/image";
import welcome from '../public/welcome.jpg';
export default function Home() {
  return (
    <main className=" h-screen w-screen text-white flex justify-center items-center gap-5 flex-col">
      <Image
        alt="Welcome"
        src={welcome}
        quality={100}
        fill
        sizes="100vw"
        className="z-[-1]  bg-black"
        style={{
          objectFit: 'cover'
        }} />
      <h2 className="text-3xl font-bold text-center">WELCOME TO <br /> TECHNOVEGANZA <br /> 2024</h2>
      <Link href={'/home'} className="bg-red-600 px-10 py-4 rounded-xl  hover:shadow-[0px_0px_10px_10px] hover:shadow-red-500 transition duration-300 ease-in-out cursor-pointer ">LET&apos;s BEGIN</Link>
    </main>
  );
}
