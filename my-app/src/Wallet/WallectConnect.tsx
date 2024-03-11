import React from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { arbitrum, mainnet } from "wagmi/chains";

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

//wallect connect project id
const projectId = "9f16a931a77e0e5c19079d42117099de";

const chains = [mainnet, arbitrum] as const;
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  enableWalletConnect: true,
  enableInjected: true,
  enableEIP6963: true,
  enableCoinbase: true,
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true,
});

export const WallectConnect = () => {
  const { open } = useWeb3Modal();
  return (
    <button
      className="font-semibold  lg:py-2 lg:px-4 py-1 px-1 rounded-lg shadow mt-10  bg-gradient-to-r from-[#ED0137] to-[#F05733]"
      onClick={() => open()}
    >
      Connect Wallet
    </button>
  );
};
