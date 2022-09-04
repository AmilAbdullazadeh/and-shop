
import React,{useState} from "react";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";

export function Categorys() {
    const [value, setvalue] = useState("");

    const handleOnchange = () => {
      setvalue(value);
    };
    const Optioncategorys = [
      {
        value: "category-1",
        label: "Technology",
      },
      {
        value: "category-2",
        label: "Travel",
      },
      {
        value: "category-3",
        label: "Food",
      },
      {
        value: "category-4",
        label: "Fashion",
      },
    ];
    return (
      <MultiSelect
        name="beast"
        id="select-beasts"
        onChange={handleOnchange}
        options={Optioncategorys}
        singleSelect="true"
      />
    );
  }