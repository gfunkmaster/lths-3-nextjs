import "./globals.css";
import { inter } from "@/app/ui/fonts";
import { ThemeProvider } from "./components/themes-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">{children}</ThemeProvider>
      </body>
    </html>
  ); 
}
