import React, { useState, useEffect } from 'react';
import {
  Container,
  CssBaseline,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button
} from '@mui/material';
import { styled } from '@mui/system';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Navbar = styled('nav')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'white',
  padding: '10px 20px',
});

const NavbarBrand = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const NavbarLogo = styled('img')({
  height: 40,
  maxWidth: '100%',
});

const StatusCell = styled(TableCell)(({ status }) => ({
  color: status === 'Failed' ? 'red' : 'green',
}));

const InfoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  gap: '1rem',
  paddingTop: '.5rem',
  paddingBottom: '1rem',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  maxWidth: 900,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const Information = styled(Button)({
  background: '#0D6DB7',
  borderRadius: '0.5rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  boxShadow: '3px 3px 21px gray',
  textAlign: 'center',
  color: '#fefefe',
 
  fontWeight: 300,
  '&:hover': {
    backgroundColor: '#0D6DB7', 
  },
  '&:active': {
    boxShadow: 'none', 
  }
});

const StyledTableCell = styled(TableCell)({
  backgroundColor: '#8DC63F',  
  color: 'white',  
});

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#f2f2f2',  // light grey background for odd rows
  },
  '&:nth-of-type(even)': {
    backgroundColor: 'white',  // white background for even rows
  },
}));

const Result = () => {
  const { email } = useParams();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(`http://localhost:8001/api/v1/Students/results`);
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching results:', error);
      }
    };

    fetchResults();
  }, [email]);

  return (
    <>
      <CssBaseline />
      <Navbar>
        <NavbarBrand>
          <a href="#">
            <NavbarLogo src="./smit.png" alt="Logo" />
          </a>
        </NavbarBrand>
      </Navbar>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom color="#0D6DB7">
          Student Results
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Username</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Exam Status</StyledTableCell>
                <StyledTableCell>Exam Total Points</StyledTableCell>
                <StyledTableCell>Exam Points Earned</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student, index) => (
                <StyledTableRow key={index}>
                  <TableCell>{student.username}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <StatusCell status={student.status}>{student.status}</StatusCell>
                  <TableCell>{student.totalPoints}</TableCell>
                  <TableCell>{student.pointsEarned}</TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <InfoContainer>
        <Information>
          <Typography variant="h6">Student Average</Typography>
        </Information>
        <Information>
          <Typography variant="h6">Passing Ratio</Typography>
        </Information>
        <Information>
          <Typography variant="h6">Highest Marks</Typography>
        </Information>
      </InfoContainer>
    </>
  );
};

export default Result;
