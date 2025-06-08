import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import {useMemo} from 'react';

function About() {
  const cardId = useMemo(() => crypto.randomUUID(), []);

  return (
    <>
      <Header />
      <div>
        <Card
          id= {cardId}
          title="This is the about page of My Application"
          content="This is a simple card component that displays a title and some content."
        />
      </div>
    </>
  );
}
export default About;