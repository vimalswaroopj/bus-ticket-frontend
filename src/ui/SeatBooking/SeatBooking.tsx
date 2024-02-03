import { useMemo, useState } from "react";
import { TicketForm } from "../TicketForm/TicketForm";
import AirlineSeatLegroomExtraIcon from "@mui/icons-material/AirlineSeatLegroomExtra";
import "./styles.css";
import { Seat } from "../Seat/Seat";
import { GLOBAL_CONSTANTS } from "../../constants/constants";

export const Seatbooking = () => {
  const seats: any[] = Array(40).fill(AirlineSeatLegroomExtraIcon);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData") ?? "[]")
  );

  const [selectedSeat, setselectedSeat] = useState(0);
  const onSeatSelected = (ind: number) => {
    console.log("select");
    setselectedSeat(ind + 1);
  };
  const seat = useMemo(
    () => (ind: any) => {
      if (userData?.filter((u: any) => u.seatNumber == ind + 1)?.length > 0) {
        return (
          <div className={"SeatContainer"}>
            <Seat />
          </div>
        );
      } else {
        return (
          <div
            className={"BookedSeatContainer"}
            style={{
              background: ind + 1 === selectedSeat ? "blue" : "#FFFFFF",
            }}
            onClick={() => {
              onSeatSelected(ind);
            }}
          >
            <Seat />
          </div>
        );
      }
    },
    [userData, selectedSeat]
  );

  return (
    <div className={"SeatBookingContainer"}>
      <div>
        <p className={"DeckText"}>{GLOBAL_CONSTANTS.LOWER_DECK}</p>

        <div className={"SeatRow"}>
          {seats?.map((Icon, ind) => {
            if (ind < 10) {
              return seat(ind);
            }
          })}
        </div>

        <div className={"SeatRow"}>
          {seats?.map((Icon, ind) => {
            if (ind > 9 && ind < 20) {
              return seat(ind);
            }
          })}
        </div>
        <p className={"DeckText"}>{GLOBAL_CONSTANTS.UPPER_DECK}</p>

        <div className={"SeatRow"}>
          {seats?.map((Icon, ind) => {
            if (ind > 19 && ind < 30) {
              return seat(ind);
            }
          })}
        </div>

        <div className={"SeatRow"}>
          {seats?.map((Icon, ind) => {
            if (ind > 29 && ind < 40) {
              return seat(ind);
            }
          })}
        </div>
      </div>
      {selectedSeat > 0 && <TicketForm selectedSeatNo={selectedSeat} />}
    </div>
  );
};
