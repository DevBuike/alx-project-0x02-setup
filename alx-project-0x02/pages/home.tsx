import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';

function Home() {
  return (
    <>
      <Header />
      <div>
        <Card
          id= {crypto.randomUUID()}
          title="Welcome to My Application"
          content="This is a simple card component that displays a title and some content."
        />
      </div>
    </>
  );
}
export default Home;