import { useState } from "react";
import { connect, useSelector } from "react-redux";
import "../src/assets/css/summary.css";

function SummaryPage() {
  const cusType = useSelector((state) => state.queue.cusType);
  const queueLeft = useSelector((state) => state.queue.queueLeft);
  const currentQueue = useSelector((state) => state.queue.currentQueue);
  return (
    <>
      {/* <link
        href="https://db.onlinewebfonts.com/c/92ff8a15048d7347e0fae46d6386f338?family=DB+HelvethaicaMon+X+Cond"
        rel="stylesheet"
      ></link> */}
      <div className="div-logo">
        <img className="sum-logo" src="./img/logo.png" alt="logo" />
      </div>
      <div className="div-queue">
        <h3 className="h3-queue">
          คิวปัจจุบัน {cusType}
          {currentQueue}
        </h3>
      </div>
      <div className="div-urqueue">
        <p className="p-ur">คิวของท่าน</p>
        <p className="p-urqueue">
          {cusType}
          {currentQueue + queueLeft}
        </p>
      </div>
      <div className="div-qcenter">
        <div className="div-qleft">
          <p className="p-qleft">คิวก่อนหน้า {queueLeft} คิว</p>
        </div>
      </div>
      <div>
        <p className="p-thanks">ขอบคุณสำหรับการใช้บริการ</p>
        <p className="p-please">กรุณารอการเรียกคิวเพื่อเข้าใช้บริการ</p>
        <p className="p-please">ภายในเวลาที่กำหนด</p>
      </div>
      <footer className="contrainer-contact">
        <div className="div-contact">
          <img className="img-contact" src="./img/phone.png" alt="phone" />
          <p className="p-contact">02-12345678</p>
        </div>
        <div className="div-contact">
          <img className="img-contact" src="./img/line.png" alt="line" />
          <p className="p-contact">@Shabubaru</p>
        </div>
        <div className="div-contact">
          <img
            className="img-contact"
            src="./img/facebook.png"
            alt="facebook"
          />
          <p className="p-contact">Shabu baru</p>
        </div>
      </footer>
    </>
  );
}
export default SummaryPage;
