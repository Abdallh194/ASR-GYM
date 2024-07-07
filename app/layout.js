import { Inter } from "next/font/google";
import "./globals.css";
import CopyRight from "./_Components/CopyRight";
import StoreProvider from "./_Redux/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ASR GYM",
  description:
    "Do you want to be a champion? Work out under the supervision of our champions in the gym with the champion maker ,Integrated gym, bodybuilding, weightlifting, physical strength, slimming, physical fitness, military rehabilitation, kungfu and kickboxing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={inter.className}>
          {children}
          <CopyRight />
        </body>
      </StoreProvider>
    </html>
  );
}
