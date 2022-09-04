import ReactApexChart from "react-apexcharts";
import React from "react"

export class Apexcharts extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: [44, 55,78 ],
            options: {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 380
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
          
          
          };
        }

      

        render() {
          return (
            

      <div id="chart">
  <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={380} />
</div>
          );
        }
      }

export class Apexcharts2 extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: [21, 65, 33, 43,],
                 
            options: {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                   width: 380
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
          
          
          };
        }

      

        render() {
          return (
            

      <div id="chart">
  <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={380} />
</div>
    

          );
        }
      }
export class Apexcharts3 extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: [31, 56, 43, 41, 52],
                 
            options: {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                   width: 380
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
          
          
          };
        }

      

        render() {
          return (
            

      <div id="chart">
  <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={380} />
</div>
    

          );
        }
      }
export class Apexcharts4 extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: [21, 65, 33, 43,59,63],
                 
            options: {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                   width: 380
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
          
          
          };
        }

      

        render() {
          return (
            

      <div id="chart">
  <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={380} />
</div>
    

          );
        }
      }