"use client";
import Image from "next/image";
import Link from "next/link";
import calculator from "./../../assets/images/calculator.png";
import money from "./../../assets/images/money.png";
import bmi from "./../../assets/images/bmi.png";
import bmr from "./../../assets/images/bmr.png";
import shape from "./../../assets/images/shapes.png";
import MenuLayout from "@/components/MenuLayout";

export default function Page() {
  return (
    <MenuLayout>
      <div className="flex flex-col items-center">
        <Image
          src={calculator}
          alt="calculator"
          width={130}
          className="drop-shadow-md mb-6"
        />

        <h2 className="text-lg font-semibold tracking-wide drop-shadow-sm">
          <span className="align-middle">🔢</span>{" "}
          <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent">
            เลือกเครื่องมือคำนวณของคุณ
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Money Share */}
          <Link
            href="/moneyshare"
            className="bg-white hover:scale-105 transition-transform duration-300 rounded-2xl shadow-lg p-6 text-center border border-pink-200 hover:shadow-xl"
          >
            <Image
              src={money}
              alt="money"
              width={80}
              className="mx-auto mb-3"
            />
            <p className="text-xl font-semibold bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent">
              แชร์เงินกันเถอะ
            </p>
          </Link>

          {/* BMI */}
          <Link
            href="/bmi"
            className="bg-white hover:scale-105 transition-transform duration-300 rounded-2xl shadow-lg p-6 text-center border border-pink-200 hover:shadow-xl"
          >
            <Image src={bmi} alt="bmi" width={80} className="mx-auto mb-3" />
            <p className="text-xl font-semibold bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent">BMI</p>
          </Link>

          {/* BMR */}
          <Link
            href="/bmr"
            className="bg-white hover:scale-105 transition-transform duration-300 rounded-2xl shadow-lg p-6 text-center border border-pink-200 hover:shadow-xl"
          >
            <Image src={bmr} alt="bmr" width={80} className="mx-auto mb-3" />
            <p className="text-xl font-semibold bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent">BMR</p>
          </Link>

          {/* Shape */}
          <Link
            href="/shape"
            className="bg-white hover:scale-105 transition-transform duration-300 rounded-2xl shadow-lg p-6 text-center border border-pink-200 hover:shadow-xl"
          >
            <Image
              src={shape}
              alt="shape"
              width={80}
              className="mx-auto mb-3"
            />
            <p className="text-xl font-semibold bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent">พื้นที่รูปทรง</p>
          </Link>
        </div>
      </div>
    </MenuLayout>
  );
}
