import Link from 'next/link';
export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center text-black h-[44vh] gap-4">
        <div className="font-bold text-3xl">
          Fuel Your Passion, Back Your Heroes! 🚀 
        </div>
        <p>
          A crowdfunding platform for creators. Get funded by your fans and followers.
        </p>
        <div>
          <Link href={"/login"}>
          <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Start now
          </button>
          </Link>
          <Link href={"/about"}>
          <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Read More
          </button>
          </Link>
        </div>
      </div>
      <div className="bg-purple-300 h-1 opacity-10"></div>
      <div className="text-black container mx-auto pb-24 pt-14">
        <h2 className="text-2xl font-bold text-center mb-14">Get Backed by your Fans</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/fan.gif" alt="fans" />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center text-sm">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt="money" />
            <p className="font-bold">Fans available to help</p>
            <p className="text-center text-sm">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/groupfans.gif" alt="fans support" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center text-sm">Your fans are available for you to help you</p>
          </div>
        </div>
      </div>
      <div className="bg-purple-300 h-1 opacity-10"></div>
      <div className="text-black container mx-auto pb-24 pt-14">
        <h2 className="text-2xl font-bold text-center mb-14">Learn More About Us</h2>
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="md:w-1/2 p-4">
            <h3 className="text-2xl font-semibold mb-4">What is FanConnect?</h3>
            <p className="text-gray-700 mb-4">
              FanConnect is a crowdfunding platform that empowers creators to get funded by their fans and followers. Whether you're an artist, musician, writer, or any other type of creator, FanConnect provides the tools you need to build a sustainable income from your passion.
            </p>
            <p className="text-gray-700 mb-4">
              Our platform allows creators to offer exclusive content, interact with their supporters, and build a dedicated community. Fans can support their favorite creators through subscriptions, one-time donations, and more.
            </p>
            <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Join Us Now
            </button>
          </div>
          <div className="md:w-1/2 p-4">
            <img src="support.jpg" alt="FanConnect" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
      <div className="bg-purple-300 h-1 opacity-10"></div>
    </>
  );
}
