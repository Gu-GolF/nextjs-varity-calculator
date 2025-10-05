"use client"; // คือการกำหนดให้ component นี้เป็น Client Component
import Image from "next/image";
import calculator from "../assets/images/calculator.png";
import Footer from "../components/footer";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  // state เก็บรหัสเข้าใช้งาน
  const [ucode, setUcode] = useState("");

  const handleAccessWebClick = () => {
    // ถ้าไม่ได้กรอกอะไรเลย
    if (ucode.trim() === "") {
      alert("⚠️ กรุณาป้อนชื่อหรือโค้ดก่อนเข้าใช้งาน");
      return;
    }

    // ถ้าใส่ GuGolF หรือ sau ก็เข้าได้
    if (ucode.toLowerCase() === "sau" || ucode.toLowerCase() === "gugolf") {
      router.push("/menu");
    } else {
      alert("❌ โค้ดหรือชื่อผู้ใช้ไม่ถูกต้อง");
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-400">
        <div className="w-[90%] max-w-lg border border-gray-300 bg-white/90 backdrop-blur-md mx-auto p-10 flex flex-col items-center rounded-3xl shadow-2xl transition-all duration-300 hover:scale-[1.02]">
          <Image src={calculator} alt="calculator" width={150} className="mb-5" />
          <h1 className="text-3xl md:text-4xl text-blue-600 font-extrabold mt-3 text-center">
            Varity Calculator v1.0
          </h1>
          <h2 className="text-2xl text-gray-700 mt-2 mb-6 text-center">
            โปรแกรมคำนวณสารพัดรูปแบบ 💡
          </h2>

          <div className="flex flex-col w-full">
            <label className="mb-2 text-gray-700 font-medium">
              ป้อนรหัสหรือชื่อผู้ใช้{" "}
              <span className="text-pink-600 text-bold">(เช่น GuGolF หรือ SAU)</span>
            </label>
            <input
              value={ucode}
              onChange={(e) => setUcode(e.target.value)}
              className="border border-gray-400 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
              type="text"
              placeholder="พิมพ์ชื่อหรือโค้ดเข้าใช้งาน..."
            />
          </div>

          <button
            type="button"
            onClick={handleAccessWebClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl mt-6 w-full shadow-md transition-all duration-300 hover:shadow-lg active:scale-95"
          >
            🚀 เข้าใช้งาน
          </button>
        </div>

        <div className="mt-10 w-full">
          <Footer />
        </div>
      </div>
    </>
  );
}
