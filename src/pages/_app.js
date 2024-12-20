import "@/styles/globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  
  return (
    <ThemeProvider>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
   
  );
}
