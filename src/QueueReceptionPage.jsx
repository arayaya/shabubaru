import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./assets/css/style.css";
import { setcusType, setqueueLeft, setcurrentQueue } from "./QueueSlice";

function QueueReceptionPage() {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const date = new Date();
  const [count, setCount] = useState(1);
  const [cusType, setcusT] = useState("");
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [notiName, setnotiName] = useState("");
  const [notiNumber, setnotiNumber] = useState("");
  const queueLeftA = 12;
  const queueLeftB = 5;
  const currentQueueA = 111;
  const currentQueueB = 47;
  const [queueL, setqueueL] = useState();
  const [currentQ, setcurrentQ] = useState("");

  const timeZone = {
    day: "numeric",
    month: "long",
    timeZone: "Asia/Bangkok",
    localMatcher: "best fit",
  };
  const formattedDate = date.toLocaleDateString("th-TH", timeZone);

  const increase = () => {
    setCount((c) => c + 1);
  };

  const decrease = () => {
    if (count > 1) {
      setCount((c) => c - 1);
    }
  };

  const handleInputname = (event) => {
    setname(event.target.value);
    setnotiName("");
  };

  const handleInputnumber = (event) => {
    setnumber(event.target.value);
    setnotiNumber("");
  };

  const handleSubmit = () => {
    const nameRegex = /^[A-Za-zก-ฮะ-์ ]+$/;
    const numberRegex = /^[0-9]+$/;
    let valid = true;

    if (!name.trim()) {
      setnotiName("กรุณาป้อนชื่อ");
      valid = false;
    } else if (!nameRegex.test(name)) {
      setnotiName("กรุณาป้อนเฉพาะตัวอักษรเท่านั้น");
      valid = false;
    } else {
      setnotiName("");
    }

    if (!number.trim()) {
      setnotiNumber("กรุณาป้อนหมายเลขโทรศัพท์");
      valid = false;
    } else if (!numberRegex.test(number)) {
      setnotiNumber("กรุณาป้อนเฉพาะตัวเลขเท่านั้น");
      valid = false;
    } else if (number.length !== 10) {
      setnotiNumber("กรุณาป้อนหมายเลขโทรศัพท์ 10 หลัก");
      valid = false;
    } else {
      setnotiNumber("");
    }

    if (valid) {
      console.log("PASS");
      dispath(setcusType(cusType));
      dispath(setqueueLeft(queueL));
      dispath(setcurrentQueue(currentQ));
      navigate("/summary");
    }
  };

  useEffect(() => {
    if (count < 5) {
      setcusT("A");
      setqueueL(queueLeftA);
      setcurrentQ(currentQueueA);
    } else if (count >= 5) {
      setcusT("B");
      setqueueL(queueLeftB);
      setcurrentQ(currentQueueB);
    }
  }, [count]);

  return (
    <div>
      <div className="container">
        <div className="left-section">
          <img className="logo" src="./img/logo.png" alt="logo" />
          <div className="div-loname">
            <p className="logo-name">SHABU BARU mini</p>
            <p className="detail">The Mall Lifestore Ngamwongwan</p>
          </div>
        </div>
        <div className="right-section">
          <div className="queue">
            <p className="p-queue">คิวก่อนหน้า {queueL} คิว</p>
            <div className="date">
              <p className="p-date">{formattedDate}</p>
              <img
                className="img-calendar"
                src="./img/calendar.png"
                alt="calendar"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="div-center">
          <div className="tape-queue">
            <img className="tape" src="./img/tape.png" alt="tape" />
            <p className="c-queue">คิวปัจจุบัน</p>
          </div>
          <div className="button-center">
            <div className="button-typeA">
              <img
                className="img-people"
                src="./img/people1.png"
                alt="people1"
              />
              <div className="div-type">
                <h2 className="h2-type">1 - 4 ท่าน</h2>
                <p className="p-type">
                  A{currentQueueA}({queueLeftA})
                </p>
              </div>
            </div>
            <div className="button-typeB">
              <img
                className="img-people"
                src="./img/people2.png"
                alt="people2"
              />
              <div className="div-type">
                <h2 className="h2-type">มากกว่า 5</h2>
                <p className="p-type">
                  B{currentQueueB}({queueLeftB})
                </p>
              </div>
            </div>
          </div>
          <div className="div-user">
            <div className="tape-queue">
              <img className="tape" src="./img/tape.png" alt="tape" />
              <p className="user">จำนวนลูกค้า</p>
            </div>
            <div className="div-input">
              <div className="div-btt">
                <button className="btt-minus" onClick={decrease}>
                  -
                </button>
              </div>
              <input
                className="input-user"
                value={count}
                onChange={(e) => setCount(parseInt(e.target.value))}
              />
              <div className="div-btt">
                <button className="btt-plus" onClick={increase}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-form">
          <div className="container-inform">
            <div className="div-name">
              <p className="p-name">ชื่อลูกค้า</p>
              <input
                className="input-name"
                type="text"
                onChange={handleInputname}
              />
              <p className="noti">{notiName}</p>
            </div>
            <div className="div-phone">
              <p className="p-phone">เบอร์โทร</p>
              <input
                className="input-phone"
                type="text"
                onChange={handleInputnumber}
              />
              <p className="noti">{notiNumber}</p>
            </div>
          </div>
          <div className="div-submit">
            <button className="btt-submit" onClick={handleSubmit}>
              รับบัตรคิว
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QueueReceptionPage;
