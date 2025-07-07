import Image from "next/image";

export default function TipCard() {
  return (
    <div className="bg-[#EDF0F6] p-4 rounded-xl flex flex-col space-y-4 mt-8">
      <div className="w-full h-24 relative">
        <Image
          src="/illustrations/practice.jpg"
          alt="Practice Illustration"
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="font-semibold text-gray-800">Ace your interview</h3>
        <p className="text-sm text-gray-500">
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </p>
      </div>
      <button className="bg-black text-white text-sm py-2 rounded-md hover:bg-gray-800 transition">
        VIEW TIPS
      </button>
    </div>
  );
}
