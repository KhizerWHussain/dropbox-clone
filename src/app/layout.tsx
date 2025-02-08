import type { Metadata } from "next";
import "./globals.css";
import { lazy, ReactNode, Suspense } from "react";
import { Provider } from "@/components/ui/provider";
import { ReactScrollParallax } from "@/pageComponents/ParallaxProvider";
const Header = lazy(() => import("@/pageComponents/Header"));
const Footer = lazy(() => import("@/pageComponents/Footer"));

export const metadata: Metadata = {
  title: "Dropbox",
  description: "dropbox app",
};

interface RootLayoutProp {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProp>) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Suspense fallback={null}>
            <Header />
          </Suspense>
          <ReactScrollParallax>{children} </ReactScrollParallax>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </Provider>
      </body>
    </html>
  );
}
