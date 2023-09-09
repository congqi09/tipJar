import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { api } from 'utils/api';

const UserPage: NextPage = () => {  
  const [output, setOutput] = useState("");
  const { mutate: test } = api.user.test.useMutation({
    onSuccess: (res) => {
      setOutput(res);
    },
  });

  useEffect(() => 
    {
      test({request: "ping"});
    }, 
  []);

  return (
    <div>
        <h1>user</h1>
        <p>test api: {output}</p>
    </div>
  );
};

export default UserPage;