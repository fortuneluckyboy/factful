import { useRouter } from 'next/router';

const Content = () => {
  const router = useRouter();
  return (
    <>
      <h1>{router.query.id}</h1>e
      
    </>
  );
};

export default  Content;