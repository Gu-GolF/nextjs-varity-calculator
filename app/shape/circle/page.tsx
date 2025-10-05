"use client";
import Image from "next/image";
import circle from "@/assets/images/circle.png";
import { useState } from "react";
import Footer from "@/components/footer";
import Link from "next/link";

export default function CirclePage() {
  const [radius, setRadius] = useState("");
  const [area, setArea] = useState("0.00");

  const calculateArea = () => {
    if (!radius) {
      alert("กรุณาป้อนรัศมี");
      return;
    }
    const r = parseFloat(radius);
    const result = Math.PI * r * r;
    setArea(result.toFixed(2));
  };

  const resetArea = () => {
    setRadius("");
    setArea("0.00");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 py-10">
      <div className="w-full max-w-lg bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-xl flex flex-col items-center">
        <h1 className="text-3xl font-extrabold text-pink-600 mb-1 text-center drop-shadow">
          Varity Calculator v1.0
        </h1>
        <h2 className="text-xl text-pink-500 mb-6 text-center">
          คำนวณพื้นที่วงกลม
        </h2>

        <div className="w-full flex flex-col items-center border border-gray-200 rounded-xl p-6 shadow-sm">
           <Image src={circle} alt="circle" width={50} className="mb-3" />
          <h3 className="text-lg text-pink-600 font-semibold mb-5">
            หาพื้นที่วงกลม
          </h3>
          {/* Radius */}
          <div className="w-full flex flex-col mb-5">
            <label className="mb-1 font-medium text-gray-700">รัศมี (r)</label>
            <input
              type="number"
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              placeholder="เช่น 5"
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
          </div>

          {/* Buttons */}
          <div className="w-full flex flex-col sm:flex-row gap-3">
            <button
              onClick={calculateArea}
              className="flex-1 text-lg bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition shadow-md"
            >
              คำนวณ
            </button>
            <button
              onClick={resetArea}
              className="flex-1 text-lg bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg transition shadow-md"
            >
              ยกเลิก
            </button>
          </div>

          {/* Result */}
          <div className="mt-6 text-center text-gray-800 text-xl font-medium">
            <span>พื้นที่: </span>
            <span className="text-4xl font-bold text-red-600 mx-2">{area}</span>
          </div>
        </div>

        <Link
          href="/shape"
          className="mt-6 inline-flex items-center px-5 py-2 bg-pink-100 hover:bg-pink-200 text-pink-700 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          <span className="mr-2 text-2xl">⬅️</span>
          กลับไปหน้า Shape
        </Link>
      </div>

      <Footer />
    </div>
  );
}
