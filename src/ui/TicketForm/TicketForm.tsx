import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";
import { GLOBAL_CONSTANTS } from "../../constants/constants";

export const TicketForm = (props: { selectedSeatNo: any }): JSX.Element => {
  const { selectedSeatNo } = props;
  const [forEditing, setEditing] = useState(true);
  const [id] = useState(uuidv4());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [seatNo, setSeatNo] = useState(selectedSeatNo);
  const [DOB, setDOB] = useState("");

  const resetState = () => {
    setEditing(false);
    setName("");
    setEmail("");
    setSeatNo("");
    setDOB("");
  };

  useEffect(() => {
    return () => {
      resetState();
    };
  }, []);

  const onCancelClick = () => {
    setEditing(false);
    resetState();
  };

  const onSaveClick = () => {
    const data = JSON.parse(localStorage.getItem("userData") ?? "[]");
    data.push({
      id,
      name,
      email,
      seatNumber: selectedSeatNo,
      DOB,
    });
    localStorage.setItem("userData", JSON.stringify(data));
    setEditing(false);
    resetState();
    window.location.href = "/dashboard";
    localStorage.setItem("navItem", "2");
  };

  return (
    <div className={"FormContainer"}>
      <p className={"SeatNo"}>
        <strong>{GLOBAL_CONSTANTS.SEAT_NO}: </strong>
        {selectedSeatNo}
      </p>
      <TextField
        placeholder={"Name"}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <TextField
        placeholder={"Email"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextField
        placeholder={"DOB"}
        value={DOB}
        onChange={(e) => {
          setDOB(e.target.value);
        }}
      />
      <div className={"ButtonContainer"}>
        <Button
          variant={"contained"}
          className={"CancelButton"}
          onClick={onCancelClick}
        >
          {GLOBAL_CONSTANTS.CANCEL}
        </Button>
        <Button
          variant={"contained"}
          className={"SaveButton"}
          onClick={onSaveClick}
        >
          {GLOBAL_CONSTANTS.SAVE}
        </Button>
      </div>
    </div>
  );
};
