import { FugleTrade, Order } from "@fugle/trade"
// 環境設定
const fugle = new FugleTrade({
  configPath: "./config.ini",
})
// 登入
await fugle.login()
// 建立委託物件
const order = new Order({
  buySell: Order.Side.Buy,
  price: "",
  stockNo: "2884",
  quantity: 1,
  apCode: Order.ApCode.Common,
  priceFlag: Order.PriceFlag.LimitDown,
  bsFlag: Order.BsFlag.ROD,
  trade: Order.Trade.Cash,
})
// 送出委託
await fugle.placeOrder(order)
console.log("Your order has been placed successfully.")
