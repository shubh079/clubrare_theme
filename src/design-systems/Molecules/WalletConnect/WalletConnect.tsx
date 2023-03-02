import React from "react";
import { WalletConnectProps } from "./interface";
import { useEffect, useState } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { Button } from "@/design-systems/Atoms";

export const WalletConnect: React.FC<WalletConnectProps> = ({}) => {
  const [walletcredentials, setWalletCredentials] = useState<any>({});
  const handleConnect = async () => {
    const res = await connectWallet();
    setWalletCredentials({ res });
    console.log(res);
  };

  const ConnectKaikas = async () => {
    const windowObj: any = window;
    try {
      let res;
      if (windowObj.klaytn) {
        res = await windowObj.klaytn.enable();
      }
      console.log(res);

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const handleConnectKaikas = async () => {
    const res = await ConnectKaikas();
    setWalletCredentials({ res });
    console.log(res);
  };
  // const provider = window.klaytn;
  // const caver = new Caver(provider)

  const getProvider = async () => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnect,
        options: {
          infuraId: "6acd5c8b49ac40cdb6f6a3e891eb5c92",
        },
      },
      coinbasewallet: {
        package: CoinbaseWalletSDK,
        options: {
          infuraId: "6acd5c8b49ac40cdb6f6a3e891eb5c92",
        },
      },
    };
    const web3Modal = new Web3Modal({
      providerOptions,
    });
    const provider = await web3Modal.connect();
    return provider;
  };

  const connectWallet = async () => {
    try {
      const provider = await getProvider();
      const web3 = new Web3(provider);
      const acc = await web3.eth.getAccounts();
      console.log(acc);
      const chainId = await web3.eth.getChainId();
      const accountBalance = await web3.eth.getBalance(acc[0]);
      return { acc: acc[0], chainId, accountBalance, web3, provider };
    } catch (error) {
      console.log(error);
    }
  };

  const updateWalletCredential = async (
    { type, typeData }: any,
    web3: { eth: { getBalance: (arg0: any) => any } }
  ) => {
    console.log(typeData);
    if (type === "chainId") {
      return {
        type,
        chainId: typeData.chainId,
        accountBalance: await web3.eth.getBalance(typeData.account),
      };
    } else {
      const accountBalance = await web3.eth.getBalance(typeData.account);
      return { type, acc: typeData.account, accountBalance };
    }
  };
  const isConnected = async () => {
    try {
      const web3 = new Web3(window.ethereum);

      const acc = await web3.eth.getAccounts();
      if (acc.length > 0) {
        console.log("connected");
        return true;
      } else {
        console.log("not connected");
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (walletcredentials?.provider) {
    console.log(walletcredentials?.provider);
    walletcredentials?.provider.on(
      "accountsChanged",
      async (accounts: any[]) => {
        console.log(accounts);
        const bal = await walletcredentials.web3.eth.getBalance(accounts[0]);
        console.log(bal);
        setWalletCredentials({
          ...walletcredentials,
          acc: accounts,
          accountBalance: bal,
        });
      }
    );

    walletcredentials?.provider.on("chainChanged", (chainId: any) => {
      setWalletCredentials({ ...walletcredentials, chainId: chainId });
    });
  }

  return (
    <div className="flex justify-between gap-4 md:items-center">
      {!walletcredentials?.res?.acc && (
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleConnect}
          label={"Connect Metamask Wallet"}
        />
      )}
      {walletcredentials?.res?.acc && (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-300">
          <h3>You are now connected:</h3>
          <h3> Account : {walletcredentials?.res?.acc}</h3>
          <h3> ChainId : {walletcredentials?.res?.chainId}</h3>
          <h3> Balance : {walletcredentials?.res?.accountBalance}</h3>
        </div>
      )}
      <Button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={handleConnectKaikas}
        label={"Connect Kaikas Wallet"}
      />
    </div>
  );
};
