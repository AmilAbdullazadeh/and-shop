import React, { useState } from "react";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import {
  CForm,
  CCol,
  CFormLabel,
  CFormFeedback,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CButton,
  CFormCheck,
} from "@coreui/react";

//ServerSideValidation
export function ServerSideValidation() {
   const [value, setvalue] = useState("");

   const handleOnchange = () => {
     setvalue(value);
   };
  const optionselectyear = [
    {
      value: "Choose...-1",
      label: "Choose...",
    },
    {
      value: "Mountain-1",
      label: "Mountain ",
    },
    {
      value: "Wyoming-2",
      label: "Wyoming",
    },
    {
      value: "Utah-3",
      label: "Utah",
    },
    {
      value: "Montana-4",
      label: "Montana",
    },
    {
      value: "Colorado-6",
      label: "Colorado",
    },
    {
      value: "Mountain Time Zone-7",
      label: "Mountain Time Zone",
    },
    {
      value: "Wyoming-8",
      label: "Wyoming",
    },
  ];
  return (
    <CForm className="row g-3 needs-validation">
      <CCol md={4}>
        <CFormLabel htmlFor="validationServer01">Email</CFormLabel>
        <CFormInput
          type="text"
          id="validationServer01"
          defaultValue="Mark"
          valid
          required
        />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationServer02">Email</CFormLabel>
        <CFormInput
          type="text"
          id="validationServer02"
          defaultValue="Otto"
          valid
          required
        />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationServerUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend03">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationServerUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend03"
            invalid
            required
          />
          <CFormFeedback invalid>Please choose a username.</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationServer03">City</CFormLabel>
        <CFormInput type="text" id="validationServer03" invalid required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationServer04">City</CFormLabel>
        <MultiSelect
          className="farms"
          displayValue="key"
          id="optionselectyear"
          onChange={handleOnchange}
           placeholder="--Select--"
          singleSelect="true"
          options={optionselectyear}
        
        />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationServer05">City</CFormLabel>
        <CFormInput type="text" id="validationServer05" invalid required />
        <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"
          invalid
          required
        />
        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  );
}
//End

//CustomValidation
export function CustomValidation() {
   const [value, setvalue] = useState("");

   const handleOnchange = () => {
     setvalue(value);
   };
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  const optionselectyear = [
    {
      value: "Choose...-1",
      label: "Choose...",
    },
    {
      value: "Mountain Time-2",
      label: "Mountain Time",
    },
    {
      value: "Wyoming-3",
      label: "Wyoming",
    },
    {
      value: "Utah-4",
      label: "Utah",
    },
    {
      value: "Montana-5",
      label: "Montana",
    },
    {
      value: "Colorado-6",
      label: "Colorado",
    },
    {
      value: "Mountain Time Zone-7",
      label: "Mountain Time Zone",
    },
    {
      value: "Wyoming-8",
      label: "Wyoming",
    },
  ];
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustom01">Email</CFormLabel>
        <CFormInput
          type="text"
          id="validationCustom01"
          defaultValue="Mark"
          required
        />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustom02">Email</CFormLabel>
        <CFormInput
          type="text"
          id="validationCustom02"
          defaultValue="Otto"
          required
        />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustomUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationCustomUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend"
            required
          />
          <CFormFeedback invalid>Please choose a username.</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom03">City</CFormLabel>
        <CFormInput type="text" id="validationCustom03" required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationCustom04">City</CFormLabel>
        <MultiSelect
          className="farms"
          displayValue="key"
          onChange={handleOnchange}
           placeholder="--Select--"
          singleSelect="true"
          options={optionselectyear}
        
        />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationCustom05">City</CFormLabel>
        <CFormInput type="text" id="validationCustom05" required />
        <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"
          required
        />
        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  );
}
//End

