import { client } from "../../lib/client";
export default async (req, res) => {
  const { userAddress } = req.body;

  const userDoc = {
    _type: "user",
    _id: `${userAddress}-user`,
    name: "Unnamed",
    walletAddress: userAddress,
  };
};
