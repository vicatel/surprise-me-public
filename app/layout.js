import { Inter, Eagle_Lake, Poppins, Original_Surfer, Hepta_Slab, Outfit } from "next/font/google";
import "../styles/globals.css";
import 'boxicons/css/boxicons.min.css';

const inter = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Surprise Me Please!",
  description: "Surprise Me ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className }>{children}</body>
    
    </html>
  );
}
