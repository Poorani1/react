import "./paralleltrendtable.css";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(-12, 159, 6.0, 24, 4.0),
  createData(-11, 237, 9.0, 37, 4.3),
  createData(-10, 262, 16.0, 24, 6.0),
  createData(-95, 305, 3.7, 67, 4.3),
  createData(-8, 356, 16.0, 49, 3.9),
];

export default function Paralleltrendtable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ backgroundColor: "rgb(242, 246, 247)", border: "2px solid white" }} colSpan="3">Matched-UnWeighted</TableCell>
            <TableCell align="center" sx={{ backgroundColor: "rgb(242, 246, 247)", border: "2px solid white" }} colSpan="3">Matched-Weighted</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" sx={{ backgroundColor: "rgb(242, 246, 247)", border: "2px solid white" }}>Months</TableCell>
            <TableCell align="center" sx={{ backgroundColor: "rgb(242, 246, 247)", border: "2px solid white" }}>Control</TableCell>
            <TableCell align="center" sx={{ backgroundColor: "rgb(242, 246, 247)", border: "2px solid white" }}>Study</TableCell>
            <TableCell align="center" sx={{ backgroundColor: "rgb(242, 246, 247)", border: "2px solid white" }}>Months</TableCell>
            <TableCell align="center" sx={{ backgroundColor: "rgb(242, 246, 247)", border: "2px solid white" }}>Control</TableCell>
            <TableCell align="center" sx={{ backgroundColor: "rgb(242, 246, 247)", border: "2px solid white" }}>Study</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}