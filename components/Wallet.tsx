import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Wallet() {
  return (
    <div className="">
      <ConnectButton
        accountStatus={{
          smallScreen: "avatar",
          largeScreen: "full",
        }}
        showBalance={{
          smallScreen: false,
          largeScreen: true,
        }}
      />
    </div>
  );
}
