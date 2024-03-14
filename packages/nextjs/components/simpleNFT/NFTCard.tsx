import { useState } from "react";
import { Address, AddressInput } from "../scaffold-eth";
import { Collectible } from "./MyHoldings";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const NFTCard = ({ nft }: { nft: Collectible }) => {
  const [transferToAddress, setTransferToAddress] = useState("");

  const { writeAsync: transferNFT } = useScaffoldContractWrite({
    contractName: "ProdID",
    functionName: "transferFrom",
    args: [nft.owner, transferToAddress, BigInt(nft.id.toString())],
  });

  return (
    <div className="card card-compact bg-base-100 shadow-lg sm:min-w-[200px] shadow-secondary">
      <figure className="relative">
        <img src={nft.barcode_url} alt="NFT Image" className="h-60 min-w-full" />
      </figure>
      <div className="card-body space-y-3">
        <div className="flex space-x-3 mt-1 items-center">
          <span className="text-lg font-semibold">Number Barcode :</span><br/>
          <p className="text-xl p-0 m-0 font-semibold">{nft.id}</p>
        </div>
        <div className="flex space-x-3 mt-1 items-center">
          <span className="text-lg font-semibold">Owner : </span>
          <Address address={nft.owner} />
        </div>
        <div className="flex flex-col my-2 space-y-1">
          <span className="text-lg font-semibold mb-1">Transfer To: </span>
          <AddressInput
            value={transferToAddress}
            placeholder="receiver address"
            onChange={newValue => setTransferToAddress(newValue)}
          />
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary btn-md px-8 tracking-wide" onClick={() => window.open(nft.barcode_url, '_blank').focus()}>
            Generate: CODE-128
          </button>
          <button className="btn btn-secondary btn-md px-8 tracking-wide" onClick={() => transferNFT()}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
