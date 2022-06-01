import React from "react";
import blockies from "blockies-ts";
import { useEtherBalance, useEthers, useNotifications } from "@usedapp/core";
import { Img, Text } from "@chakra-ui/react";
import { utils } from "ethers";

export const ProfileInfo: React.FC<{}> = () => {
  const { account, deactivate } = useEthers();
  const { notifications } = useNotifications();
  const etherBalance = useEtherBalance(account);
  const finalBalance = etherBalance ? utils.formatEther(etherBalance) : "";

  let blockieImageSrc: string;
  if (typeof window !== "undefined") {
    blockieImageSrc = blockies.create({ seed: account }).toDataURL();
  }

  console.log(account);

  return (
    <>
      {account ? (
        <>
          <Text>{finalBalance} BNB</Text>
          <Img src={blockieImageSrc} alt="profile photo" />
        </>
      ) : null}
    </>
  );
};
