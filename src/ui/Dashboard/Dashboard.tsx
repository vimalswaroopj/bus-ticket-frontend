import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { GLOBAL_CONSTANTS } from "../../constants/constants";
export const Dashboard = () => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData") ?? "[]")
  );
  const updateData = (user: any, toDelete?: boolean) => {
    if (toDelete) {
      const newData: any = [];
      userData.map((u: any) => {
        if (u?.id !== user?.id) {
          newData.push(u);
        }
      });
      localStorage.setItem("userData", JSON.stringify(newData));
      setUserData(newData);
    } else {
      userData.map((u: any) => {
        if (u?.id === user?.id) {
          u.name = user.name;
          u.email = user.email;
          u.seatNumber = user.seatNumber;
          u.DOB = user.DOB;
        }
        return u;
      });
      localStorage.setItem("userData", JSON.stringify(userData));
      setUserData(userData);
    }
  };
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{GLOBAL_CONSTANTS.NAME}</TableCell>
            <TableCell>{GLOBAL_CONSTANTS.EMAIL}</TableCell>
            <TableCell>{GLOBAL_CONSTANTS.SEAT_NO}</TableCell>
            <TableCell>{GLOBAL_CONSTANTS.DOB}</TableCell>
            <TableCell>{GLOBAL_CONSTANTS.ACTION}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData?.map((user: any) => {
            return <CustomTableRow user={user} updateData={updateData} />;
          })}
        </TableBody>
      </Table>
    </>
  );
};

const CustomTableRow = (props: {
  user: any;
  updateData: (user: any, toDelete?: true) => void;
}): JSX.Element => {
  const { user, updateData } = props;

  const [forEditing, setEditing] = useState(false);
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [seatNo, setSeatNo] = useState(user?.seatNumber);
  const [DOB, setDOB] = useState(user?.DOB);
  if (!user) {
    return <></>;
  }
  return (
    <>
      {!forEditing ? (
        <TableRow id={user.id}>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.seatNumber}</TableCell>
          <TableCell>{user.DOB}</TableCell>
          <TableCell>
            <Button
              onClick={() => {
                setEditing(true);
              }}
            >
              {GLOBAL_CONSTANTS.EDIT}
            </Button>
            <Button
              onClick={() => {
                updateData(
                  {
                    id: user.id,
                  },
                  true
                );
              }}
            >
              {GLOBAL_CONSTANTS.DELETE}
            </Button>
          </TableCell>
        </TableRow>
      ) : (
        <TableRow>
          <TableCell>
            <TextField
              defaultValue={user.name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </TableCell>
          <TableCell>
            <TextField
              defaultValue={user.email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </TableCell>
          <TableCell>{user.seatNumber}</TableCell>
          <TableCell>
            <TextField
              defaultValue={user.DOB}
              onChange={(e) => {
                setDOB(e.target.value);
              }}
            />
          </TableCell>
          <TableCell>
            <Button
              onClick={() => {
                setEditing(false);
              }}
            >
              {GLOBAL_CONSTANTS.CANCEL}
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                updateData({
                  id: user?.id,
                  name,
                  email,
                  seatNumber: seatNo,
                  DOB,
                });
                setEditing(false);
              }}
            >
              {GLOBAL_CONSTANTS.SAVE}
            </Button>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};
