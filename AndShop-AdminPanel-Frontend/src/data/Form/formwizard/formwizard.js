import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Box from "@mui/material/Box";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Form, } from "react-bootstrap";
import validator from "validator";
import StepZilla from "react-stepzilla";

//WizardForm
 function Name({ nextStep, handleFormData, values }){
  const [error, setError] = useState(false);
  const submitFormData = (e) => {
    e.preventDefault();
    if (
      validator.isEmpty(values.firstName) ||
      validator.isEmpty(values.lastName)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
        <div>
          <Form onSubmit={submitFormData}>
            <Form.Group className="">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid #6259ca" : "" }}
                name="firstName"
                defaultValue={values.firstName}
                type="text"
                placeholder="First Name"
                onChange={handleFormData("firstName")}
              />
              {error ? (
                <Form.Text style={{ color: "#6259ca" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid #6259ca" : "" }}
                name="lastName"
                defaultValue={values.lastName}
                type="text"
                placeholder="Last Name"
                onChange={handleFormData("lastName")}
              />
              {error ? (
                <Form.Text style={{ color: "#6259ca" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Button type="submit">
              Continue
            </Button>
          </Form>
        </div>
  );
 }
 function StepTwo  ({ nextStep, handleFormData, prevStep, values }) {
  
 const [error, setError] = useState(false);

   
 const submitFormData = (e) => {
   e.preventDefault();

    
   if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
     setError(true);
   } else {
     nextStep();
   }
 };
 return (
       <div>
         <Form onSubmit={submitFormData}>
           <Form.Group className="mb-3">
             <Form.Label>Age</Form.Label>
             <Form.Control
               style={{ border: error ? "2px solid red" : "" }}
               type="number"
               placeholder="Age"
               onChange={handleFormData("age")}
             />
             {error ? (
               <Form.Text style={{ color: "red" }}>
                 This is a required field
               </Form.Text>
             ) : (
               ""
             )}
           </Form.Group>
           <Form.Group className="mb-3">
             <Form.Label>Email</Form.Label>
             <Form.Control
               style={{ border: error ? "2px solid red" : "" }}
               type="email"
               placeholder="email"
               onChange={handleFormData("email")}
             />
             {error ? (
               <Form.Text style={{ color: "red" }}>
                 This is a required field
               </Form.Text>
             ) : (
               ""
             )}
           </Form.Group>
           <div >
             <Button className="float-start"  onClick={prevStep}>
               Previous
             </Button>

             <Button className="float-end"  type="submit">
               Submit
             </Button>
           </div>
         </Form>
       </div>
 );
};
 function Final({ values }) {


const { firstName, lastName, age, email } = values;
return (
  
    <div style={{ textAlign: "left" }}>
      <div>
        <p>
          <strong>First Name :</strong> {firstName}
        </p>
        <p>
          <strong>Last Name :</strong> {lastName}
        </p>
        <p>
          <strong>Age :</strong> {age}
        </p>
        <p>
          <strong>Email :</strong> {email}
        </p>
      </div>
    </div>
  
);
};
export function WizardForm() {
const [step, setstep] = useState(1);

const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  age: "",
  email: ""
})
const nextStep = () => {
  setstep(step + 1);
};
const prevStep = () => {
  setstep(step - 1);
};
const handleInputData = input => e => { 
  const {value } = e.target;
  setFormData(prevState => ({
    ...prevState,
    [input]: value
}));
}
 switch (step) {
  case 1:
    return (
      
            <div className="custom-margin">
              <Name nextStep={nextStep} handleFormData={handleInputData} values={formData} />
            </div>
    );
  
   default:
    return (
      
            <div  className="custom-margin">
              <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
            </div>
    );
   
  case 3:
    return (
      <div className="">
            <div className="custom-margin">
              <Final values={formData}  />
            </div>
          </div>
        
      
    );
  
  
}
}
//End

//BasicContentWizard
 export const BasicContentWizard = () => {
   const [goSteps, setGoSteps] = useState(0);

   return (
     <div>
       <Stepper activeStep={goSteps}>
         <Step onClick={() => setGoSteps(0)} label="Personal Information" />
         <Step onClick={() => setGoSteps(1)} label="Billing Information" />
         <Step onClick={() => setGoSteps(2)} label="Payment Details" />
       </Stepper>
       {goSteps === 0 && (
         <div>
           <h3>Personal Information</h3>
           <section>
             <div className="control-group form-group ">
               <label className="form-label">Name</label>
               <input
                 type="text"
                 className="form-control required"
                 placeholder="Name"
               />
             </div>
             <div className="control-group form-group">
               <label className="form-label">Email</label>
               <input
                 type="email"
                 className="form-control required"
                 placeholder="Email Address"
               />
             </div>
             <div className="control-group form-group">
               <label className="form-label">Phone Number</label>
               <input
                 type="number"
                 className="form-control required"
                 placeholder="Number"
               />
             </div>
             <div className="control-group form-group mb-0">
               <label className="form-label">Address</label>
               <input
                 type="text"
                 className="form-control required"
                 placeholder="Address"
               />
             </div>
           </section>
           <button
             className="btn btn-primary mt-2 float-end"
             onClick={() => setGoSteps(1)}
           >
             Next
           </button>
           <button
             className="btn btn-primary mt-2 float-start"
             onClick={() => setGoSteps(0)}
             disabled
           >
             Previous
           </button>
         </div>
       )}
       {goSteps === 1 && (
         <div>
           <h3>Billing Information</h3>
           <section>
             <div className="table-responsive mg-t-20">
               <table className="table table-bordered border">
                 <tbody>
                   <tr>
                     <td>Cart Subtotal</td>
                     <td className="text-end">$792.00</td>
                   </tr>
                   <tr>
                     <td>
                       <span>Totals</span>
                     </td>
                     <td className="text-end text-muted">
                       <span>$792.00</span>
                     </td>
                   </tr>
                   <tr>
                     <td>
                       <span>Order Total</span>
                     </td>
                     <td>
                       <h2 className="price text-end mb-0">$792.00</h2>
                     </td>
                   </tr>
                 </tbody>
               </table>
             </div>
           </section>
           <div>
             <button
               className="btn btn-primary float-end"
               onClick={() => setGoSteps(2)}
             >
               Next
             </button>
             <button className="btn btn-primary float-start " onClick={() => setGoSteps(0)}>
               Previous
             </button>
           </div>
         </div>
       )}
       {goSteps === 2 && (
         <div className="Paymentdetails">
           <h3>Payment Details</h3>
           <section>
             <div className="form-group">
               <label className="form-label">Card Holder Name</label>
               <input
                 type="text"
                 className="form-control"
                 id="name1"
                 placeholder="First Name"
               />
             </div>
             <div className="form-group">
               <label className="form-label">Card number</label>
               <div className="input-group">
                 <input
                   type="text"
                   className="form-control"
                   placeholder="Search for..."
                 />
                 <span className="input-group-text btn btn-info shadow-none">
                   <button>
                     <i className="fa fa-cc-visa"></i> &nbsp;
                     <i className="fa fa-cc-amex"></i> &nbsp;
                     <i className="fa fa-cc-mastercard"></i>
                   </button>
                 </span>
               </div>
             </div>
             <div className="row">
               <div className="col-sm-8">
                 <div className="form-group mb-sm-0">
                   <label className="form-label">Expiration</label>
                   <div className="input-group">
                     <input
                       type="number"
                       className="form-control"
                       placeholder="MM"
                       name="expiremonth"
                     />
                     <input
                       type="number"
                       className="form-control"
                       placeholder="YY"
                       name="expireyear"
                     />
                   </div>
                 </div>
               </div>
               <div className="col-sm-4 ">
                 <div className="form-group mb-0">
                   <label className="form-label">
                     CVV <i className="fa fa-question-circle"></i>
                   </label>
                   <input type="number" className="form-control" required="" />
                 </div>
               </div>
             </div>
           </section>
           <button
             className="btn btn-primary float-end"
             onClick={() => setGoSteps(0)}
           >
             Submit
           </button>
           <button className="btn btn-primary wizer float-start" onClick={() => setGoSteps(1)}>
             Previous
           </button>
         </div>
       )}
     </div>
   );
 };
//End

//Formwizard
function getSteps() {
  return ["Personal Information", "Billing Information", "Payment Details"];
}
function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div id="step-10" className="">
          <form>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail6"
                placeholder="Enter email address"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="passwsord"
                className="form-control"
            
                placeholder="Password"
              />
            </div>
            <div className="form-group mb-0 justify-content-end">
              <div className="">
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox2"
                    value="option2"
                  />
                  <span className="custom-control-label">Check me Out</span>
                </label>
              </div>
            </div>
          </form>
        </div>
      );
    case 1:
      return (
        <div id="step-11" className="">
          <form>
            <div className="form-group">
              <label>User Name</label>
              <input
                type="text"
                className="form-control"
                id="inputtext"
                placeholder="Enter User Name"
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail8"
                placeholder="Enter Your Number"
              />
            </div>
            <div className="form-group mb-0 justify-content-end">
              <div className="">
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox2"
                    value="option2"
                  />
                  <span className="custom-control-label">Check me Out</span>
                </label>
              </div>
            </div>
          </form>
        </div>
      );
    case 2:
      return (
        <div id="step-12" className="">
          <div className="form-group mb-0 justify-content-end">
            <div className="">
              <label className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="example-checkbox2"
                  value="option2"
                />
                <span className="custom-control-label">
                  I agree terms & Conditions
                </span>
              </label>
            </div>
          </div>
        </div>
      );
    default:
      return "unknown step";
  }
}
export function Formwizard() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const isStepOptional = (step) => {
    return step === 1;
  };
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = "";
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            All steps completed
            <Button onClick={handleReset} className="float-end">
              Reset
            </Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>

              <Button
                variant="contained"
                className="float-end"
                color="primary"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
//End

//VerticalOrientationWizard
const steps = [
  {
    label: "Personal Information",
    description: (
      <span>
        <span className="control-group form-group">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control required"
            placeholder="Name"
          />
        </span>
        <span className="control-group form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control required"
            placeholder="Email Address"
          />
        </span>
        <span className="control-group form-group">
          <label className="form-label">Phone Number</label>
          <input
            type="number"
            className="form-control required"
            placeholder="Number"
          />
        </span>
        <span className="control-group form-group mb-0">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control required"
            placeholder="Address"
          />
        </span>
      </span>
    ),
  },
  {
    label: "Billing Information",
    description: (
      <span>
        <span className="table-responsive mg-t-20">
          <span className="table table-bordered">
            <span>
              <span className="row valid">
                <span className="col-sm-1"></span>
                <span className="col-sm-5">Cart Subtotal</span>
                <span className="text-end col-sm-5">$792.00</span>
              </span>

              <span className="row">
                <span className="col-sm-1"></span>
                <span className="col-sm-5">
                  <span>Totals</span>
                </span>
                <span className="col-sm-5 text-end text-muted">
                  <span>$792.00</span>
                </span>
              </span>
              <span className="row">
                <span className="col-sm-1"></span>
                <span className="col-sm-5">
                  <span>Order Total</span>
                </span>
                
                  <span className="col-sm-5 price text-end  mb-0">
                    $792.00
                 
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    ),
  },
  {
    label: "Payment Details ",
    description: (
      <span>
        <span className="form-group">
          <label className="form-label">Card Holder Name</label>
          <input
            type="text"
            className="form-control"
            id="name12"
            placeholder="First Name"
          />
        </span>
        <span className="form-group">
          <label className="form-label">Card number</label>
          <span className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for..."
            />
            <span className="input-group-text btn btn-info shadow-none">
              <i className="fa fa-cc-visa"></i> &nbsp;
              <i className="fa fa-cc-amex"></i> &nbsp;
              <i className="fa fa-cc-mastercard"></i>
            </span>
          </span>
        </span>
        <span className="row">
          <span className="col-sm-8">
            <span className="form-group mb-sm-0">
              <label className="form-label">Expiration</label>
              <span className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="MM"
                  name="expiremonth"
                />
                <input
                  type="number"
                  className="form-control"
                  placeholder="YY"
                  name="expireyear"
                />
              </span>
            </span>
          </span>
          <span className="col-sm-4 ">
            <span className="form-group mb-0">
              <label className="form-label">
                CVV <i className="fa fa-question-circle"></i>
              </label>
              <input type="number" className="form-control" required="" />
            </span>
          </span>
        </span>
      </span>
    ),
  },
];

export function VerticalOrientationWizard() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? <Typography variant="caption"></Typography> : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div className="buts">
                  <Button
                    className="me-2 mt-2"
                    
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    className="me-2 mt-2"
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>&nbsp;&nbsp;
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button
            className="me-2 resets mt-2"
            onClick={handleReset}
            sx={{ mt: 1, mr: 1 }}
          >
            Reset
          </Button>&nbsp;&nbsp;
        </Paper>
      )}
    </Box>
  );
}
//End
//AccordionWizardForm
const NameEmail = () => {
  return (
         <div className="list-group">
												<div className="list-group-item" >
													<h5 className="mb-0 d-flex" ><span className="form-wizard-title">Name &amp; Email</span></h5>
														<div className="my-3">
															<div className="form-group">
																<label>Name:</label>
																<input type="text" name="name" className="form-control" />
															</div>
															<div className="form-group">
																<label>Email:</label>
																<input type="text" name="email" className="form-control" />
															</div>
														</div>
												</div>
                        </div>
  )
}
const Contact = () => {
  return (
    <div>
          <div className="list-group-item" >
													<h5 className="mb-0 d-flex" ><span className="form-wizard-title">Contact</span></h5>
													<div >
														<div className="my-3">
															<div className="form-group">
																<label>Telephone:</label>
																<input type="text" name="telephone" className="form-control" />
															</div>
															<div className="form-group">
																<label>Mobile:</label>
																<input type="text" name="mobile" className="form-control" />
															</div>
														</div>
													</div>
												</div>
          <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Accept</label>
          </div>
</div>
  )
}
const PaymentDetails = () => {
  return (
      <div>
          <section>
												<div className="form-group">
													<label className="form-label" >Card Holder Name</label>
													<input type="text" className="form-control" id="name1" placeholder="First Name"/>
												</div>
												<div className="form-group">
													<label className="form-label">Card number</label>
													<div className="input-group">
														<input type="text" className="form-control" placeholder="Search for..."/>
														<span className="input-group-text btn btn-info shadow-none">
                              <button>
															<i className="fa fa-cc-visa"></i> &nbsp; <i className="fa fa-cc-amex"></i> &nbsp;
															<i className="fa fa-cc-mastercard"></i>
                              </button>
														</span>
													</div>
												</div>
												<div className="row">
													<div className="col-sm-8">
														<div className="form-group mb-sm-0">
															<label className="form-label">Expiration</label>
															<div className="input-group">
																<input type="number" className="form-control" placeholder="MM" name="expiremonth"/>
																<input type="number" className="form-control" placeholder="YY" name="expireyear"/>
															</div>
														</div>
													</div>
													<div className="col-sm-4 ">
														<div className="form-group mb-0">
															<label className="form-label">CVV <i className="fa fa-question-circle"></i></label>
															<input type="number" className="form-control" required=""/>
														</div>
													</div>
												</div>
											</section>
      </div>
  )
}

const stepswizard =
    [
        { name:'Name', component: <NameEmail /> },
        { name:'Contact', component: <Contact /> },
        { name:'Payment', component: <PaymentDetails /> },
       

    ]
export const AccordionWizardForm = () => {
    return (
        <div className='step-progress'>
            <StepZilla steps={stepswizard} />
        </div>
    );
}
//End