import React from "react";
import {Link} from "react-router-dom"
import "react-data-table-component-extensions/dist/index.css";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import user11 from "../../assets/images/users/11.jpg"
import user1 from "../../assets/images/users/1.jpg"
import user12 from "../../assets/images/users/12.jpg"
import user13 from "../../assets/images/users/13.jpg"
import user6 from "../../assets/images/users/6.jpg"
import user14 from "../../assets/images/users/14.jpg"
import user7 from "../../assets/images/users/7.jpg"
import user5 from "../../assets/images/users/5.jpg"
import { OverlayTrigger,Tooltip } from "react-bootstrap";

//totalTransactions
export const totalTransactions = {
  series: [{
    name: "Total Orders",
    type: 'line',
    data:[0, 45, 30, 75, 15, 94, 40, 115, 30, 105, 65, 110]
    
  },{
    name: "Total Sales",
    type: 'line',
    data: [0, 60, 20, 130, 75, 130, 75, 140, 64, 130, 85, 120]
    
  }, {
    name: "",
    type: 'area',
    data: [0, 105, 70, 175, 85, 154, 90, 185, 120, 145, 185, 130]
  }],

  options: {
    chart: {
			height: 300,
			type: "line",
			stacked: false,
			toolbar: {
				enabled: false
			},
			dropShadow: {
        enabled: true,
				opacity: 0.1,
			},
		},
    colors: ["#6259ca", "#f99433", 'rgba(119, 119, 142, 0.01)'],
		dataLabels: {
			enabled: false
		},
    stroke: {
			curve: "smooth",
			width: [3, 3, 0],
			dashArray: [0, 4],
			lineCap: "round"
		},
		grid: {
			padding: {
				left: 0,
				right: 0
			},
			strokeDashArray: 3
		},
		markers: {
			size: 0,
			hover: {
				size: 0
			}
		},
  
    xaxis: {
			type: "month",
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			axisBorder: {
				show: false,
				color: 'rgba(119, 119, 142, 0.08)',
			},
			labels: {
				style: {
					color: '#8492a6',
					fontSize: '12px',
				},
			},
		},
    yaxis: {
			labels: {
				style: {
					color: '#8492a6',
					fontSize: '12px',
				},
			},
			axisBorder: {
				show: false,
				color: 'rgba(119, 119, 142, 0.08)',
			},
		},
    fill: {
			gradient: {
			  inverseColors: false,
			  shade: 'light',
			  type: "vertical",
			  opacityFrom: 0.85,
			  opacityTo: 0.55,
			  stops: [0, 100, 100, 100]
			}
		  },
		tooltip: {
			show:false
		},
    legend: {
      position: "top",
      show:true
    }
  },
 
};
//Recentorders

