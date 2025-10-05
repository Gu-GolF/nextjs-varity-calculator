"use client";

import Image from "next/image";
import calculator from "./../../assets/images/calculator.png";
import money from "./../../assets/images/money.png";
import { useState } from "react";
import Footer from "@/components/footer";
import Link from "next/link";
export default function Page() {

  //สร้างคัวแปร state ทำงานกับ เงิ คนและเงิที่จแชร์กัน
  const [moneyInput, setMoneyInput] = useState("");
  const [person, setPerson] = useState("");
  const [moneyshare, setMonetShare] = useState("0.00");
  const handleCalClick = () => {
    //validate รหัส
    if (moneyInput == "" || person == "" || person == "0") {
      alert("กรุณาป้อนจำนวนเงินและจำนวนคนก่อนคำนวณ และจำนวนคนต้องไม่เป็น 0");
      return;
    }

    //คำนวณ
    const result = parseFloat(moneyInput) / parseFloat(person);
    setMonetShare(result.toFixed(2));
  };
  const handleCalCanCel = () => {
    setMoneyInput("");
    setPerson("");
    setMonetShare("0.00");
  }
  return (
    <>
      <div className="w-1/2 border border-gray-500 mx-auto mt-20 mb-10 p-20 flex flex-col items-center rounded-2xl shadow-x1">
        <Image src={calculator} alt="calculator" width={100} />
        <h1 className="text-3xl text-blue-600 font-bold mt-3">
          Varity Calculator v.1.0
        </h1>
        <h1 className="text-xl text-blue-600  mt-2 mb-5">โปรแกรมคำนวณ</h1>
        <div className="w-full border border-gray-300 flex flex-col items-center p-5 rounded-xl">
          <Image src={money} alt="calculator" width={50} />
          <h1 className="text-lg text-blue-600 font-bold mt-1 mb-5">
            แชร์เงินกันเถอะ
          </h1>

          <div className="=w-fullflex flex-col">
            <label>ป้อนเงิน (บาท)</label>
            <input type="text" value={moneyInput} onChange={(e) => { setMoneyInput(e.target.value)}}  
            className="border border-gray-300 p-2 rounded" />
          </div>

          <div className="=w-fullflex flex-col mt-3">
            <label>ป้อนคน</label>
            <input type="text" value={person} onChange={(e) => { setPerson(e.target.value)} }
            className="border border-gray-300 p-2 rounded" />
          </div>
          
          <button onClick={handleCalClick} className="w-full text-lg text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded text-center mt-5 cursor-pointer">
        คำนวณ
        </button>

        <button onClick={handleCalCanCel} className="w-full text-lg text-white bg-amber-600 hover:bg-blue-700 px-5 py-2 rounded text-center mt-5 cursor-pointer">
        ยกเลิก
        </button>
        <div>
          <span>หารกันคนละ</span>
          <span className="font-bold text-5xl text-red-600 mx-10">{moneyshare}</span>
          <span>บาท</span>
        </div>
        </div>

        <Link href="/menu" className="text-blue-600 mt-5">กลับไปหน้ามนู</Link>
      </div>
    
    <Footer/>
    </>
  );
}
