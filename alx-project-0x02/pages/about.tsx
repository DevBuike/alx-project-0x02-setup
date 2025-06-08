import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import {useMemo} from 'react';
import Button from '@/components/common/Button';
// import { ButtonProps } from '@/interfaces'; // Uncomment if you need to use ButtonProps

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
      <div className="flex gap-4">
        <Button size="small" shape="rounded-sm">
          Small Button
        </Button>
        <Button size="medium" shape="rounded-md">
          Medium Button
        </Button>
        <Button size="large" shape="rounded-full">
          Large Rounded Button
        </Button>
      </div>
    </>
  );
}
export default About;