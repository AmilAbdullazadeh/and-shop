import React,{useState} from "react";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
//Country
export function Country() {
  const optinsingleselect = [
    {
      value: "Group-1",
      label: "Select Country",
    },
    {
      value: "Group-2",
      label: "Brazil",
    },
    {
      value: "Group-3",
      label: "Czech Republic",
    },
    {
      value: "Group-4",
      label: "Germany",
    },
    {
      value: "Group-5",
      label: "pl Poland",
    },
  ];
   const [value, setvalue] = useState("");

   const handleOnchange = () => {
     setvalue(value);
   };
  return (
    <MultiSelect
      className="farm"
      displayValue="key"
      id="optinsingleselect"
      onChange={handleOnchange}
       placeholder="--Select--"
      singleSelect="true"
      options={optinsingleselect}
    />
  );
}

//Selectyear
export function Selectyear() {
   const [value, setvalue] = useState("");

   const handleOnchange = () => {
     setvalue(value);
   };
  const optionselectyear = [
    {
      value: "Group-1",
      label: "Select Year",
    },
    {
      value: "Group-2",
      label: "2021",
    },
    {
      value: "Group-3",
      label: "2020",
    },
    {
      value: "Group-4",
      label: "2019",
    },
    {
      value: "Group-5",
      label: "2018",
    },
    {
      value: "Group-6",
      label: "2017",
    },
    {
      value: "Group-7",
      label: "2016",
    },
    {
      value: "Group-8",
      label: "2015",
    },
    {
      value: "Group-9",
      label: "2014",
    },
    {
      value: "Group-10",
      label: "2013",
    },
    {
      value: "Group-11",
      label: "2012",
    },
    {
      value: "Group-12",
      label: "2011",
    },
  ];
  return (
    <MultiSelect
      className="farms"
      displayValue="key"
      id="optionselectyear"
      onChange={handleOnchange}
       placeholder="--Select--"
      singleSelect="true"
      options={optionselectyear}
    />
  );
}

