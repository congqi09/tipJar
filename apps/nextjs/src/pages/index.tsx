import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const HomePage: NextPage = () => {
  const { push } = useRouter();

  return (
    <div>
      <h1>Hello World!</h1>
      <a href="/user">user</a>
    </div>
  );
};

export default HomePage;
