import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Select from "react-select";
import { GithubPicker } from "react-color";
import constate from "constate";
import makeAnimated from "react-select/animated";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import Grid from "@mui/material/Grid";
import Dropzone from "react-dropzone-uploader";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import InputColor from "react-input-color";
import Compact from "@uiw/react-color-compact";
import { MultiSelect } from "react-multi-select-component";
import Creatable from "react-select/creatable";
import DualListBox from "react-dual-listbox";
// //ColorPicker
export function ColorPicker() {
  const [initial] = useState("#6259ca");

  return (
    <div className="colorpickers">
      <InputColor initialValue={initial} onChange={(setColor) => setColor} />
    </div>
  );
}
// //ColorPickers
export function ColorPickers() {
  const [hex, setHex] = useState("white");
  return (
    <Compact
      color={hex}
      onChange={(color) => {
        setHex(color.hex);
      }}
    />
  );
}

// LocalizedTimePicker
export function LocalizedTimePicker() {
  const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        ampmInClock
        openTo="hours"
        views={["hours", "minutes", "seconds"]}
        inputFormat="HH:mm:ss"
        mask="__:__"
        label="Hours and Minutes and seconds"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            className="form-control"
            placeholder="Set time"
            type="text"
          />
        )}
      />
    </LocalizationProvider>
  );
}
// //BasicTimePicker
export function BasicTimePicker() {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label="Set Time"
        placeholder="Set time"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            className="form-control"
            id="tp1"
            placeholder="Set time"
            type="text"
          />
        )}
      />
    </LocalizationProvider>
  );
}
// //ResponsiveTimePickers
export function ResponsiveTimePickers() {
  const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        ampmInClock
        views={["minutes", "seconds"]}
        inputFormat="mm:ss"
        mask="__:__"
        label="Minutes and seconds"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            className="form-control"
            placeholder="Set time"
            type="text"
          />
        )}
      />
    </LocalizationProvider>
  );
}
//Dropimg
export function Dropimg() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })} className="drops">
        <input {...getInputProps()} />
        <p className="alitext">
          Drag 'n' drop some files here, or click to select files
        </p>
        <h4 className="alitext">Files</h4>
        <ul>{files}</ul>
      </div>
    </section>
  );
}
// //OuterDropzone
export function OuterDropzone() {
  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
  };

  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  return (
    <Dropzone
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      maxFiles={3}
      inputContent="Drop Files"
      inputWithFilesContent={(files) => `${3 - files.length} more`}
      submitButtonDisabled={(files) => files.length < 3}
    />
  );
}
//Dropimg2
export function Dropimg2() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })} className="drops">
        <input {...getInputProps()} disabled="disabled" />
        <h4 className="alitext">Disabled</h4>
        <ul>{files}</ul>
      </div>
    </section>
  );
}
//Dropimg1
export function Dropimg1() {
  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };

  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
  };

  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };
  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
    />
  );
}
//BasicMutipleSelect
export const BasicMutipleSelect = () => {
    const [selected, setSelected] = useState([]);
    const options=[
    { value: "Audi", label: "Audi" },
    { value: "BMW", label: "BMW" },
    { value: "volkswagen", label: "volkswagen" },
    { value: "Aston Martin", label: "Aston Martin" },
    { value: "mitsubishi", label: "mitsubishi" },
    { value: "hyundai", label: "hyundai" },
    { value: "fiat", label: "fiat" },
  ];
  return (

    <MultiSelect
     value={selected}
        onChange={setSelected}
        labelledBy="Select"
        disableSearch="true"
      options={options}
       showCheckbox="false"
    />
  );
};
//DisabledMutipleSelect
export const DisabledMutipleSelect = () => {
  const optionsMultiSelect1 = [
    { key: "First", cat: "Group 1" },
    { key: "Second", cat: "Group 1" },
    { key: "Third", cat: "Group 1" },
    { key: "Fourth", cat: "Group 2" },
  ];
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <MultiSelect
        options={optionsMultiSelect1}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        disabled="true"
      />
    </div>
  );
};
//CustomSelectIcon
export function CustomSelectIcon() {
  return (
   <MultiSelect
      customCloseIcon={
        <>
          <i className="fa fa-clock-o tx-16 lh-0 op-6"></i>
        </>
      }
      onKeyPressFn={function noRefCheck() {}}
      onRemove={function noRefCheck() {}}
      onSearch={function noRefCheck() {}}
      onSelect={function noRefCheck() {}}
      options={[
        {
          cat: "Group 1",
          key: "January",
        },
        {
          cat: "Group 1",
          key: "February",
        },
        {
          cat: "Group 1",
          key: "March",
        },
        {
          cat: "Group 2",
          key: "April",
        },
        {
          cat: "Group 2",
          key: "May",
        },
        {
          cat: "Group 2",
          key: "June",
        },
        {
          cat: "Group 2",
          key: "July",
        },
        {
          cat: "Group 2",
          key: "August",
        },
      ]}
      selectedValues={[
        {
          cat: "Group 1",
          key: "January",
        },
        {
          cat: "Group 1",
          key: "February",
        },
      ]}
    />
  );
}
// //MultipleItems
export function MultipleItems() {
  const [selected, setSelected] = useState([]);
 const options=[
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4", disabled:"disabled"},
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9", disabled:"disabled"},
    { value: "10", label: "10" },
    { value: "11", label: "11" },
   { value: "12", label: "12", disabled:"disabled"},
  ]
  return (
    <MultiSelect
       options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        disableSearch="true"
    />
  );
}
//MultipleItemsWithGroupOption
export function MultipleItemsWithGroupOption() {
  const optionsGroupOptionMutipleSelect = [
    { value: "Audi", label: "Audi" },
    { value: "BMW", label: "BMW" },
    { value: "volkswagen", label: "volkswagen" },
    { value: "Aston Martin", label: "Aston Martin" },
    { value: "mitsubishi", label: "mitsubishi" },
    { value: "hyundai", label: "hyundai" },
    { value: "fiat", label: "fiat" },
  ];
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <MultiSelect
        options={optionsGroupOptionMutipleSelect}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        disableSearch="true"
      />
    </div>
  );
}
//GroupOptionMutipleSelect1
export function GroupOptionMutipleSelect1() {
  return (
    <MultiSelect
      isObject={false}
      onKeyPressFn={function noRefCheck() {}}
      onRemove={function noRefCheck() {}}
      onSearch={function noRefCheck() {}}
      onSelect={function noRefCheck() {}}
      options={[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]}
      showCheckbox
      selectedValues={["January", "March"]}
    />
  );
}
// Group-Option MutipleSelect
export function GroupOptionMutipleSelect() {
  const optionsGroupOptionMutipleSelect1 = [
    {
      value: "Month",
      label: "Month",
      options: [
        { value: "January", label: "January" },
        { value: "February", label: "February", isDisabled: "true" },
        { value: "March", label: "March" },
        { value: "April", label: "April" },
        { value: "May", label: "May" },
      ],
    },

    {
      value: "Brand",
      label: "Brand",
      options: [
        { value: "Audi", label: "Audi" },
        { value: "BMW", label: "BMW" },
        { value: "volkswagen", label: "volkswagen", isDisabled: "true" },
        { value: "Aston Martin", label: "Aston Martin" },
        { value: "mitsubishi", label: "mitsubishi" },
        { value: "hyundai", label: "hyundai", isDisabled: "true" },
        { value: "fiat", label: "fiat" },
      ],
    },
  ];
  function logChange(val) {
    console.log("Selected: " + JSON.stringify(val));
  }
  return (
    <div>
      <Select
        isMulti
        classNamePrefix="background"
        isFilterOption={true}
        isSearchable={false}
        isClearable={true}
        name="form-field-name"
        options={optionsGroupOptionMutipleSelect1}
        onChange={logChange}
      />
    </div>
  );
}
//Singleselectdis
export function Singleselectdis() {
  const optionsGroupOptionMutipleSelect = [
    {
      value: "Month",
      label: "Month",
      options: [
        { value: "January", label: "January" },
        { value: "February", label: "February", isDisabled: "true" },
        { value: "March", label: "March" },
        { value: "April", label: "April" },
        { value: "May", label: "May", isDisabled: "true" },
      ],
    },

    { value: "Brand", label: "Brand" },
    { value: "Audi", label: "Audi" },
    { value: "BMW", label: "BMW" },
    { value: "volkswagen", label: "volkswagen" },
    { value: "Aston Martin", label: "Aston Martin" },
    { value: "mitsubishi", label: "mitsubishi" },
    { value: "hyundai", label: "hyundai" },
    { value: "fiat", label: "fiat" },
  ];
  function logChange(val) {
    console.log("Selected: " + JSON.stringify(val));
  }

  return (
    <div>
      <Select
        classNamePrefix="background"
        name="form-field-name"
        options={optionsGroupOptionMutipleSelect}
        onChange={logChange}
      />
    </div>
  );
}
//Singleselect1
export function Singleselect1() {
  const objectArraysingle = [
    { value: "First", label: "Group 1" },
    { value: "Second", label: "Group 1" },
    { value: "Third", label: "Group 1" },
    { value: "Fourth", label: "Group 2" },
  ];
   const [selected, setSelected] = useState([]);
  return (
    <MultiSelect
    value={selected}
        onChange={setSelected}
        labelledBy="Select"
        disableSearch="true"
      options={objectArraysingle}/>
  );
}
//CustomStyle
export function CustomStyle() {
  const [selected, setSelected] = useState([]);
  const options=[
        {
          value: "Group1",
          label: "Brand",
        },
        {
          value: "Group1",
          label: "fiat",
        },
        {
          value: "Group1",
          label: "hyundai",
        },
        {
          value: "Group2",
          label: "Aston Martin",
        },
        {
          value: "Group2",
          label: "volkswagen",
        },
        {
          value: "Group2",
          label: "BMW",
        },
        {
          value: "Group2",
          label: "Audi",
        },
      ]
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
//Selectfilter
export function Selectfilter() {
  const optionsSelectfilter = [
    {
      label: "Group 1",
      options: [
        { label: "Group 1, option 1", value: "value_1" },
        { label: "Group 1, option 2", value: "value_2" },
      ],
    },
    { label: "A root option", value: "value_3" },
    { label: "Another root option", value: "value_4" },
  ];
  return (
    <Select
      isMulti
      classNamePrefix="background"
      options={optionsSelectfilter}
    />
  );
}
//DisablePreselected
export function DisablePreselected() {
    const [selected, setSelected] = useState([]);
   const  options=[
        {
          value: "Group 1",
          label: " Brand",
        },
        {
          value: "Group 1",
          label: "BMW",
        },
        {
          value: "Group 1",
          label: "volkswagen",
        },
        {
          value: "Group 2",
          label: "Audi",
        },
        {
          value: "Group 2",
          label: "hyundai",
        },
        {
          value: "Group 2",
          label: "fiat",
        },
        {
          value: "Group 2",
          label: "Tatat",
        },
      ]
  return (
    <MultiSelect
    value={selected}
        onChange={setSelected}
        labelledBy="Select"
        disableSearch="true"
      options={options}/>
  );
}

//TransferList1
function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}
export function TransferList1() {
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([0, 1, 2, 3]);
  const [right, setRight] = React.useState([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items) => intersection(checked, items).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customList = (title, items) => (
    <Card className="border">
      <CardHeader
        sx={{ px: 2, py: 1 }}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={
              numberOfChecked(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked(items) !== items.length &&
              numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{
              "aria-label": "all items selected",
            }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List
        sx={{
          width: 400,
          height: 230,
          bgcolor: "background.paper",
          overflow: "auto",
        }}
        dense
        component="div"
        role="list"
      >
        {items.map((value) => {
          const labelId = `transfer-list-all-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    "aria-labelledby": labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`List item ${value + 1}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>{customList("Choices", left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList("Chosen", right)}</Grid>
    </Grid>
  );
}

//AnimatedMultisingle
const animatedComponents = makeAnimated();
const Optionssingle = [
  { value: "Choose one", label: "Choose one (with optgroup)" },
  { value: "Mountain Time Zone", label: "Mountain Time Zone" },
  { value: "Mountain Time Zone", label: "Mountain Time Zone" },
  { value: "Colorado", label: "Idaho" },
  { value: "Montana<", label: "Montana" },
  { value: "Utah", label: "Utah" },
  { value: "Wyoming", label: "Wyoming" },
  { value: "Mountain Time Zone", label: "Mountain Time Zone" },
  { value: "Mountain Time Zone", label: "Mountain Time Zone" },
  { value: "Colorado", label: "Idaho" },
  { value: "Montana<", label: "Montana" },
  { value: "Utah", label: "Utah" },
  { value: "Wyoming", label: "Wyoming" },
  { value: "Mountain Time Zone", label: "Mountain Time Zone" },
  { value: "Mountain Time Zone", label: "Mountain Time Zone" },
  { value: "Colorado", label: "Idaho" },
  { value: "Montana<", label: "Montana" },
  { value: "Utah", label: "Utah" },
  { value: "Wyoming", label: "Wyoming" },
];
export function AnimatedMultisingle() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={Optionssingle}
    />
  );
}

// //OptgroupSupport
const optionOptgroupSupport = [
  { label: "Audi", value: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "volkswagen", label: "volkswagen" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "hyundai", label: "hyundai" },
  { value: "fiat", label: "fiat" },
];
const objectArray = [
  { value: "BMW", selected: "true", label: "BMW" },
  { value: "volkswagen", label: "volkswagen" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "hyundai", label: "hyundai" },
  { value: "fiat", label: "fiat" },
];
const groupedOptions = [
  {
    label: "BMW",
    options: objectArray,
  },
  {
    label: "volkswagen",
    options: optionOptgroupSupport,
  },
];
export const OptgroupSupport = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <Creatable
        classNamePrefix="background"
        display="value"
        options={groupedOptions}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};

 //MultipleSelect2
export const MultipleSelect2 = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  function onChange(value, event) {
    if (event.action === "select-option" && event.option.value === "*") {
      this.setState(this.options);
    } else if (
      event.action === "deselect-option" &&
      event.option.value === "*"
    ) {
      this.setState([]);
    } else if (event.action === "deselect-option") {
      this.setState(value.filter((o) => o.value !== "*"));
    } else if (value.length === this.options.length - 1) {
      this.setState(this.options);
    } else {
      this.setState(value);
    }
  }
  const optionsMultipleSelect2 = [
    { value: "Choose one", label: "Chuck Testa" },
    { value: "1", label: "Sage Cattabriga-Alosa" },
    { value: "3", label: "Nikola Tesla" },
    { value: "Cattabriga-Alosa", label: "Cattabriga-Alosa" },
    { value: "Sage Cattabriga-Alosa", label: "Sage Cattabriga-Alosa" },
    { value: "Nikola Alosa", label: "Nikola Alosa" },
    { value: "Cattabriga-Alosa", label: "Cattabriga-Alosa" },
  ];
  return (
    <ReactMultiSelectCheckboxes
      width="100%"
      options={[{ label: "All", value: "*" }, ...optionsMultipleSelect2]}
      placeholderButtonLabel="Select Here"
      value={selectedOptions}
      onChange={onChange}
      setState={setSelectedOptions}
    />
  );
};

// //SearchSelect13
const option13s = [
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "volkswagen", label: "volkswagen", isDisabled: true },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "hyundai", label: "hyundai" },
  { value: "fiat", label: "fiat" },
];
export const SearchSelect13 = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <Creatable
        classNamePrefix="background"
        isMulti
        display="value"
        options={option13s}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};

