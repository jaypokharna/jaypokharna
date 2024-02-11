import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jay Pokharna",
  description: "A Passionate Full Stack Developer",
  icons:{
    icon :['./favicon.ico?v=4'],
    apple:['./apple-touch-icon.png?v=4'],
    shortcut:['./apple-touch-icon.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      </head>
      <body className="bg-[rgb(20,19,25)] text-white">{children}</body>
    </html>
  );
}
