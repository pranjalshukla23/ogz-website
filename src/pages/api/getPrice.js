import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(
  "https://bsc-dataseed.binance.org/"
);

// const contract = {
//   factory: "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73", // PancakeSwap V2 factory
//   router: "0x10ED43C718714eb63d5aA57B78B54704E256024E", // PancakeSwap V2 router
// };

const contract = {
  factory: "0xB7926C0430Afb07AA7DEfDE6DA862aE0Bde767bc", // PancakeSwap V2 factory
  router: "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3", // PancakeSwap V2 router
};

const tokens = {
  BUSD: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
  SCZ: "0x39f1014a88c8ec087cedf1bfc7064d24f507b894",
  DOP: "0x844fa82f1e54824655470970f7004dd90546bb28",
  OGZ: "0xc173214b1f342c27d2af43984b99edb62cd903fa",
  BNB: "0x2b8ff854c5e16cf35b9a792390cc3a2a60ec9ba2",
};

const router = new ethers.Contract(
  contract.router,
  [
    "function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)",
  ],
  provider
);

export default function handler(req, res) {
  let token = req.query.token;

  if (token?.indexOf("0x") === -1) {
    token = tokens[token?.toUpperCase()];
  }

  if (token) {
    getPrice(token, tokens.BUSD).then((price) => {
      res.json({
        success: true,
        BUSD: price,
      });
    });
  } else {
    res.status(400).json({
      success: false,
      description: "missing `token` parameter",
    });
  }
}

async function getPrice(inputCurrency, outputCurrency) {
  const amounts = await router.getAmountsOut(ethers.utils.parseUnits("1", 18), [
    inputCurrency,
    outputCurrency,
  ]);
  return amounts[1].toString() / 1e18;
}
