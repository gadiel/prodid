import Image from "next/image";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="px-5 w-[90%] md:w-[75%]">
        <h1 className="text-center mb-6">
          <span className="block text-2xl mb-2">Barcode Creation</span>
          <span className="block text-4xl font-bold">Break free from GS1</span>
        </h1>
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-3xl">
            <p className="text-center text-lg mt-8">
              Lets change the way we assign barcodes, with the power of the blockchain
              !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
