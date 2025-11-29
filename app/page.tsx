import Image from 'next/image'

export default function Home() {
  const slugs = [
    "now with nextjs!",
    "made by sabio!!!",
    "visit the official slack channel!",
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
          <Image src="/logo.svg" alt="Pan API logo created by Sabio" width={0} height={0} style={{height: "1em"}} className="w-auto mb-1.25"></Image> Pan API
          <span className="text-base mb-0.5 text-lesser-50"> v(a)0.01+v(c)0.477</span>
        </h1>
        <p className="text-yellow-300" id="slug__el">{slugs[slugRand]}</p>
      </div>
      <hr></hr>
      <div className="flex flex-col gap-5 items-start max-w-2xl">
        <h2 className="text-3xl">By the Flavortown community, for the Flavortown community.</h2>
        <p>Flavortown-centered project? <del>Flavortown scraper? (I'm talking to you Ali)</del> This is for you!</p>
        <div className="flex flex-row gap-6 items-center mt-2">
          <button className="cursor-pointer border-2 px-4 py-1.5 hover-invert-btn">Documentation</button>
          <button className="cursor-pointer hover-lift-btn">Projects</button>
        </div>
      </div>
      <hr></hr>
      <div className="flex flex-col gap-8 max-w-2xl">
        <div className="flex flex-col gap-4 items-start">
          <h2 className="text-3xl">Choose Pan API!</h2>
          <p>
            We make fetching information from Flavortown easier. No more selecting elements- just one API!
          </p>
        </div>
        <table className="border-2 p-4 w-fit hover-lift-div">
          <thead className="text-lg">
            <tr>
              <th></th>
              <th>Flavortown</th>
              <th>Flavortown API</th>
              <th>Pan API</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kitchen</td>
              <td>Yes</td>
              <td className="text-lesser-100">Soon</td>
              <td className="text-lesser-100">December</td>
            </tr>
            <tr>
              <td>Explore</td>
              <td className="text-lesser-100">Soon</td>
              <td className="text-lesser-100">Soon</td>
              <td className="text-lesser-100">December</td>
            </tr>
            <tr>
              <td>Projects</td>
              <td>Yes</td>
              <td className="text-lesser-100">Soon</td>
              <td className="text-lesser-100">December</td>
            </tr>
            <tr>
              <td>Vote</td>
              <td className="text-lesser-100">Soon</td>
              <td className="text-lesser-200">Not Planned</td>
              <td className="text-lesser-200">Not Planned</td>
            </tr>
            <tr>
              <td>Shop</td>
              <td>Yes</td>
              <td className="text-lesser-100">Soon</td>
              <td>Yes <span className="text-lesser-50 italic">(Alpha)</span></td>
            </tr>
            <tr>
              <td>Users</td>
              <td className="text-lesser-100">Soon</td>
              <td className="text-lesser-100">Soon</td>
              <td className="text-lesser-100">Soon</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr></hr>
      <div className="flex flex-col gap-4 items-start">
        <h2 className="text-3xl">Contributers</h2>
        <p>Contributors that have helped maintain Pan API!</p>
      </div>
      <div className="flex flex-row gap-3 items-start lesser-hover-lift-div">
        <Image src="/contributors/SabioOfficial-72x72.png" width={48} height={48} alt="SabioOfficial's (aka SabioTheDev or SabioReal) profile picture."></Image>
        <div className="flex flex-col">
          <p className="text-xl">Sabio</p>
          <p className="text-sm text-lesser-50">Creator, Lead Developer & Main Artist</p>
        </div>
      </div>
      <div className="flex flex-row gap-3 items-start lesser-hover-lift-div">
        <Image src="/contributors/SabioOfficial-72x72.png" width={48} height={48} alt="SabioOfficial's (aka SabioTheDev or SabioReal) profile picture."></Image>
        <div className="flex flex-col">
          <p className="text-xl">still me</p>
          <p className="text-sm text-lesser-50">please <a href="https://github.com/SabioOfficial/pan-api" target='_blank'>contribute</a> to the repository i beg you</p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}