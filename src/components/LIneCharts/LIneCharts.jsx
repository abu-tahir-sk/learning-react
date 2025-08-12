import { LineChart, Line, XAxis, YAxis } from 'recharts';

const LIneCharts = () => {

const studentMarks = [
  { name: "A", math: 78, physics: 82, chemistry: 75 },
  { name: "B", math: 85, physics: 79, chemistry: 88 },
  { name: "C", math: 92, physics: 91, chemistry: 89 },
  { name: "D", math: 66, physics: 72, chemistry: 70 },
  { name: "E", math: 74, physics: 77, chemistry: 73 },
  { name: "F", math: 88, physics: 85, chemistry: 84 },
  { name: "G", math: 95, physics: 94, chemistry: 90 },
  { name: "H", math: 59, physics: 65, chemistry: 60 },
  { name: "I", math: 81, physics: 78, chemistry: 82 },
  { name: "J", math: 70, physics: 68, chemistry: 72 }
];
      return (
            <div>
              <LineChart width={500} height={400} 
              data={studentMarks}>
                  <XAxis dataKey="name"></XAxis>
                  <YAxis></YAxis>
             <Line dataKey="math"></Line>      
             <Line dataKey="physics" stroke='yellow'></Line>      
            </LineChart>    
            </div>
      );
};

export default LIneCharts;