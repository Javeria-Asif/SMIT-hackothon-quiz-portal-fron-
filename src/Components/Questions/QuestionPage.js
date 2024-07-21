
import React, { useState } from 'react';
import { Button, Typography, Container, Grid, Paper, Box } from '@mui/material';

const QuestionPage = () => {
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
  const [answer, setAnswer] = useState('');

  const handleAnswer = (selectedAnswer) => {
    setAnswer(selectedAnswer);
    setIsQuestionAnswered(true);
  };

  const handleNext = () => {
    // Logic for the Next button
    console.log("Next button clicked");
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'gainsboro' }}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ padding: '24px', textAlign: 'center', borderRadius: '12px' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            What does HTML stand for?
          </Typography>
          <Grid container spacing={2} justifyContent="center" sx={{ marginTop: '16px' }}>
            {['Hyper Text Markup Language', 'Hyperlinks Text Markup Language', 'Home Tool Markup Language', 'Hyperlinking Text Mark Language'].map((option, index) => (
              <Grid item xs={10} sm={5} md={5} key={index}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </Button>
              </Grid>
            ))}
          </Grid>
          {isQuestionAnswered && (
            <Typography variant="body1" sx={{ marginTop: '16px' }}>
              The correct answer is: Hyper Text Markup Language
            </Typography>
          )}
          <Box sx={{ marginTop: '24px' }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleNext}
              sx={{ padding: '10px 20px', borderRadius: '8px' }}
            >
              Next
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default QuestionPage;











