import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

const APP_NAME = "Web3 Health Tracking Application";
const APP_LOGO_URL = "https://example.com/logo.png";
const NETWORK_CONFIGS = {
  1: {
    chainId: "0x1",
    chainName: "Ethereum Mainnet",
    rpcUrls: ["https://mainnet.infura.io/v3/your-api-key"],
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    }
  },
  11155111: {
    chainId: "0xaa36a7",
    chainName: "Sepolia",
    rpcUrls: ["https://sepolia.infura.io/v3/your-api-key"],
    nativeCurrency: {
      name: "Sepolia Ether",
      symbol: "ETH",
      decimals: 18
    }
  }
};

const DEFAULT_CHAIN_ID = 1;

// Coinbase Wallet Provider
export const getCoinbaseWalletProvider = () => {
  const coinbaseWallet = new CoinbaseWalletSDK({
    appName: APP_NAME,
    appLogoUrl: APP_LOGO_URL,
    darkMode: false,
    overrideIsMetaMask: false
  });
  return coinbaseWallet.makeWeb3Provider(INFURA_RPC_URL, DEFAULT_CHAIN_ID);
};

// MetaMask Provider
export const getMetaMaskProvider = () => {
  // We will prefer a provider where the property `isMetaMask` is set to true
  return (
    window.ethereum?.providers?.find((p) => !!p.isMetaMask) ?? window.ethereum
  );
};
