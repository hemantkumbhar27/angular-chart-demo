import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import * as echarts from 'echarts';
import 'echarts/dist/extension/dataTool'; // Import dataTool for Boxplot preparation
// import { SankeySeriesOption } from 'echarts'; 

@Component({
  selector: 'app-chart-demo',
  templateUrl: './chart-demo.component.html',
  styleUrls: ['./chart-demo.component.css']
})

export class ChartDemoComponent implements OnInit {
chartData: any;



  ngOnInit(): void {
  }
  
  chartOptions: EChartsOption = {
    title: {
      text: 'Bar Chart'
    },
    tooltip: {},
    xAxis: {
      type: 'category',  // Explicitly set the axis type
      data: ['A', 'B', 'C', 'D', 'E']
    },
    yAxis: {
      type: 'value'  // Explicitly set the axis type
    },
    series: [
      {
        type: 'bar',
        data: [5, 20, 36, 10, 10]
      }
    ]
  };
  

  lineChartOptions: EChartsOption = {
    title: {
      text: 'Line Chart Example'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Sales',
        type: 'line',
        data: [150, 230, 224, 218, 135, 147]
      }
    ]
  };

  pieChartOptions: EChartsOption = {
    title: {
      text: 'Sales by Category',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Sales',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Electronics' },
          { value: 735, name: 'Apparel' },
          { value: 580, name: 'Grocery' },
          { value: 484, name: 'Books' },
          { value: 300, name: 'Furniture' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  scatterChartOptions: EChartsOption = {
    responsive: true, // Enables resizing
    maintainAspectRatio: false, // Allows height to adjust independently of width
    title: {
      text: 'Scatter Plot Example'
    },
    tooltip: {
      trigger: 'item'
    },
    xAxis: {
      type: 'value',
      name: 'X Axis',
      min: 0,
      max: 100
    },
    yAxis: {
      type: 'value',
      name: 'Y Axis',
      min: 0,
      max: 100
    },
    series: [
      {
        name: 'Data Points',
        type: 'scatter',
        data: [
          [10, 20],
          [30, 40],
          [50, 60],
          [70, 80],
          [90, 10]
        ],
        symbolSize: 10,
        itemStyle: {
          color: '#3398DB'
        }
      }
    ]
  };

  treeChartOptions: EChartsOption = {
    title: {
      text: 'Treemap Example',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}'
    },
    series: [
      {
        type: 'treemap',
        data: [
          {
            name: 'Electronics',
            value: 10,
            children: [
              { name: 'Smartphones', value: 4 },
              { name: 'Laptops', value: 3 },
              { name: 'Tablets', value: 3 }
            ]
          },
          {
            name: 'Apparel',
            value: 8,
            children: [
              { name: 'Shirts', value: 3 },
              { name: 'Shoes', value: 5 }
            ]
          },
          {
            name: 'Groceries',
            value: 6,
            children: [
              { name: 'Fruits', value: 2 },
              { name: 'Vegetables', value: 4 }
            ]
          }
        ]
      }
    ]
  };

  parallelChartOptions: EChartsOption = {
    title: {
      text: 'Parallel Coordinates Example',
      left: 'center'
    },
    parallelAxis: [
      { dim: 0, name: 'Metric 1' },
      { dim: 1, name: 'Metric 2' },
      { dim: 2, name: 'Metric 3' },
      { dim: 3, name: 'Metric 4' }
    ],
    series: [
      {
        type: 'parallel',
        lineStyle: {
          width: 2
        },
        data: [
          [10, 20, 30, 40],
          [25, 15, 35, 45],
          [20, 10, 40, 30],
          [15, 25, 20, 50]
        ]
      }
    ]
  };

  calenderChartOptions: EChartsOption = {
    title: {
      text: 'Calendar Chart Example',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: (params: any) => `${params.value[0]}: ${params.value[1]}`
    },
    visualMap: {
      min: 0,
      max: 100,
      type: 'continuous',
      orient: 'horizontal',
      left: 'center',
      top: 'top',
      inRange: {
        color: ['#e0ffff', '#006edd']
      }
    },
    calendar: {
      range: '2025',
      cellSize: ['auto', 20]
    },
    series: [
      {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: this.getCalendarData()
      }
    ]
  };

  // Generate random data for the calendar
  getCalendarData(): [string, number][] {
    const data: [string, number][] = [];
    for (let i = 1; i <= 365; i++) {
      const date = new Date(2025, 0, i);
      const formattedDate = date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
      data.push([formattedDate, Math.floor(Math.random() * 100)]);
    }
    return data;
  }


  radarChartOptions: EChartsOption = {
    title: {
      text: 'Radar Chart Example',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      data: ['Person A', 'Person B'],
      top: 'bottom'
    },
    radar: {
      indicator: [
        { name: 'Strength', max: 100 },
        { name: 'Speed', max: 100 },
        { name: 'Stamina', max: 100 },
        { name: 'Agility', max: 100 },
        { name: 'Intelligence', max: 100 }
      ]
    },
    series: [
      {
        name: 'Comparison',
        type: 'radar',
        data: [
          {
            value: [85, 90, 80, 70, 95],
            name: 'Person A'
          },
          {
            value: [70, 75, 85, 80, 90],
            name: 'Person B'
          }
        ]
      }
    ]
  };


  heatMapChartOptions: EChartsOption = {
    title: {
      text: 'Heatmap Example',
      left: 'center'
    },
    tooltip: {
      position: 'top',
      formatter: (params: any) => `(${params.value[0]}, ${params.value[1]}): ${params.value[2]}`
    },
    xAxis: {
      type: 'category',
      data: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      splitArea: { show: true }
    },
    yAxis: {
      type: 'category',
      data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      splitArea: { show: true }
    },
    visualMap: {
      min: 0,
      max: 100,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '15%'
    },
    series: [
      {
        name: 'Heatmap Data',
        type: 'heatmap',
        data: this.generateHeatmapData(),
        label: {
          show: true
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  // Generate random data for the heatmap
  generateHeatmapData(): [string, string, number][] {
    const data: [string, string, number][] = [];
    const categoriesX = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const categoriesY = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    for (const x of categoriesX) {
      for (const y of categoriesY) {
        data.push([x, y, Math.floor(Math.random() * 100)]);
      }
    }

    return data;
  }


  sunburstChartOptions: EChartsOption = {
    title: {
      text: 'Sunburst Chart Example',
      left: 'center'
    },
    series: [
      {
        type: 'sunburst',
        data: [
          {
            name: 'Category A',
            children: [
              { name: 'Subcategory A1', value: 10 },
              { name: 'Subcategory A2', value: 20 }
            ]
          },
          {
            name: 'Category B',
            children: [
              { name: 'Subcategory B1', value: 15 },
              { name: 'Subcategory B2', value: 25 },
              {
                name: 'Subcategory B3',
                children: [
                  { name: 'Sub-Subcategory B3-1', value: 10 },
                  { name: 'Sub-Subcategory B3-2', value: 5 }
                ]
              }
            ]
          },
          {
            name: 'Category C',
            value: 30
          }
        ],
        radius: [0, '90%'],
        label: {
          show: true,
          rotate: 'radial'
        }
      }
    ]
  };

  candlestickChartOptions: EChartsOption = {
    title: {
      text: 'Candlestick Chart Example',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    xAxis: {
      type: 'category',
      data: this.getCategories(),
      scale: true,
      boundaryGap: true,
      axisLine: { onZero: false }
    },
    yAxis: {
      scale: true
    },
    series: [
      {
        name: 'Candlestick Data',
        type: 'candlestick',
        data: this.getCandlestickData(),
        itemStyle: {
          color: '#ec0000', // Color for upward movement
          color0: '#00da3c', // Color for downward movement
          borderColor: '#8A0000',
          borderColor0: '#008F28'
        }
      }
    ]
  };

  // Generate example dates for categories
  getCategories(): string[] {
    return [
      '2023-02-10', '2023-02-11', '2023-02-12', '2023-02-13', '2023-02-14',
      '2023-02-15', '2023-02-16'
    ];
  }

  // Generate sample candlestick data: [Open, Close, Low, High]
  getCandlestickData(): [number, number, number, number][] {
    return [
      [2200, 2300, 2150, 2350],
      [2300, 2320, 2250, 2330],
      [2320, 2250, 2200, 2350],
      [2250, 2300, 2230, 2320],
      [2300, 2360, 2300, 2380],
      [2360, 2400, 2350, 2420],
      [2400, 2390, 2380, 2450]
    ];
  }


  funnelChartOptions: EChartsOption = {
    title: {
      text: 'Funnel Chart Example',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%'
    },
    legend: {
      data: ['Visit', 'Inquiry', 'Quote', 'Order', 'Payment'],
      bottom: '10%'
    },
    series: [
      {
        name: 'Conversion Rate',
        type: 'funnel',
        left: '10%',
        top: 60,
        bottom: 60,
        width: '80%',
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        label: {
          show: true,
          position: 'inside'
        },
        data: [
          { value: 100, name: 'Visit' },
          { value: 80, name: 'Inquiry' },
          { value: 60, name: 'Quote' },
          { value: 40, name: 'Order' },
          { value: 20, name: 'Payment' }
        ]
      }
    ]
  };

  gaugeChartOptions: EChartsOption = {
    title: {
      text: 'Gauge Chart Example',
      left: 'center'
    },
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
      {
        name: 'Performance',
        type: 'gauge',
        detail: { formatter: '{value}%' },
        data: [{ value: 65, name: 'Completion' }],
        axisLine: {
          lineStyle: {
            color: [
              [0.3, '#FF4500'],   // Red for values up to 30%
              [0.7, '#FFA500'],   // Orange for values between 30% and 70%
              [1, '#00FA9A']      // Green for values above 70%
            ],
            width: 10
          }
        },
        pointer: {
          length: '70%',
          width: 5
        }
      }
    ]
  };


  boxplotChartOptions: echarts.EChartsOption;
  

  constructor(){
    const rawData = [
      [850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
      [960, 940, 960, 940, 880, 880, 890, 990, 960, 970, 960, 960, 960, 970, 970, 940, 960, 960, 960, 960],
      [800, 840, 870, 870, 800, 810, 800, 830, 830, 790, 810, 810, 800, 810, 800, 790, 810, 800, 800, 790],
      [890, 810, 810, 820, 880, 880, 820, 810, 860, 880, 870, 870, 860, 840, 840, 850, 850, 850, 840, 840],
      [890, 840, 780, 810, 760, 810, 790, 810, 790, 800, 800, 780, 810, 790, 780, 770, 800, 810, 790, 780]
    ];
    const boxData = this.prepareBoxplotData(rawData);

    this.boxplotChartOptions = {
      title: {
        text: 'Boxplot Chart Example',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: boxData.axisData,
        boundaryGap: true
      },
      yAxis: {
        type: 'value',
        name: 'Value'
      },
      series: [
        {
          name: 'Boxplot',
          type: 'boxplot',
          data: boxData.boxData,
          tooltip: {
            formatter: function (param) {
              return [
                'Upper: ' + param.data[4],
                'Q3: ' + param.data[3],
                'Median: ' + param.data[2],
                'Q1: ' + param.data[1],
                'Lower: ' + param.data[0]
              ].join('<br/>');
            }
          }
        },
        {
          name: 'Outlier',
          type: 'scatter',
          data: boxData.outliers
        }
      ]
    };


    this.graphChartOptions={
      title: {
        text: 'Graph (Network) Chart',
        left: 'center'
      },
      tooltip: {},
      legend: {
        data: ['Friends'],
        left: 'left'
      },
      series: [
        {
          name: 'Friends',
          type: 'graph',
          layout: 'force', // Force-directed layout
          data: [
            { name: 'Node 1', value: 10, symbolSize: 60 },
            { name: 'Node 2', value: 20, symbolSize: 40 },
            { name: 'Node 3', value: 30, symbolSize: 50 },
            { name: 'Node 4', value: 40, symbolSize: 70 },
            { name: 'Node 5', value: 50, symbolSize: 80 }
          ],
          links: [
            { source: 'Node 1', target: 'Node 2' },
            { source: 'Node 1', target: 'Node 3' },
            { source: 'Node 2', target: 'Node 4' },
            { source: 'Node 3', target: 'Node 5' },
            { source: 'Node 4', target: 'Node 5' }
          ],
          emphasis: {
            focus: 'adjacency'
          },
          force: {
            repulsion: 200, // Controls how far nodes are pushed apart
            edgeLength: [50, 100] // Minimum and maximum edge lengths
          },
          lineStyle: {
            width: 2,
            curveness: 0.3
          }
        }
      ]
    };

    
  }

  /**
   * Manual Boxplot Data Preparation
   */
  private prepareBoxplotData(rawData: number[][]) {
    const boxData: number[][] = [];
    const outliers: number[][] = [];
    const axisData: string[] = [];

    rawData.forEach((data, idx) => {
      data.sort((a, b) => a - b); // Sort the data

      // Calculate Q1, Q2 (median), and Q3
      const q1 = this.calculatePercentile(data, 25);
      const q2 = this.calculatePercentile(data, 50);
      const q3 = this.calculatePercentile(data, 75);

      // Calculate IQR (Interquartile Range)
      const iqr = q3 - q1;

      // Determine lower and upper bounds
      const lowerBound = q1 - 1.5 * iqr;
      const upperBound = q3 + 1.5 * iqr;

      // Collect boxplot data
      boxData.push([lowerBound, q1, q2, q3, upperBound]);

      // Collect outliers
      data.forEach((value) => {
        if (value < lowerBound || value > upperBound) {
          outliers.push([idx, value]);
        }
      });

      axisData.push(`Experiment ${idx + 1}`);
    });

    return { boxData, outliers, axisData };
  }

  /**
   * Calculate percentile
   */
  private calculatePercentile(data: number[], percentile: number) {
    const index = (percentile / 100) * (data.length - 1);
    const lower = Math.floor(index);
    const upper = Math.ceil(index);
    if (lower === upper) {
      return data[lower];
    }
    return data[lower] + (index - lower) * (data[upper] - data[lower]);
  }
  
  graphChartOptions: echarts.EChartsOption;

  sankeychartOptions: echarts.EChartsOption = {
    title: {
      text: 'Sankey Diagram Example',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    series: [
      {
        type: 'sankey',
        emphasis: {
          focus: 'adjacency'
        },
        data: [
          { name: 'A' },
          { name: 'B' },
          { name: 'C' },
          { name: 'D' },
          { name: 'E' }
        ],
        links: [
          { source: 'A', target: 'B', value: 10 },
          { source: 'A', target: 'C', value: 15 },
          { source: 'B', target: 'D', value: 20 },
          { source: 'C', target: 'D', value: 25 },
          { source: 'D', target: 'E', value: 30 }
        ],
        lineStyle: {
          color: 'gradient',
          curveness: 0.5
        }
      }
    ]
  };

  themeRiverChartOptions: echarts.EChartsOption = {
    title: {
      text: 'Theme River Chart Example',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line'
      }
    },
    legend: {
      top: 'bottom'
    },
    singleAxis: {
      type: 'time',
      top: 50,
      bottom: 50,
      axisPointer: {
        animation: true
      }
    },
    series: [
      {
        type: 'themeRiver',
        data: [
          ['2025-02-01', 10, 'Flow A'],
          ['2025-02-02', 15, 'Flow A'],
          ['2025-02-03', 18, 'Flow A'],
          ['2025-02-01', 8, 'Flow B'],
          ['2025-02-02', 12, 'Flow B'],
          ['2025-02-03', 20, 'Flow B'],
          ['2025-02-01', 6, 'Flow C'],
          ['2025-02-02', 10, 'Flow C'],
          ['2025-02-03', 14, 'Flow C']
        ]
      }
    ]
  };
  
}
