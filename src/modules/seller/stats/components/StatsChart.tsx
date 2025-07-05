import { Box, Typography } from '@mui/material';
// import {
//     PieChart, Pie, Cell,
//     BarChart, Bar, XAxis, YAxis,
//     Tooltip, ResponsiveContainer,
// } from 'recharts';

interface StatsChartProps {
    selectedIndex: number | null;
    title?: string;
}

// const chartData: { [key: number]: JSX.Element } = {
//     0: (
//         <BarChart width={300} height={200} data={[{ name: 'Ocak', siparis: 400 }, { name: 'Şubat', siparis: 300 }]}>
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="siparis" fill="#8884d8" />
//         </BarChart>
//     ),
//     1: (
//         <ResponsiveContainer width="100%" height={250}>
//             <BarChart data={[{ name: 'Bugün', siparis: 85 }, { name: 'Dün', siparis: 72 }]}>
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="siparis" fill="#82ca9d" />
//             </BarChart>
//         </ResponsiveContainer>
//     ),
//     2: (
//         <ResponsiveContainer width="100%" height={250}>
//             <BarChart data={[{ name: 'Nisan', gelir: 32000 }, { name: 'Mart', gelir: 28000 }]}>
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="gelir" fill="#ffc658" />
//             </BarChart>
//         </ResponsiveContainer>
//     ),
//     7: (
//         <ResponsiveContainer width="100%" height={250}>
//             <PieChart>
//                 <Pie data={[{ name: 'Beğeni', value: 92 }, { name: 'Diğer', value: 8 }]} dataKey="value" outerRadius={80}>
//                     <Cell fill="#82ca9d" />
//                     <Cell fill="#d0d0d0" />
//                 </Pie>
//                 <Tooltip />
//             </PieChart>
//         </ResponsiveContainer>
//     ),
// };

const StatsChart = ({ selectedIndex, title }: StatsChartProps) => {
    return (
        <Box mt={5} p={3} bgcolor="#fafafa" borderRadius={3} boxShadow={2}>
            <Typography variant="h6" mb={2}>
                {selectedIndex !== null ? `${title} Grafiği` : 'Seçilen grafik yok'}
            </Typography>
            {/* {selectedIndex !== null && chartData[selectedIndex] ? chartData[selectedIndex] : <Typography>Grafik mevcut değil.</Typography>} */}
        </Box>
    );
};

export default StatsChart;
