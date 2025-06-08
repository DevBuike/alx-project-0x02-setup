import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import {useMemo} from 'react';

function Home() {
  const cardId = useMemo(() => crypto.randomUUID(), []);

  return (
    <>
      <Header />
      <div>
        <Card
          id= {cardId}
          title="Welcome to My Application"
          content="This is a simple card component that displays a title and some content."
        />
      </div>
    </>
  );
}
export default Home;