// //SearchSelect45
const option3s = [
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW", isDisabled: true },
  { value: "volkswagen", label: "volkswagen" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "hyundai", label: "hyundai", isDisabled: true },
  { value: "fiat", label: "fiat" },
];
const option3ss = [
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW", isDisabled: true },
  { value: "volkswagen", label: "volkswagen" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "hyundai", label: "hyundai", isDisabled: true },
  { value: "fiat", label: "fiat" },
];
const groupedOptions3ss = [
  {
    label: "BMW",
    options: option3s,
  },
  {
    label: "volkswagen",
    options: option3ss,
  },
];

export const SearchSelect45 = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <Creatable
        classNamePrefix="background"
        isMulti
        display="value"
        options={groupedOptions3ss}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};


//SearchSelect22
const groupedOptionsqa = [
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "volkswagen", label: "volkswagen" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "hyundai", label: "hyundai" },
  { value: "fiat", label: "fiat" },
];
export const SearchSelect22 = () => {
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <Creatable
        classNamePrefix="background"
        display="value"
        options={groupedOptionsqa}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        isSearchable="true"
      />
    </div>
  );
};

// //MultipleSelect1
const optionsMultipleSelect1 = [
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "volkswagen", label: "volkswagen", disabled: "disabled" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "hyundai", label: "hyundai" },
  { value: "fiat", label: "fiat" },
];
export const MultipleSelect1 = () => {
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <MultiSelect
        options={optionsMultipleSelect1}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        disableSearch="true"
      />
    </div>
  );
};