//Selectdate
export function Selectdate() {
   const [value, setvalue] = useState("");

   const handleOnchange = () => {
     setvalue(value);
   };
  const optionselectdate = [
    {
      value: "Group-1",
      label: "Select Day",
    },
    {
      value: "Group-2",
      label: "1",
    },
    {
      value: "Group-3",
      label: "2",
    },
    {
      value: "Group-4",
      label: "3",
    },
    {
      value: "Group-5",
      label: "4",
    },
    {
      value: "Group-6",
      label: "5",
    },
    {
      value: "Group-7",
      label: "6",
    },
    {
      value: "Group-8",
      label: "7",
    },
    {
      value: "Group-9",
      label: "8",
    },
    {
      value: "Group-10",
      label: "9",
    },
    {
      value: "Group-11",
      label: "10",
    },
    {
      value: "Group-12",
      label: "11",
    },
    {
      value: "Group-13",
      label: "12",
    },
    {
      value: "Group-14",
      label: "13",
    },
    {
      value: "Group-15",
      label: "14",
    },
    {
      value: "Group-16",
      label: "15",
    },
    {
      value: "Group-17",
      label: "16",
    },
    {
      value: "Group-18",
      label: "17",
    },
    {
      value: "Group-19",
      label: "18",
    },
    {
      value: "Group-20",
      label: "19",
    },
    {
      value: "Group-21",
      label: "20",
    },
    {
      value: "Group-22",
      label: "21",
    },
    {
      value: "Group-23",
      label: "22",
    },
    {
      value: "Group-24",
      label: "23",
    },
    {
      value: "Group-25",
      label: "24",
    },
    {
      value: "Group-26",
      label: "25",
    },
    {
      value: "Group-27",
      label: "26",
    },
    {
      value: "Group-28",
      label: "27",
    },
    {
      value: "Group-29",
      label: "28",
    },
    {
      value: "Group-30",
      label: "29",
    },
    {
      value: "Group-31",
      label: "30",
    },
  ];
  return (
    <MultiSelect
      className="farms mb-1"
      displayValue="key"
      id="optionselectdate"
      singleSelect="true"
      onChange={handleOnchange}
       placeholder="--Select--"
      options={optionselectdate}
    />
  );
}
//Dateofbirth
export function Dateofbirth() {
   const [value, setvalue] = useState("");

   const handleOnchange = () => {
     setvalue(value);
   };
  const optionDateofbirth = [
    {
      value: "Group-1",
      label: "Select Month",
    },
    {
      value: "Group-2",
      label: "January",
    },
    {
      value: "Group-3",
      label: "February",
    },
    {
      value: "Group-4",
      label: "March",
    },
    {
      value: "Group-5",
      label: "April",
    },
    {
      value: "Group-6",
      label: "May",
    },
    {
      value: "Group-7",
      label: "June",
    },
    {
      value: "Group-8",
      label: "July",
    },
    {
      value: "Group-9",
      label: "August",
    },
    {
      value: "Group-10",
      label: "September",
    },
    {
      value: "Group-11",
      label: "October",
    },
    {
      value: "Group-12",
      label: "November",
    },
    {
      value: "Group-13",
      label: "December",
    },
  ];
  return (
    <MultiSelect
      className="farms mb-1"
      displayValue="key"
      id="optionDateofbirth"
      onChange={handleOnchange}
       placeholder="--Select--"
      singleSelect="true"
      options={optionDateofbirth}
    />
  );
}
//InputSelect
export function InputSelect(){
   const [value, setvalue] = useState("");

   const handleOnchange = () => {
     setvalue(value);
   };
  const optioninputselect = [
    {
      value: "Group-1",
      label: "Select",
    },
    {
      value: "Group-2",
      label: "Apple",
    },
    {
      value: "Group-3",
      label: "Orange",
    },
    {
      value: "Group-4",
      label: "Mango",
    },
    {
      value: "Group-5",
      label: "Grapes",
    },
    {
      value: "Group-6",
      label: "Banana",
    },

   
  ];
  return (
    <MultiSelect
      className=" select2"
      displayValue="key"
      id="Inputselectoption"
      onChange={handleOnchange}
       placeholder="--Select--"
      singleSelect="true"
      options={optioninputselect}
    />
  );
}
//BillingInformationCounrty
export function BillingInformationCounrty() {
   const [value, setvalue] = useState("");

   const handleOnchange = () => {
     setvalue(value);
   };
  const optionCounrty = [
    {
      value: "Group-1",
      label: "Select Country",
    },
    {
      value: "Group-2",
      label: "Germany",
    },
    {
      value: "Group-3",
      label: "Canada",
    },
    {
      value: "Group-4",
      label: "Usa",
    },
    {
      value: "Group-5",
      label: "India",
    },
    {
      value: "Group-6",
      label: "Uk",
    },
  ];
  return (
    <MultiSelect
      className="farm"
      displayValue="key"
      id="optionCounrty"
      onChange={handleOnchange}
       placeholder="--Select--"
      singleSelect="true"
      options={optionCounrty}
    />
  );
}
// GroupOptionMutipleSelect1
export function GroupOptionMutipleSelect1() {
   const [value, setvalue] = useState("");

   const handleOnchange = () => {
     setvalue(value);
   };
  const optionCounrty = [
    {
      value: "Group-1",
      label: "January",
    },
    {
      value: "Group-2",
      label: "February",
    },
    {
      value: "Group-3",
      label: "March",
    },
    {
      value: "Group-4",
      label: "April",
    },
    {
      value: "Group-5",
      label: "May",
    },
    {
      value: "Group-6",
      label: "June",
    },
       {value: "Group-7", label: "August",},
      {value: "Group-8", label: "September",},
      {value: "Group-9", label: "October",},
        {value: "Group-10", label: "November",},
{value: "Group-11", label: "December",},

  ];
  return (
    <MultiSelect
      className="farm"
      displayValue="key"
      id="optionCounrty"
      onChange={handleOnchange}
      singleSelect="true"
      options={optionCounrty}
    />
  );
}
export function CustomSelectIcon() {
   const [value, setvalue] = useState("");

   const handleOnchange = () => {
     setvalue(value);
   };
  const optionCounrty = [
    {
      value: "Group-1",
      label: "January",
      disabled:"disabled"
    },
    {
      value: "Group-2",
      label: "February",
    },
    {
      value: "Group-3",
      label: "March",
      disabled:"disabled"
    },
    {
      value: "Group-4",
      label: "April",
    },
    {
      value: "Group-5",
      label: "May",
    },
    {
      value: "Group-6",
      label: "June",
    },
       {value: "Group-7", label: "August",},
      {value: "Group-8", label: "September",},
      {value: "Group-9", label: "October",},
        {value: "Group-10", label: "November",},
{value: "Group-11", label: "December",},

  ];
  return (
    <MultiSelect
      className="farm"
      displayValue="key"
      id="optionCounrty"
      onChange={handleOnchange}
      placeholder="January, March,"
      options={optionCounrty}
    />
  );
}
export function AnimatedMulti() {
  const options=[
    { value: "Mountain Time Zone", label: "Mountain Time Zone" },
    { value: "Wyoming", label: "Wyoming" },
    { value: "Utah", label: "Utah" },
    { value: "Montana", label: "Montana" },
    { value: "Colorado", label: "Colorado" },
    { value: "Wyoming", label: "Wyoming" },
    
  ];
   const [selected, setSelected] = useState([]);
  return (
    <MultiSelect
    value={selected}
        onChange={setSelected}
        labelledBy="Select"
        disableSearch="true"
      options={options}
      shouldToggleOnHover="true"
 />
  );
}
//AnimatedMulti1
export function AnimatedMulti1() {
   const options=[
    { value: "Mountain Time Zone", label: "Mountain Time Zone" },
    { value: "Wyoming", label: "Wyoming" },
    { value: "Utah", label: "Utah" },
    { value: "Montana", label: "Montana" },
    { value: "Colorado", label: "Colorado" },
    { value: "Wyoming", label: "Wyoming" },
    
  ];
   const [selected, setSelected] = useState([]);
  return (
    <MultiSelect
    value={selected}
        onChange={setSelected}
        labelledBy="Select"
      options={options}
      shouldToggleOnHover="true"
 />
  );
}
//AnimatedMulti2

