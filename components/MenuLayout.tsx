"use client";

import { useRouter } from "next/navigation";
import Footer from "@/components/footer";

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleLogout = () => {
    if (confirm("คุณต้องการออกจากระบบหรือไม่?")) {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-5 bg-white/80 backdrop-blur-md shadow-md border-b border-pink-200">
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-pink-600 via-purple-500 to-pink-700 bg-clip-text text-transparent drop-shadow-sm">
          Varity Calculator v1.0
        </h1>
        <button
          onClick={handleLogout}
          className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500 text-white font-semibold px-4 py-2 rounded-xl shadow-md transition-all duration-300"
        >
          🚪 ออกจากระบบ
        </button>
      </header>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center py-10 px-4">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
