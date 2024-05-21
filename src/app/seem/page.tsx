"use client"; 

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';

interface Column {
  id: 'name' | 'code' | 'population' | 'size' | 'add' | ''; // Add 'actions' here
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
  {
    id: 'actions', // Added column for actions
    label: 'Add',
    minWidth: 100,
    align: 'right',
  },
];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(
  name: string,
  code: string,
  population: number,
  size: number,
): Data {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEdit = (code: string) => {
    // Your edit logic here
    console.log(`Edit button clicked for code: ${code}`);
  };

  const handleDelete = (code: string) => {
    // Your delete logic here
    console.log(`Delete button clicked for code: ${code}`);
  };

  return (
   

<div>
    <div className='flex justify-center py-20'>
         <img className='rounded-lg' src='https://i.pinimg.com/564x/1e/5b/47/1e5b47adab1abec77d3e52a8697ea867.jpg' ></img>
         </div>

   <div className='flex justify-center text-emerald-500 text-5xl'>S EE M </div>
   <div className='flex justify-center text-emerald-300 text-1xl '>orginalzation</div>


  <div className='flex justify-center mt-20'>  
  <div className=' space-y-6'>
        <input 
        className='border border-green-300 rounded-full px-10 py-2 '
        placeholder='username'/>
        <br></br>
        <input 
        className='border border-green-300 rounded-full px-10 py-2 '
        placeholder='cute pie'/>
</div>
    </div>
  
    <span className='flex text-green-600 justify-center text-2xl py-10 px-2'>WELCOME TO SEE M SEASON</span>

    <div className='mt-8 flex px-6 justify-center space-x-5'>
      <div className='flex items-center space-x-4'>
        <div className='flex flex-col'>
          <span>wimter 00 TIME</span>
          <span className='flex text-cyan-300'>Nature</span>
        </div>

        <div className='flex flex-col'>
          <span>summer 00 TIME</span>
          <span className='flex text-amber-300 '>Nature</span>
        </div>

        <div className='flex flex-col'>
          <span>raining 00 TIME</span>
          <span className='flex text-violet-300 '>Nature</span>
        </div>
         
      </div>
    </div>
   

    <span className='flex text-sky-300 justify-center text-2xl py-9'> WINTER SEASON</span>
    <div className='flex justify-center py-10 '>
    <img className='rounded-lg' src='https://i.pinimg.com/564x/96/4e/ae/964eaed430c0ef4222be33670076df02.jpg'></img>
    </div>

    

    <span className='flex text-green-400 justify-center py-10'> don't have account?</span>

    <div className='flex justify-center mt-5 '>
      
      
        <button  className='btn bg-cyan-300 w-20 rounded-3xl py-3 text-stone-950  focus:outline-none focus:ring-sky-100 me-2 mb-2 mt-5 shadow-lg hover:bg-gradient-to-bl focus:ring-4'>add</button>
        <button className='btn bg-violet-300 w-40  rounded-3xl py-3 text-stone-950  focus:outline-none focus:ring-violet-200 me-2 mb-2 mt-5 shadow-lg hover:bg-gradient-to-bl focus:ring-4'>edit my season</button>
        <button className='btn bg-rose-200  w-20  rounded-3xl py-3 text-stone-950   focus:outline-none focus:ring-rose-100 me-2 mb-2 mt-5 shadow-lg hover:bg-gradient-to-bl focus:ring-4'>delete</button>
    </div>

      <Paper sx={{ width: '80%', overflow: 'hidden', margin: '10%' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    sx={{
                      minWidth: column.minWidth,
                      backgroundColor: '#EBFACF',
                      color: column.color || '#002324', 
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        if (column.id === 'actions') {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <button className='btn bg-violet-300 w-40  rounded-3xl py-3 text-stone-950  focus:outline-none focus:ring-violet-200 me-2 mb-2 mt-5 shadow-lg hover:bg-gradient-to-bl focus:ring-4' onClick={() => handleEdit(row.code)}>edit my season</button>
                               <button className='btn bg-rose-200  w-20  rounded-3xl py-3 text-stone-950   focus:outline-none focus:ring-rose-100 me-2 mb-2 mt-5 shadow-lg hover:bg-gradient-to-bl focus:ring-4' onClick={() => handleDelete(row.code)}>delete</button>
                            </TableCell>
                          );
                        } else {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        }
                      })}
                    </TableRow>
                  )
                }
              )
            }
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      rowsPerPageOptions={[10, 25, 100]}
      component="div"
      count={rows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </Paper>
</div>
);
}