import { memo } from "react";
import { useEffect, useRef, useState, useMemo } from "react";
import { IonButton, IonIcon, IonSpinner } from "@ionic/react";
import Countdown from "react-countdown";
import "./AlertSosComponent.css";
import useStore from "../store";

interface AlertProps {
  alert: () => void;
}

const AlertSosComponent: React.FC<AlertProps> = ({ alert }) => {
  const countdown = 10 * 1000;
  const [timer, setTimer] = useState(countdown);
  const { showCountdown, setShowCountdown, speed, setSpeed } = useStore();

  //@ts-ignore
 
        style={{
          position: "absolute",
          fontSize: "4.8em",
          color: "rgb(90, 90, 90)",
          transform: "translate(50%, -30%)",
          fontFamily: "serif",
          textAlign: "center",
          margin: "0",
          top: "50%",
          right: "50%",
        }}
      >
        {showCountdown ? (
          <div>
            <Countdown
              date={Date.now() + timer}
              renderer={renderer}
              onComplete={() => {
                //send messages
                console.log(">>>sending message alerts.....!");
                alert();
                setTimeout(() => {
                  console.log(">>>DONE.....!");
                  setShowCountdown(false);
                  setSpeed("100");
                }, 4000);
              }}
            />
          </div>
        ) : (
          <span>SOS</span>
        )}
      </div>
    </div>
  );
};

export default memo(AlertSosComponent);
