"use client";

import * as crypto from "crypto";
import querystring from "qs";
import moment from "moment";
export const pay = async (order) => {
  const sortObject = (obj) => {
    // eslint-disable-next-line prefer-const
    let sorted = {};
    const str = [];
    let key;
    for (key in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(key)) {
        str.push(encodeURIComponent(key));
      }
    }
    str.sort();
    for (key = 0; key < str.length; key++) {
      sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
    }
    return sorted;
  };

  const generateRandomString = (length) => {
    const digits = "0123456789";
    let randomString = "";

    while (randomString.length < length) {
      const randomByte = crypto.randomBytes(1)[0];
      if (randomByte < digits.length) {
        randomString += digits.charAt(randomByte);
      }
    }

    return randomString;
  };
  // var ipAddr =
  //   req.headers["x-forwarded-for"] ||
  //   req.connection.remoteAddress ||
  //   req.socket.remoteAddress ||
  //   req.connection.socket.remoteAddress;

  // var dateFormat = require("dateformat");

  // var tmnCode = process.env.NEXT_PUBLIC_vnp_TmnCode;
  // var secretKey = process.env.NEXT_PUBLIC_vnp_HashSecret;
  // var vnpUrl = process.env.NEXT_PUBLIC_vnp_Url;
  // var returnUrl = process.env.NEXT_PUBLIC_vnp_ReturnUrl;

  // var date = new Date();

  // var createDate = dateFormat(date, "yyyymmddHHmmss");
  // var orderId = dateFormat(date, "HHmmss");

  // var amount = order.amount;
  // var bankCode = order.bankCode;

  // var orderInfo = order.orderDescription;
  // var orderType = order.orderType;
  // var locale = order.language;
  // if (locale === null || locale === "") {
  //   locale = "vn";
  // }
  // var currCode = "VND";vnp_Url
  // vnp_Params["vnp_TmnCode"] = process.env.vnp_TmnCode;
  // vnp_Params["vnp_Merchant"] = "haovo@dayoneteams.com";
  // vnp_Params["vnp_Locale"] = locale;
  // vnp_Params["vnp_CurrCode"] = currCode;
  // vnp_Params["vnp_TxnRef"] = orderId;
  // vnp_Params["vnp_OrderInfo"] = orderInfo;
  // vnp_Params["vnp_OrderType"] = orderType;
  // vnp_Params["vnp_Amount"] = amount * 100;
  // vnp_Params["vnp_ReturnUrl"] = returnUrl;
  // vnp_Params["vnp_IpAddr"] = "127.0.0.1:3000";
  // vnp_Params["vnp_CreateDate"] = createDate;
  // if (bankCode !== null && bankCode !== "") {
  //   vnp_Params["vnp_BankCode"] = bankCode;
  // }

  // vnp_Params = sortObject(vnp_Params);

  // var querystring = require("qs");
  // var signData = querystring.stringify(vnp_Params, { encode: false });
  // var crypto = require("crypto");
  // var hmac = crypto.createHmac("sha256", secretKey);
  // console.log("reach");
  // var signed = hmac.update(new Buffer(signData, "utf-8")).digest("hex");
  // vnp_Params["vnp_SecureHash"] = signed;
  // vnpUrl += "?" + signData;
  // console.log(vnpUrl);
  // document.location = vnpUrl;

  //------------------------
  const createDate = moment().format("YYYYMMDDHHmmss");
  const locale = "vn";
  const currCode = "VND";
  let vnp_Params = {
    vnp_Version: "2.1.0",
    vnp_Command: "pay",
    vnp_TmnCode: process.env.NEXT_PUBLIC_vnp_TmnCode,
    vnp_Locale: locale,
    vnp_CurrCode: currCode,
    vnp_TxnRef: generateRandomString(6),
    vnp_OrderInfo: "Thanh toan cho ma GD:",
    vnp_OrderType: "other",
    vnp_ReturnUrl: process.env.NEXT_PUBLIC_vnp_ReturnUrl,
    vnp_IpAddr: 1,
    vnp_CreateDate: createDate,
    vnp_Amount: Number(order.amount + 15000) * 100,
  };

  vnp_Params = sortObject(vnp_Params);

  const signData = querystring.stringify(vnp_Params, { encode: false });
  const hmac = crypto.createHmac(
    "sha512",
    process.env.NEXT_PUBLIC_vnp_HashSecret
  );
  const signed = hmac.update(new Buffer(signData, "utf-8")).digest("hex");
  vnp_Params["vnp_SecureHash"] = signed;
  let vnpUrl = process.env.NEXT_PUBLIC_vnp_Url;
  vnpUrl += "?" + querystring.stringify(vnp_Params, { encode: false });
  document.location = vnpUrl;

  return vnpUrl;
};

// Vui lòng tham khảo thêm tại code demo