// //MultipleSelect22
const optionsMultipleSelect2 = [
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "volkswagen", label: "volkswagen", disabled: "disabled" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "hyundai", label: "hyundai" },
  { value: "fiat", label: "fiat" },
];
export const MultipleSelect22 = () => {
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <MultiSelect
        options={optionsMultipleSelect2}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};

// //Disabledselect
const optionsDisabledselect = [
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "volkswagen", label: "volkswagen" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "hyundai", label: "hyundai" },
  { value: "fiat", label: "fiat" },
];
export const Disabledselect = () => {
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <MultiSelect
        options={optionsDisabledselect}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        disableSearch="true"
        disabled="true"
      />
    </div>
  );
};

// //Disabledselect1
const optionsDisabledselect1 = [
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "volkswagen", label: "volkswagen" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "hyundai", label: "hyundai" },
  { value: "fiat", label: "fiat" },
];
export const Disabledselect1 = () => {
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <MultiSelect
        options={optionsDisabledselect1}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        disableSearch="true"
        disabled="true"
      />
    </div>
  );
};

// //MultipleSelect3
const optionsMultipleSelect3 = [
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "volkswagen", label: "volkswagen" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "hyundai", label: "hyundai" },
  { value: "fiat", label: "fiat" },
];
export const MultipleSelect3 = () => {
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <MultiSelect
        options={optionsMultipleSelect3}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        disableSearch="true"
        hasSelectAll={false}
      />
    </div>
  );
};

