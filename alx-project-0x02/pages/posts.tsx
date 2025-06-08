import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import {useMemo} from 'react';
import Button from '@/components/common/Button';
// import { ButtonProps } from '@/interfaces'; // Uncomment if you need to use ButtonProps

function Posts() {
  const cardId = useMemo(() => crypto.randomUUID(), []);

  return (
    <>
      <Header />
      <div>
        <Card
          id= {cardId}
          title="This is the posts page of My Application"
          content="This is a simple card component that displays a title and some content."
        />
      </div>
    </>
  );
}
export default Posts;