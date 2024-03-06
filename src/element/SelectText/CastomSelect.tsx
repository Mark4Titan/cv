"use client";
// CastomSelect.tsx

// imports
import { MenuItem, FormControl, InputLabel, Button, Box } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState, useEffect } from "react";
import { SxProps, Theme } from "@mui/material/styles";
import Icons from "../../helper/IcoPack";

// settings
export interface itemsArr {
  label: string;
  itemId: string;
  avatar: string;
}

export interface SelectCB extends itemsArr {
  name: string;
  id: string;
}

interface PCastomSelect {
  sx: SxProps<Theme>;
  activClear: boolean;
  disabled: boolean;
  arrValue: itemsArr[];
  value: string;
  name: string;
  lable: string;
  id: string;
  validFlag: boolean;
  ico: React.ReactNode;
  CastomSelectCb: (selectCB: SelectCB) => void;
}

const CastomSelect = ({
  sx,
  ico,
  activClear = false,
  disabled = false,
  arrValue = [],
  value = "",
  name = "",
  id = "",
  lable="",
  validFlag = true,
  CastomSelectCb = () => {},
}: Partial<PCastomSelect>) => {
  //activity
  const [activity, setActivity] = useState(() => {
    const valueLength = value.length;
    return {
      val: valueLength > 0 ? value : "",
      clear: valueLength > 0 ? true : false,
    };
  });

  useEffect(() => {
    if (value.length === 0) {
      setActivity({
        val: "",
        clear: false,
      });
    }
  }, [value.length]);

  const handleChange = (e: SelectChangeEvent) => {
    const itemCode = e.target.value;
    setActivity({ val: itemCode, clear: activClear });

    const item = arrValue.find((el) => el.itemId === itemCode);

    if (item) {
      CastomSelectCb({
        id,
        name,
        label: item.label,
        itemId: item.itemId,
        avatar: item.avatar,
      });
    }
  };

  const handleClear = () => {
    CastomSelectCb({
      id:"",
      name:"",
      label: "",
      itemId: "",
      avatar: "",
    });
    setActivity({ val: "", clear: false });
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        "& .MuiInputBase-formControl": {
          marginTop: name ? "16px" : 0,
        },
        ...sx,
      }}>
      <FormControl fullWidth>
        <InputLabel variant='standard' sx={{ width: "100%" }}>
          {lable} {ico}
        </InputLabel>
        <Select
          sx={{
            "& .MuiSvgIcon-fontSizeMedium": {
              display: disabled ? "none" : "auto",
            },
            "& div": { margin: 0 },
          }}
          name={name}
          onChange={handleChange}
          disabled={disabled}
          value={activity.val}
          error={!validFlag && activity.val.length === 0}
          variant='standard'>
          {arrValue.map((option) => (
            <MenuItem key={option.itemId} value={option.itemId}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {activity.clear && activClear && (
        <Button
          onClick={handleClear}
          sx={{
            position: "absolute",
            right: 25,
            top: 15,
            minWidth: 0,
            borderRadius: 1,
          }}>
          <Icons ico='Clear' />
        </Button>
      )}
    </Box>
  );
};

export default CastomSelect;
