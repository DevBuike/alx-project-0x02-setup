import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';

function About() {
  return (
    <>
      <Header />
      <div>
        <Card
          id= {crypto.randomUUID()}
          title="This is the about page of My Application"
          content="This is a simple card component that displays a title and some content."
        />
      </div>
    </>
  );
}
export default About;