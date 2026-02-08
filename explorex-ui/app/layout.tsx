import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "ExploreX",
  description: "Travel planning platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ padding: "20px", minHeight: "80vh" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
