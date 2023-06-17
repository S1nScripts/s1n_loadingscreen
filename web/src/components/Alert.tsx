import check from "../images/check.png";

import { useEffect, useState } from "react";

import failed from "../images/failed.png";
function Alert(props: any): JSX.Element {
  const [message, setMessage] = useState<any | null>("das");
  const [alertType, setAlertType] = useState<any | null>("");

  useEffect(() => {
    setMessage(props.alertContent);
    setAlertType(props.alertType);
  }, [props]);
  return (
    <div className="Alert">
      {alertType == "fail" ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              height: "45px",
              width: "12px",
              position: "absolute",
              left: "35px",
            }}
            src={failed}
          ></img>
          <div>
            <h1
              style={{
                color: "rgba(252, 60, 55, 1)",
                textTransform: "uppercase",
                position: "absolute",
                left: "75px",
                top: "0px",
                fontSize: "18px",
              }}
            >
              Failed!
            </h1>
            <p
              style={{
                fontWeight: "100",
                fontSize: "10px",
                width: "80%",
                position: "absolute",
                left: "75px",
                top: "35px",
              }}
            >
              {message}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}

      {alertType == "success" ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              height: "45px",
              width: "45px",
              position: "absolute",
              left: "15px",
            }}
            src={check}
          ></img>
          <div>
            <h1
              style={{
                color: "rgba(85, 253, 172, 1)",
                textTransform: "uppercase",
                position: "absolute",
                left: "75px",
                top: "0px",
                fontSize: "18px",
              }}
            >
              successful!
            </h1>
            <p
              style={{
                fontWeight: "100",
                fontSize: "10px",
                width: "80%",
                position: "absolute",
                left: "75px",
                top: "32px",
              }}
            >
              {message}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default Alert;
