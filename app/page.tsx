import Image from "next/image";
import Link from "next/link";
import WelcomeButton from "./components/welcome-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src="/pokemon.svg"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <Image
        src="/pokemon.svg"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Screenshot of the dashboard project showing mobile version"
      />
       <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        <WelcomeButton />
       </div>
    </main>
  );
}





