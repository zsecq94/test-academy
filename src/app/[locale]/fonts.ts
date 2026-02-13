import localFont from "next/font/local";

export const generalSans = localFont({
  variable: "--font-general-sans",
  display: "swap",
  src: [
    {
      path: "../../../public/fonts/GeneralSans-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../../public/fonts/GeneralSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/GeneralSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const pretendard = localFont({
  variable: "--font-pretendard",
  display: "swap",
  src: [
    {
      path: "../../../public/fonts/Pretendard-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Pretendard-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Pretendard-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
