
// import React from 'react';
// import { Container, Typography, Paper, Button, Box, Grid } from "@mui/material";

// const QuizPage = () => {
//   return (
//     <div className='color'>
//     <Container maxWidth="md" >
//       <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         minHeight="calc(100vh - 100px)"
//       >
//         <Box textAlign="center" width="100%">
//           {/* <Typography variant="h6" color="primary" gutterBottom>
//             Multiple Choice
//           </Typography> */}
//           <Typography variant="h4" color="primary" gutterBottom>
//             SELECT YOUR COURSE
//           </Typography>
//           <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
//             <Grid item xs={12} md={4}>
//               <Paper
//                 elevation={6}
//                 sx={{
//                   p: 6,
//                   backgroundColor: '#0D6DB7', // Blue color
//                   color: 'white',
//                   textAlign: 'center',
//                   borderRadius: 2,
//                   minHeight: 100
//                 }}
//               >
//                 <Typography variant="h6">
//                  WEB AND MOBILE APP DEVELOPMENT
//                 </Typography>
//               </Paper>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Paper
//                 elevation={6}
//                 sx={{
//                   p: 6,
//                   backgroundColor: ' #0D6DB7', // Green color
//                   color: 'white',
//                   textAlign: 'center',
//                   borderRadius: 2,
//                   minHeight: 100 ,
//                   fontFamily : 'Times New Roman',
//                 }}
//               >
//                 <Typography variant="h6">
//                   PYTHON
//                 </Typography>
//               </Paper>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Paper
//                 elevation={6}
//                 sx={{
//                   p: 6,
//                   backgroundColor: '#0D6DB7', // Blue color
//                   color: 'white',
//                   textAlign: 'center',
//                   borderRadius: 2,
//                   minHeight: 100
//                 }}
//               >
//                 <Typography variant="h6">
//                   GRAPHIC DESGIN
//                 </Typography>
//               </Paper>
//             </Grid>
//           </Grid>
//           <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
//             <Button variant="contained" sx={{ backgroundColor: '#8DC63F', color: 'white' }}>
//                next
//             </Button>
//           </Box>
//         </Box>
//       </Box>
//     </Container>
// </div>
//   );
// };

// export default QuizPage;













import React from 'react';
import { Container, Typography, Paper, Button, Box, Grid } from "@mui/material";

const QuizPage = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'gainsboro' }}>

    <Container maxWidth="md" >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="calc(100vh - 100px)"
      >
        <Box textAlign="center" width="100%">
          {/* <Typography variant="h6" color="primary" gutterBottom>
            Multiple Choice
          </Typography> */}
          <Typography variant="h4" color="primary" gutterBottom>
            SELECT YOUR COURSE
          </Typography>
          <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={6}
                sx={{
                  p: 6,
                  backgroundColor: '#0D6DB7', // Blue color
                  color: 'white',
                  textAlign: 'center',
                  borderRadius: 2,
                  minHeight: 100
                }}
              >
                <Typography variant="h6">
                 WEB AND MOBILE APP DEVELOPMENT
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={6}
                sx={{
                  p: 6,
                  backgroundColor: '#0D6DB7', // Green color
                  color: 'white',
                  textAlign: 'center',
                  borderRadius: 2,
                  minHeight: 100
                }}
              >
                <Typography variant="h6">
                  graphic desgin
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={6}
                sx={{
                  p: 6,
                  backgroundColor: '#0D6DB7', // Blue color
                  color: 'white',
                  textAlign: 'center',
                  borderRadius: 2,
                  minHeight: 100
                }}
              >
                <Typography variant="h6">
                  narbacular drop
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
            <Button variant="contained" sx={{ backgroundColor: '#8DC63F', color: 'white' }}>
              Show answers
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
    </Box>
  );
};

export default QuizPage