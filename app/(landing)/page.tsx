import { Medal } from "lucide-react";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          aplikasi Kondangan terbaik
        </div>
        <h1 className="text-2xl md:text-4xl text-center text-neutral-800 mb-6">
          Kondangan membantu anda untuk mengatur tamu acara anda.
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-slate-500 to-fuchsia-800 text-white px-4 p-2 rounded-md pb-4 w-fit">
          mudah dan cepat
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        <p>
          Dengan Kondangan, anda dapat membuat undangan digital untuk acara anda
          dengan. Anda juga bisa membuat daftar tamu dan buku tamu. scan QR Code
          untuk menghadiri acara anda.
        </p>
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Daftar Sekarang</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