// //Selectbox
export const Selectbox = () => {
  let [value, setValue] = useState(["PDF - Swap Valuation"]);
  function handleChange(selected) {
    setValue(selected);
    console.log(selected);
  }
  const options = [
    {
      label: "Software Side",
      options: [
        { value: "Web designer", label: "Web designer" },
        { value: "Web Developer", label: "Web Developer" },
        {
          value: "Application Developer",
          label: "Application Developer",
        },
        { value: "App Designer", label: "App Designer" },
      ],
    },
    {
      label: "Voice Side",
      options: [
        { value: "Tell Caller", label: "Tell Caller" },
        {
          value: "Recruiter",
          label: "Recruiter",
        },
        {
          value: "HR",
          label: "HR",
        },
        {
          value: "Data Entry",
          label: "Data Entry",
        },
        {
          value: "Mapping",
          label: "Mapping",
        },
        {
          value: "US Recruiter",
          label: "US Recruiter",
        },
      ],
    },
  ];

  return (
    <DualListBox
      canFilter
      selected={value}
      options={options}
      filterCallback={(option, filterInput) => {
        if (filterInput === "") {
          return true;
        }
        console.log(option);
        let words = filterInput.split(" ");
        let res = false;
        for (let word of words) {
          console.log(word);
          res = new RegExp(word, "i").test(option.label);
          if (res === false) {
            break;
          }
        }
        return res;
      }}
      onChange={handleChange}
    />
  );
};
// //Selectbox1
export const Selectbox1 = () => {
  let [value, setValue] = useState(["PDF - Swap Valuation"]);
  function handleChange(selected) {
    setValue(selected);
    console.log(selected);
  }
  const options = [
    {
      label: "Software Side",
      options: [
        { value: "HTML5", label: "HTML5" },
        { value: "CSS3", label: "CSS3" },
        {
          value: "Jquery",
          label: "Jquery",
          disabled: "disabled",
        },
        { value: ".Net", label: ".Net" },

        { value: "PHP", label: "PHP" },
        {
          value: "Java",
          label: "Java",
        },
        {
          value: "Android",
          label: "Android",
          disabled: "disabled",
        },
        {
          value: "AngularJS",
          label: "AngularJS",
        },
        {
          value: "Photoshop",
          label: "Photoshop",
          disabled: "disabled",
        },
        {
          value: "Python",
          label: "Python",
        },
        {
          value: "SQL",
          label: "SQL",
        },
        {
          value: "Java Script",
          label: "Java Script",
        },
      ],
    },
  ];

  return (
    <DualListBox
      canFilter="true"
      selected={value}
      options={options}
      filterCallback={(option, filterInput) => {
        if (filterInput === "") {
          return true;
        }
        console.log(option);
        let words = filterInput.split(" ");
        let res = false;
        for (let word of words) {
          console.log(word);
          res = new RegExp(word, "i").test(option.label);
          if (res === false) {
            break;
          }
        }
        return res;
      }}
      onChange={handleChange}
    />
  );
};

//colorpicker
const [ThemeProvider, useThemeContext, useThemeColor] = constate(
  (props) => useState(props.initialColor),
  (value) => value,
  ([color]) => color
);
const [PickerVisibilityProvider, usePickerVisibilityContext] = constate(() =>
  useState(false)
);

function Picker() {
  const [color, setColor] = useThemeContext();
  const [visible, setVisible] = usePickerVisibilityContext();
  return visible ? (
    <GithubPicker
      style={{ position: "absolute" }}
      triangle="hide"
      color={color}
      onChange={(c) => {
        setColor(c.hex);
        setVisible(false);
      }}
    />
  ) : null;
}
function Buttons() {
  const background = useThemeColor();
  const [visible, setVisible] = usePickerVisibilityContext();
  return (
    <button style={{ background }} onClick={() => setVisible(!visible)}>
      color: {background}
    </button>
  );
}
export function Transparencyselection() {
  return (
    <ThemeProvider initialColor="#6259ca">
      <PickerVisibilityProvider>
        <Buttons />
        <Picker />
      </PickerVisibilityProvider>
    </ThemeProvider>
  );
}
