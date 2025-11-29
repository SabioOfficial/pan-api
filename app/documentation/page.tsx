import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation • Pan API",
  description: "An community-ran API for Flavortown!",
};

export default function Documentation() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <button className="cursor-pointer border-2 px-4 py-1 hover-invert-btn self-start"><a href="./">🠘 Return to home page</a></button>
      <hr></hr>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 items-start">
          <p className="text-lesser-50">for v(a)0.01+v(c)0.481</p>
          <h1 className="text-4xl">Documentation Home Page</h1>
          <p>
            Welcome to the home page for the Documentation of Pan API v(a)0.01+v(c)0.481. Please note that information may be inaccurate or missing as we update the APIs regularly.
          </p>
        </div>
        <hr></hr>
        <h2 className="text-3xl">APIs</h2>
        <div className="flex flex-col gap-2 items-start">
          <button className="cursor-pointer border-2 px-4 py-2 hover-invert-btn text-sm"><a href="/documentation/shop">↗ Shop API</a></button>
          <button className="cursor-pointer border-2 px-4 py-2 text-sm blur-xxs brightness-50">✖ Kitchen API</button>
          <button className="cursor-pointer border-2 px-4 py-2 text-sm blur-xxs brightness-50">✖ Explore API</button>
          <button className="cursor-pointer border-2 px-4 py-2 text-sm blur-xxs brightness-50">✖ Projects API</button>
        </div>
        <hr></hr>
        <h2 className="text-3xl">Important</h2>
        <div className="flex flex-col gap-2 items-start">
          <button className="cursor-pointer border-2 px-4 py-2 text-sm blur-xxs brightness-50">✖ API Updates</button>
          <button className="cursor-pointer border-2 px-4 py-2 text-sm blur-xxs brightness-50">🥚 egg (REAL)</button>
        </div>
        <hr></hr>
        <h2 className="text-3xl">Miscellaneous</h2>
        <div className="flex flex-col gap-2 items-start">
          <button className="cursor-pointer border-2 px-4 py-2 text-sm blur-xxs brightness-50">✖ API Versioning</button>
          <button className="cursor-pointer border-2 px-4 py-2 text-sm blur-xxs brightness-50">✖ Flavortown Versioning</button>
        </div>
      </div>
    </div>
  )
}