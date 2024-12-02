import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-purple-200 to-white text-gray-800 font-sans">
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Navbar />
            <main className="p-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}