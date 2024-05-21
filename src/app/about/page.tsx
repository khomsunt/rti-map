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
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface Column {
  id: 'name' | 'code' | 'population' | 'size' | 'density' | 'actions';
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
  { id: 'actions', label: 'Actions', minWidth: 170, align: 'right' },
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

const initialRows = [
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
  const [rows, setRows] = React.useState(initialRows);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [editRow, setEditRow] = React.useState<Data | null>(null);
  const [isAddMode, setIsAddMode] = React.useState(false);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = (code: string) => {
    if (confirm('คุณต้องการลบข้อมูลหรือไม่')) {
      setRows(rows.filter((row) => row.code !== code));
    }
  };

  const handleEdit = (row: Data) => {
    setEditRow(row);
    setIsAddMode(false);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditRow({
      name: '',
      code: '',
      population: 0,
      size: 0,
      density: 0,
    });
    setIsAddMode(true);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditRow(null);
  };

  const handleSave = () => {
    if (editRow) {
      if (isAddMode) {
        setRows([...rows, editRow]);
      } else {
        setRows(rows.map((row) => (row.code === editRow.code ? editRow : row)));
      }
      handleClose();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editRow) {
      const { name, value } = e.target;
      const updatedRow = { ...editRow, [name]: value };
      if (name === 'population' || name === 'size') {
        const population = name === 'population' ? Number(value) : editRow.population;
        const size = name === 'size' ? Number(value) : editRow.size;
        updatedRow.density = size > 0 ? population / size : 0;
      }
      setEditRow(updatedRow);
    }
  };

  return (
    <Paper sx={{ width: '80%', overflow: 'hidden', margin: '10%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <Button onClick={handleAdd} variant="contained" color="primary">
          Add
        </Button>
      </Box>
      <TableContainer sx={{ maxHeight: 'calc(100vh - 190px)', overflow: 'auto' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{
                    minWidth: column.minWidth,
                    backgroundColor: '#FF9999',
                    color: column.color || '#333',
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
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === 'actions' ? (
                            <>
                              <Button
                                onClick={() => handleEdit(row)}
                                variant="contained"
                                color="primary"
                                sx={{ marginRight: 1 }}
                              >
                                เเก่ไข
                              </Button>
                              <Button
                                onClick={() => handleDelete(row.code)}
                                variant="contained"
                                color="secondary"
                              >
                                ลบ
                              </Button>
                            </>
                          ) : column.format && typeof value === 'number' ? (
                            column.format(value)
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
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
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 3, bgcolor: 'background.paper', margin: 'auto', top: '50%', left: '50%', position: 'absolute', transform: 'translate(-50%, -50%)', boxShadow: 24 }}>
          <TextField label="Name" name="name" value={editRow?.name || ''} onChange={handleChange} />
          <TextField label="ISO Code" name="code" value={editRow?.code || ''} onChange={handleChange} disabled={!isAddMode} />
          <TextField label="Population" name="population" type="number" value={editRow?.population || ''} onChange={handleChange} />
          <TextField label="Size (km²)" name="size" type="number" value={editRow?.size || ''} onChange={handleChange} />
          <TextField label="Density" name="density" type="number" value={editRow?.density.toFixed(2) || ''} onChange={handleChange} disabled />
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </Modal>
    </Paper>
  );
}
