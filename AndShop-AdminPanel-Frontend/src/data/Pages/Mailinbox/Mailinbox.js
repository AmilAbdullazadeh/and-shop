import React from "react";


//MailInboxdata
export function MailInboxdata() {
  const mailInboxdata = [
    {
      STAR: "warning",
      SEMIBOLD: "Tim Reid, S P N",
      MESSAGE: "Boost Your Website Traffic",
      MONTH: "April 01",
    },
    {
      STAR: "warning",
      SEMIBOLD: "Freelancer.com",
      MESSAGE: "Stop wasting your visitors",
      MONTH: "May 23",
    },
    {
      STAR1: "danger",
      SEMIBOLD: "PHPClass",
      MESSAGE: "Added a new className: Login className Fast Site",
      MONTH: "9:27 AM",
      UNEAD: "unread",
    },
    {
      STAR: "",
      STAR1: "",
      SEMIBOLD: "Facebook",
      MESSAGE: "Somebody requested a new password",
      MONTH: "June 13",
    },
    {
      STAR: "warning",
      STAR1: "",
      SEMIBOLD: "Skype",
      MESSAGE: "Password successfully changed",
      MONTH: "March 24",
    },
    {
      STAR: "warning",
      STAR1: "",
      SEMIBOLD: "Google+",
      MESSAGE: "alireza, do you know",
      MONTH: "March 09",
    },
    {
      STAR: "warning",
      STAR1: "",
      SEMIBOLD: "WOW Slider",
      MESSAGE: "New WOW Slider v7.8 - 67% off",
      MONTH: "March 14",
    },
    {
      STAR: "warning",
      STAR1: "",
      SEMIBOLD: "LinkedIn Pulse",
      MESSAGE: "The One Sign Your Co-Worker Will Stab",
      MONTH: "Feb 19",
    },
    {
      STAR: "",
      STAR1: "",
      SEMIBOLD: "Google Webmaster",
      MESSAGE: "Improve the search presence of WebSite",
      MONTH: "March 15",
      UNEAD: "unread",
    },
    {
      STAR: "",
      STAR1: "",
      SEMIBOLD: "JW Player",
      MESSAGE: "Last Chance: Upgrade to Pro for",
      MONTH: "March 15",
    },
    {
      STAR: "",
      STAR1: "",
      SEMIBOLD: "Drupal Community",
      MESSAGE: "Welcome to the Drupal Community",
      MONTH: "March 04",
    },
    {
      STAR: "warning",
      STAR1: "",
      SEMIBOLD: "Zoosk",
      MESSAGE: "7 new singles we think you'll like",
      MONTH: "May 14",
    },
    {
      STAR: "",
      STAR1: "danger",
      SEMIBOLD: "LinkedIn",
      MESSAGE: "Alireza: Nokia Networks, System Group and",
      MONTH: "February 25",
    },
    {
      STAR: "",
      STAR1: "",
      SEMIBOLD: "Facebook",
      MESSAGE: "Your account was recently logged into",
      MONTH: "April 07",
    },
    {
      STAR: "",
      STAR1: "",
      SEMIBOLD: "Twitter",
      MESSAGE: "Your Twitter password has been changed",
      MONTH: "March 04",
    },
    {
      STAR: "",
      STAR1: "",
      SEMIBOLD: "InternetSeer",
      MESSAGE: "Performance Report",
      MONTH: "July 14",
    },
    {
      STAR: "",
      STAR1: "danger",
      SEMIBOLD: "Bertina",
      MESSAGE: "IMPORTANT: Don't lose your domains!",
      MONTH: "June 16",
    },
    {
      STAR: "warning",
      STAR1: "danger",
      SEMIBOLD: "Laura Gaffin, S P N",
      MESSAGE: "Your Website On Google (Higher Rankings Are Better)",
      MONTH: "August 10",
    },
    {
      STAR: "",
      STAR1: "",
      SEMIBOLD: "Facebook",
      MESSAGE: "Alireza Zare Login faild",
      MONTH: "feb 14",
    },
    {
      STAR: "warning",
      STAR1: "",
      SEMIBOLD: "AddMe.com",
      MESSAGE: "Submit Your Website to the AddMe Business Directory",
      MONTH: "August 10",
    },
    {
      STAR: "",
      STAR1: "",
      SEMIBOLD: "Terri Rexer, S P N",
      MESSAGE: "Forget Google AdWords: Un-Limited Clicks fo",
      MONTH: "April 14",
    },
  ];
  return (
   
    <table className="table table-inbox table-hover text-nowrap mb-0 ">
     
        <tbody>
        {mailInboxdata.map((playerData, k) => (
          <tr className={`${playerData.UNEAD}`}  key={k}>
            <td className="inbox-small-cells">
              <label className="custom-control custom-checkbox mb-0">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="example-checkbox2"
                  value="option2"
                />
                <span className="custom-control-label"></span>
              </label>
            </td>
            <td className="inbox-small-cells">
              <i className={`fa fa-star text-${playerData.STAR}`}></i>
            </td>
            <td className="inbox-small-cells">
              <i className={`fa fa-bookmark text-${playerData.STAR1}`}></i>
            </td>
            <td className="view-message dont-show fw-semibold">
              {playerData.SEMIBOLD}
            </td>
            <td className="view-message">{playerData.MESSAGE}</td>
            <td className="view-message text-end fw-semibold">
              {playerData.MONTH}
            </td>
          </tr>
      ))}
        </tbody>
    </table>

  );
}