export function AnimatedMulti2() {
  const options=[
    { value: "Firefox", label: "Firefox" },
    { value: "Internet Explorer", label: "Internet Explorer" },
    { value: "Opera", label: "Opera" },
    { value: "Safari", label: "Safari" },
    { value: "Chrome selected", label: "Chrome selected" },
    { value: "Opera", label: "Opera" },
    
  ];
   const [selected, setSelected] = useState([]);
  return (
    <MultiSelect
    value={selected}
        onChange={setSelected}
        labelledBy="Select"
            disableSearch="true"
      options={options}
    
    />
  );
}
 //SearchSelect1
export const SearchSelect1 = () => {
  const options=[
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "volkswagen", label: "volkswagen" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "hyundai", label: "hyundai" },
  { value: "fiat", label: "fiat" },]
   const [selected, setSelected] = useState([]);
  return (
    <MultiSelect
    value={selected}
        onChange={setSelected}
        labelledBy="Select"
      options={options}
    />
  );
};
// //Singleselect12
export const Singleselect12 = () => {
  const objectArray = [
    { label: "Volvo", value: "Group 1" },
    { label: "BMW", value: "Group 2" },
    { label: "Audi", value: "Group 3" },
    { label: "Saab", value: "Group 4" },
    { label: "Mercedes", value: "Group 5" },
    { label: "porche", value: "Group 6" },
    { label: "Tata", value: "Group 7" },
  ];
    const [selected, setSelected] = useState([]);
  return (
    <div>
      <MultiSelect value={selected}
        onChange={setSelected}
        labelledBy="Select"  options={objectArray} singleSelect="true" />
    </div>
  );
};