//DefaultValidation
export const DefaultValidation = (props) => {
   const [value, setvalue] = useState("");

   const handleOnchange = () => {
     setvalue(value);
   };
  const optionselectyear = [
    {
      value: "Choose...-1",
      label: "Choose...",
    },
    {
      value: "MountainZone-2",
      label: "MountainZone",
    },
    {
      value: "Wyoming-3",
      label: "Wyoming",
    },
    {
      value: "Utah-4",
      label: "Utah",
    },
    {
      value: "Montana-5",
      label: "Montana",
    },
    {
      value: "Colorado-6",
      label: "Colorado",
    },
    {
      value: "Mountain Time Zone-7",
      label: "Mountain Time Zone",
    },
    {
      value: "Wyoming-8",
      label: "Wyoming",
    },
  ];
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <CForm
      className="row g-3 needs-validation"
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={4}>
        <CFormLabel htmlFor="validationDefault01">Email</CFormLabel>
        <CFormInput
          type="text"
          id="validationDefault01"
          defaultValue="Mark"
          required
        />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationDefault02">Email</CFormLabel>
        <CFormInput
          type="text"
          id="validationDefault02"
          defaultValue="Otto"
          required
        />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationDefaultUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend02">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationDefaultUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend02"
            required
          />
          <CFormFeedback invalid>Please choose a username.</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationDefault03">City</CFormLabel>
        <CFormInput type="text" id="validationDefault03" required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationDefault04">City</CFormLabel>
        <MultiSelect
          className="farms"
          onChange={handleOnchange}
           placeholder="--Select--"
          singleSelect="true"
          options={optionselectyear}
        />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationDefault05">City</CFormLabel>
        <CFormInput type="text" id="validationDefault05" required />
        <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"
          required
        />
        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  );
};
//End
//Tooltips
export function Tooltips() {
   const [value, setvalue] = useState("");

   const handleOnchange = () => {
     setvalue(value);
   };
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  const optionselectyear = [
    {
      value: "Choose...-1",
      label: "Choose...",
    },
    {
      value: "Time Zone-2",
      label: "Time Zone",
    },
    {
      value: "Wyoming-3",
      label: "Wyoming",
    },
    {
      value: "Utah-4",
      label: "Utah",
    },
    {
      value: "Montana-5",
      label: "Montana",
    },
    {
      value: "Colorado-6",
      label: "Colorado",
    },
    {
      value: "Mountain Time Zone-7",
      label: "Mountain Time Zone",
    },
    {
      value: "Wyoming-8",
      label: "Wyoming",
    },
  ];
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltip01">Email</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip01"
          defaultValue="Mark"
          required
        />
        <CFormFeedback tooltip valid>
          Looks good!
        </CFormFeedback>
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltip02">Email</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip02"
          defaultValue="Otto"
          required
        />
        <CFormFeedback tooltip valid>
          Looks good!
        </CFormFeedback>
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltipUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationTooltipUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend"
            required
          />
          <CFormFeedback tooltip invalid>
            Please choose a username.
          </CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6} className="position-relative">
        <CFormLabel htmlFor="validationTooltip03">City</CFormLabel>
        <CFormInput type="text" id="validationTooltip03" required />
        <CFormFeedback tooltip invalid>
          Please provide a valid city.
        </CFormFeedback>
      </CCol>
      <CCol md={3} className="position-relative">
        <CFormLabel htmlFor="validationTooltip04">City</CFormLabel>
        <MultiSelect
          className="farms"
          onChange={handleOnchange}
           placeholder="--Select--"
          singleSelect="true"
          options={optionselectyear}
        />
        <CFormFeedback tooltip invalid>
          Please provide a valid city.
        </CFormFeedback>
      </CCol>
      <CCol md={3} className="position-relative">
        <CFormLabel htmlFor="validationTooltip05">City</CFormLabel>
        <CFormInput type="text" id="validationTooltip05" required />
        <CFormFeedback tooltip invalid>
          Please provide a valid zip.
        </CFormFeedback>
      </CCol>
      <CCol xs={12} className="position-relative">
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  );
}
//End
export function Singleselect1() {
 const [value, setvalue] = useState("");

 const handleOnchange = () => {
   setvalue(value);
 };
  const objectArraysingle = [
    { label: "Choose...", value: "Choose..." },
    { label: "Mountain Time Zone", value: "Mountain Time Zone" },
    { label: "Wyoming", value: "Wyoming" },
    { label: "Utah", value: "Utah" },
    { label: "Montana", value: "Montana" },
    { label: "Colorado", value: "Mountain Time Zone" },
    { label: "Wyoming", value: "Wyoming" },
    { label: "Utah", value: "Utah" },
  ];
  return (
    <div>
      <MultiSelect
        options={objectArraysingle}
        onChange={handleOnchange}
         placeholder="--Select--"
        singleSelect="true"
      />
    </div>
  );
}