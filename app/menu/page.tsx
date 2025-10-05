import Image from "next/image";
import calculator from "./../../assets/images/calculator.png";
import money from "./../../assets/images/money.png";
import bmi from "./../../assets/images/bmi.png";
import bmr from "./../../assets/images/bmr.png";
import shape from "./../../assets/images/shapes.png";
import Link from "next/link";
import Footer from "@/components/footer";
export default function Page() {
  return (
    <>
      <div className="w-1/2 border border-gray-500 mx-auto mt-20 mb-10 p-20 flex flex-col items-center rounded-2xl shadow-x1">
        <Image src={calculator} alt="calculator" width={150} />
        <h1 className="text-3xl text-blue-600 font-bold mt-5">
          Varity Calculator v.1.0
        </h1>
        <h1 className="text-xl text-blue-600  mt-2 mb-5">โปรแกรมคำนวณ</h1>
        <div className="w-full flex justify-center">
          <Link
            href="/moneyshare"
            className="text-2xl text-white bg-blue-600 px-5 py-2 rounded-xl text-center mx-2"
          >
            <Image src={money} alt="calculator" width={50} className="mx-auto" />
            แชร์เงินกันเถอะ
          </Link>
          <Link
            href="/bmi"
            className="text-2xl text-white bg-blue-600 px-5 py-2 rounded-xl text-center mx-2"
          >
            <Image src={bmi} alt="calculator" width={50} className="mx-auto" />
            BMI
          </Link>

          <Link
            href="/bmr"
            className="text-2xl text-white bg-blue-600 px-5 py-2 rounded-xl text-center mx-2"
          >
            <Image src={bmr} alt="calculator" width={50} className="mx-auto" />
            BMR
          </Link>
          <Link
            href="/shape"
            className="text-2xl text-white bg-blue-600 px-5 py-2 rounded-xl text-center mx-2"
          >
            <Image src={shape} alt="calculator" width={50} className="mx-auto" />
            พื้นที่รูปทรง
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
