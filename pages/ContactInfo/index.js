import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios"
import Swal from "sweetalert2";

const ContactInfo = ({ user }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [event, setEvent] = useState([...user]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataList.length) : 0;


    const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`http://localhost:5000/contact/${id}`)
            .then((res) => {
              Swal.fire({
                icon: "success",
                text: res.data,
              });
              setEvent(event.filter((item) => item._id !== id));
            })
            .catch((error) => {
              Swal.fire({
                icon: "error",
                text: "Failed Try Again!",
              });
            });
        }
      });
    };
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "left" }}>
        <h2>Contact Information</h2>
      </Box>

      <Grid container>
        <Grid item xs={12} md={8}>
          <TableContainer component={Paper} sx={{ mt: 5 }}>
            <Typography
              variant="h4"
              color="#7CACAD"
              sx={{ textAlign: "center" }}
            >
              Contact Info tabel
            </Typography>
            <Table sx={{ minWidth: 100 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>SL</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Messages</TableCell>
                  <TableCell> Email</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {event
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow
                      key={row._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <b>{index + 1}</b>
                      </TableCell>
                      <TableCell>{row.name}</TableCell>

                      <TableCell>{row.email}</TableCell>

                      <TableCell>{row.message}</TableCell>

                      <TableCell align="center">
                        {/* 
                        useing as properties to hide the url objects  */}
                        {/* <Link
                           href={{
                            pathname: `/ContactInfo/[id]`,
                            query: {
                               row: (JSON.stringify(row)) , 
                             

                            },
                          }}
                         as="/ContactInfoUpdate"
                        >  */}
                        <Link href={`/ContactInfo/${row._id}`}
                        >
                          <Button>
                            <EditIcon />
                          </Button>
                        </Link>
                        <Button
                          color="error"
                           onClick={() => handleDelete(row._id)}
                        >
                          <DeleteIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}

                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <Divider />
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={event.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/contact");
  const user = await res.json();

  return {
    props: { user }, // will be passed to the page component as props
  };
}

export default ContactInfo;