export const Recentorders = {
  series: [83],
  options: {
    chart: {
      height: 305,
      type: "radialBar",
      responsive:'true',
      offsetY: 10,
      offsetX: 0,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: "16px",
            color: undefined,
            offsetY: 30,
          },
          value: {
            offsetY: -16,
            fontSize: "22px",
            color: undefined,
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    colors: ['#ff5d9e'],
	fill: {
		type: "gradient",
		gradient: {
			shade: "gradient",
			type: "horizontal",
			shadeIntensity: .5,
			gradientToColors: ['#6259ca'],
			inverseColors: !0,
			opacityFrom: 1,
			opacityTo: 1,
			stops: [0, 100]
		}
	},
    stroke: {
      dashArray: 4,
    },
    labels: [""],
  },
};

//dashbordtable
export const Productsales=()=>{
  const columns=[
    {
      name: "S.NO",
      selector: row => [row.sno],
      sortable: true,
      cell:row=><span className="text-muted fs-15 fw-semibold text-center">{row.sno}</span>
    },
    {
      name: "	NAME",
      selector: row => [row.name],
      sortable: true,
      cell:row=> <div className="d-flex">
        
      <img className="avatar avatar-md brround mt-1" alt="" src={row.img}/>
      <div className="ms-2 mt-0 mt-sm-2 d-block">
          <h6 className="mb-0 fs-14 fw-semibold">{row.name}</h6>
          <span className="fs-12 text-muted">{row.email}</span>
      </div>
  </div>  
    },
    {
      name: "DATE",
      selector: row => [row.date],
      sortable: true,
      cell:row=><span className="text-muted fs-15 fw-semibold">{row.date}</span>
    },
    {
      name: "AMOUNT",
      selector: row => [row.amount],
      sortable: true,
      cell:row=><span className="text-muted fs-15 fw-semibold">{row.amount}</span>
    },
    {
      name: "STATUS",
      selector: row => [row.status],
      sortable: true,
      cell: row=><span className={`text-${row.color} fs-15 fw-semibold`}>{row.status}</span>
    },
    {
      name: "ACTION",
      selector: row => [row.action],
      sortable: true,
      cell: row =><span className="">
      <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
      <Link to="#"className="btn btn-primary btn-sm rounded-11 me-2" ><i><svg className="table-edit" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z"/></svg></i></Link>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
      <Link to="#" className="btn btn-danger btn-sm rounded-11"><i><svg className="table-delete" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"/></svg></i></Link>
      </OverlayTrigger>
  </span>
    },
  ]
  const data=[
    {
      id:"1",
      sno:1,
      name:"Jake poole",
      img:user1,
      amount:"$5.321.2",
      email:"jacke123@gmail.com",
      date:"20-11-2020",
      status:"Success",
      color:"success",
    },
    {
      id:"2",
      sno:2,
      name:"Virginia Gray",
      img:user11,
      amount:"$53,3654",
      email:"virginia456@gmail.com",
      date:"20-11-2020",
      status:"Success",
      color:"success",
    },
    {
      id:"3",
      sno:3,
      name:"Jacob Thomson",
      img:user12,
      amount:"$1,56,3654",
      email:"jacobthomson@gmail.com",
      date:"20-11-2020",
      status:"Pending",
      color:"primary",
    },
    {
      id:"4",
      sno:4,
      name:"Trevor Thomson",
      img:user13,
      amount:"$12.3",
      email:"trevor@gmail.com",
      date:"19-11-2020",
      status:"Success",
      color:"success",
    },
    {
      id:"5",
      sno:5,
      name:"Kylie north",
      img:user14,
      amount:"$5.312.2",
      email:"kylie@gmail.com",
      date:"19-11-2020",
      status:"Pending",
      color:"primary",
    },
    {
      id:"6",
      sno:6,
      name:"Jan Hodges",
      img:user5,
      amount:"$5.312.2",
      email:"jan@gmail.com",
      date:"19-11-2020",
      status:"Cancel",
      color:"danger",
    },
    {
      id:"7",
      sno:7,
      name:"Trevor Thomson",
      img:user6,
      amount:"$2,24,1421",
      email:"trevor@gmail.com",
      date:"18-11-2020",
      status:"Success",
      color:"success",
    },
    {
      id:"8",
      sno:8,
      name:"Kylie north",
      img:user7,
      amount:"$5.312.2",
      email:"kylie@gmail.com",
      date:"18-11-2020",
      status:"Cancel",
      color:"danger",
    },
    {
      id:"9",
      sno:9,
      name:"Emily Lewis",
      img:user1,
      amount:"$9.321.2",
      email:"emily@gmail.com",
      date:"18-11-2020",
      status:"Pending",
      color:"primary",
    },
    {
      id:"10",
      sno:10,
      name:"Jan Hodges",
      img:user11,
      amount:"$243,654",
      email:"jan@gmail.com",
      date:"17-11-2020",
      status:"Pending",
      color:"primary",
    },
    {
      id:"11",
      sno:11,
      name:"Trevor Thomson",
      img:user1,
      amount:"$243,654",
      email:"trevor@gmail.com",
      date:"17-11-2020",
      status:"Success",
      color:"success",
    },
  ]
        const tableDatas = {
          columns,
        data,
        };
        return(
          <DataTableExtensions {...tableDatas} >
          <DataTable 
           columns={columns}  
         data={data}
          noHeader
          defaultSortField="id"
          defaultSortAsc={false}
          striped={true}
          center={true}
          persistTableHead
          pagination
          highlightOnHover />
          </DataTableExtensions>
        )
      }
