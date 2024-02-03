import { MenuItem, Select } from "@mui/material";
import { useState } from "react";
import "./styles.css";
import { GLOBAL_CONSTANTS } from "../../constants/constants";

export const NavigationBar = () => {
  const [option, setOption] = useState(localStorage.getItem("navItem") ?? 1);
  const onSelect = (e: any) => {
    setOption(e.target.value);
    localStorage.setItem("navItem", e.target.value);
  };
  return (
    <div className={"NavigationContainer"}>
      <Select value={option} onChange={onSelect}>
        <MenuItem value={"1"}>
          <a href="/bus-ticket-frontend">{GLOBAL_CONSTANTS.RESERVATION}</a>
        </MenuItem>
        <MenuItem value={"2"}>
          <a href="/bus-ticket-frontend/dashboard">
            {GLOBAL_CONSTANTS.DASHBOARD}
          </a>
        </MenuItem>
      </Select>
    </div>
  );
};
