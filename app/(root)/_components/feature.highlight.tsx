
import { Button } from "@/components/ui/button";
import Image from "next/image";
<Image
  src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/homepage/Publish.png"
  alt=""
  width={400}
  height={400}
  className="w-[85%] ml-5"
/>

const FeatureHighlight = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-12">
    <div className="w-full md:w-1/2 mb-8 md:mb-0">
      <div className="relative w-full aspect-square max-w-lg mx-auto">
        <Image
          src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/homepage/Publish.png"
          alt="Powerful email editing and design tools illustration"
          layout="fill"
          objectFit="contain"
          className="rounded-2xl shadow-2xl"
        />
      </div>
    </div>
    <div className="w-full md:w-1/2">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl max-w-2xl mx-auto">
        <h2 className="font-bold uppercase text-4xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 leading-tight">
          Create
        </h2>
        <h3 className="text-2xl md:text-4xl font-semibold mb-6 leading-tight">
          The most powerful editing and design tools in email.
        </h3>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          Warning: A writing experience unlike anything you&apos;ve ever experienced - proceed with caution.
        </p>
        <Button 
          variant="default" 
          size="lg"
          className="w-full md:w-auto px-8 py-6 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Start Building
        </Button>
      </div>
    </div>
  </div>
  );
};

export default FeatureHighlight;
