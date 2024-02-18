import { Inter } from "next/font/google";
import "./globals.css";
import Provider from './Provider';
import Appbar from '../components/Appbar.jsx';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio CSV",
  description: "Portafolio con Next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Appbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
