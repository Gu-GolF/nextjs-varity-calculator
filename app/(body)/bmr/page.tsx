"use client";

import { useState } from "react";
import Image from "next/image";
import bmrpic from "@/assets/images/bmr.png";
import calculator from "@/assets/images/calculator.png";
import Footer from "@/components/footer";
import Link from "next/link";

export default function BMRPage() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [bmr, setBmr] = useState("0.00");

  const calculateBMR = () => {
    if (!weight || !height || !age) {
      alert("กรุณาป้อนน้ำหนัก ส่วนสูง และอายุก่อนคำนวณ");
      return;
    }

    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    let result = 0;

    if (gender === "male") {
      result = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      result = 10 * w + 6.25 * h - 5 * a - 161;
    }

    setBmr(result.toFixed(2));
  };

  const resetBMR = () => {
    setWeight("");
    setHeight("");
    setAge("");
    setGender("male");
    setBmr("0.00");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 py-10">
      <div className="w-full max-w-lg bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-xl flex flex-col items-center">
        <Image src={calculator} alt="calculator" width={100} className="mb-3" />
        <h1 className="text-3xl font-extrabold text-pink-600 mb-1 text-center drop-shadow">
          Varity Calculator v1.0
        </h1>
        <h2 className="text-xl text-pink-500 mb-6 text-center">
          โปรแกรมคำนวณ BMR
        </h2>

        <div className="w-full flex flex-col items-center border border-gray-200 rounded-xl p-6 shadow-sm">
          <Image src={bmrpic} alt="BMR" width={50} className="mb-3" />
          <h3 className="text-lg text-pink-600 font-semibold mb-5">
            คำนวณ BMR ของคุณ
          </h3>

          {/* Weight */}
          <div className="w-full flex flex-col mb-3">
            <label className="mb-1 font-medium text-gray-700">น้ำหนัก (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="เช่น 60"
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
          </div>

          {/* Height */}
          <div className="w-full flex flex-col mb-3">
            <label className="mb-1 font-medium text-gray-700">ส่วนสูง (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="เช่น 170"
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
          </div>

          {/* Age */}
          <div className="w-full flex flex-col mb-3">
            <label className="mb-1 font-medium text-gray-700">อายุ (ปี)</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="เช่น 25"
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
          </div>

          {/* Gender */}
          <div className="w-full flex justify-center mb-5 gap-5">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />
              ชาย
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
              หญิง
            </label>
          </div>

          {/* Buttons */}
          <div className="w-full flex flex-col sm:flex-row gap-3">
            <button
              onClick={calculateBMR}
              className="flex-1 text-lg bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition shadow-md"
            >
              คำนวณ
            </button>
            <button
              onClick={resetBMR}
              className="flex-1 text-lg bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg transition shadow-md"
            >
              ยกเลิก
            </button>
          </div>

          {/* Result */}
          <div className="mt-6 text-center text-gray-800 text-xl font-medium">
            <span>BMR: </span>
            <span className="text-4xl font-bold text-red-600 mx-2">{bmr}</span>
            <span> kcal/day</span>
          </div>
        </div>

        {/* Back to Menu */}
        <Link
          href="/menu"
          className="mt-6 inline-flex items-center px-5 py-2 bg-pink-100 hover:bg-pink-200 text-pink-700 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          <span className="mr-2 text-2xl">⬅️</span>
          กลับไปหน้าเมนู
        </Link>
      </div>

      <Footer />
    </div>
  );
}
