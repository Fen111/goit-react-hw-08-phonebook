import { Typography } from '@mui/material';
import image from '../images/phonebook.jpg';

export default function HomeView() {
  return (
    <>
      <Typography variant="h2" component="h2" sx={{ textAlign: 'center' }}>
        Welcome to your phone book
      </Typography>
      <img
        src={image}
        alt="homeImage"
        style={{ marginTop: '10px', marginLeft: 'auto', marginRight: 'auto' }}
      />
    </>
  );
}
