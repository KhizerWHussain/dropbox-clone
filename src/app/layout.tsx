import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Provider } from "@/components/ui/provider";

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
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
