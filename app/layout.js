import "./globals.css";

export const metadata = {
  title: "Scroll Animation Assignment",
  description: "Scroll-driven hero animation using GSAP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}