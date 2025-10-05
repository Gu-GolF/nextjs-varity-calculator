"use client";

import Image from "next/image";
import Footer from "@/components/footer";
import Link from "next/link";
import rectangleImg from "@/assets/images/rectangle.png";
import circleImg from "@/assets/images/circle.png";
import triangleImg from "@/assets/images/triangle.png";
import cylinderImg from "@/assets/images/cylinder.png";

export default function ShapePage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 py-10">
      <div className="w-full max-w-3xl bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-xl flex flex-col items-center">
        <h1 className="text-3xl font-extrabold text-pink-600 mb-1 text-center drop-shadow">
          Varity Calculator v1.0
        </h1>
        <h2 className="text-xl text-pink-500 mb-6 text-center">
          เลือกทรงที่ต้องการคำนวณพื้นที่
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          {/* Rectangle */}
          <Link
            href="/shape/rectangle"
            className="flex flex-col items-center bg-pink-50 rounded-xl shadow-md p-5 hover:shadow-lg transition"
          >
            <Image src={rectangleImg} alt="Rectangle" width={80} className="mb-3" />
            <span className="text-lg font-semibold text-pink-700">สี่เหลี่ยม</span>
          </Link>

          {/* Circle */}
          <Link
            href="/shape/circle"
            className="flex flex-col items-center bg-pink-50 rounded-xl shadow-md p-5 hover:shadow-lg transition"
          >
            <Image src={circleImg} alt="Circle" width={80} className="mb-3" />
            <span className="text-lg font-semibold text-pink-700">วงกลม</span>
          </Link>

          {/* Triangle */}
          <Link
            href="/shape/triangle"
            className="flex flex-col items-center bg-pink-50 rounded-xl shadow-md p-5 hover:shadow-lg transition"
          >
            <Image src={triangleImg} alt="Triangle" width={80} className="mb-3" />
            <span className="text-lg font-semibold text-pink-700">สามเหลี่ยม</span>
          </Link>

          {/* Cylinder */}
          <Link
            href="/shape/cylinder"
            className="flex flex-col items-center bg-pink-50 rounded-xl shadow-md p-5 hover:shadow-lg transition"
          >
            <Image src={cylinderImg} alt="Cylinder" width={80} className="mb-3" />
            <span className="text-lg font-semibold text-pink-700">ทรงกระบอก</span>
          </Link>
        </div>

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
