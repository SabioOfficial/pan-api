import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-flow-col gap-1 p-8 h-full">
      <div className="grow-0 shrink basis-auto">
        <h1 className="text-5xl">Pan API</h1>
        <p>v(a)0.01+v(c)0.417</p>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center grow shrink basis-auto">
        <Image src="/deno-dino.jpg" alt="" width={100} height={100}/>
        <p>under construction!</p>
      </div>
    </div>
  );
}