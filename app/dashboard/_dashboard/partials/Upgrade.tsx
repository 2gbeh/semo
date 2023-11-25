import Link from "next/link";

const Upgrade = () => {
  return (
    <section className="sm:absolute sm:bottom-5 sm:mt-0 mt-32 w-full flex justify-center">
      <div className="flex flex-col items-center rounded-xl bg-black text-white px-6 pt-8 pb-6 w-[265px]">
        <h2 className="font-bold text-brand">Upgrade to PRO!</h2>
        <p className="text-sm text-center mt-2 text-gray-200">
          Improve your development process and wtart doing more with Horizon UI
          Pro!
        </p>
        <Link
          href="#"
          className="bg-white text-black text-sm font-bold px-4 py-2 mt-4 rounded-lg hover:bg-black hover:text-white border-2 border-white transition"
        >
          Start FREE Trial
        </Link>
      </div>
    </section>
  );
};

export default Upgrade;
