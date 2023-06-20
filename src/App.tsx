import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

import { Relayer } from "./components";

export function App() {
  /**
   * Wagmi hook for getting account information
   * @see https://wagmi.sh/docs/hooks/useAccount
   */
  const { isConnected } = useAccount();

  return (
    <>
      <h1>Superchain L2 to L1 Message Relayer</h1>

      {/** @see https://www.rainbowkit.com/docs/connect-button */}
      <ConnectButton chainStatus="none" />

      {isConnected && (
        <>
          <hr />
          <Relayer />
          <hr />
        </>
      )}
      <div style={{ marginTop: "20px" }}>
        <a href="https://github.com/zainbacchus/superchain-relayer" target="_blank" rel="noopener noreferrer">
          Share your feedback on the GitHub Repo
        </a>
      </div>
    </>
  );
}
