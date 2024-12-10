import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MyConmonent from "./components/MyConmonent";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-purple-200 to-white text-gray-800 font-sans">
        {/* 设置组件最外边组件的我高度 */}
        <div className="flex h-screen h-full">
          {/* 左侧导航栏 */}
          <Sidebar />
          <div className="flex-1 flex flex-col">
            {/* 顶部导航栏 */}
            
            <Navbar />
            <main className="p-4 space-y-8">
              {/* 动态内容 */}
              {children}
              {/* AI 写作工具 */}
              {/* <MyConmonent/>
           */}
           
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}