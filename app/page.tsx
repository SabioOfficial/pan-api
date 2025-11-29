import Image from 'next/image'

export default function Home() {
  const slugs = [
    "now with nextjs!",
    "made by sabio!!!",
    "visit #pan-api (this IS a threat)",
    "not vibecoded!",
    "shop api was the first api for Pan!",
    "owned by sabio (corp) ((real))",
    "free and open source!!!!!",
    "created by one stupid moron",
    "in heavy development",
    "a work in progress!",
    "that's cool! -Mish, flavortown helper"
  ]
  const slugRand = Math.floor(Math.random() * slugs.length);

  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="flex flex-col gap-2">
        <h1 className="flex flex-row gap-4 text-5xl items-end">
          <Image src="../logo.svg" alt="Pan API logo created by Sabio" width={0} height={0} style={{height: "1em"}} className="w-auto mb-1.25"></Image> Pan API
          <span className="text-base mb-0.5"> v(a)0.01+v(c)0.477</span>
        </h1>
        <p className="text-yellow-300" id="slug__el">{slugs[slugRand]}</p>
      </div>
      <hr></hr>
      <div className="flex flex-col gap-5 items-start max-w-2xl">
        <h2 className="text-3xl">By the Flavortown community, for the Flavortown community.</h2>
        <p>Flavortown-centered project? <del>Flavortown scraper? (I'm talking to you Ali)</del> This is for you!</p>
        <div className="flex flex-row gap-6 items-center mt-2">
          <button className="cursor-pointer border-2 px-4 py-1.5 hover-invert-btn">Documentation</button>
          <button className="cursor-pointer">Projects</button>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}