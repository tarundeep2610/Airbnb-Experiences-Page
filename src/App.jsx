import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Card from "./Card";
import CardData from './data';

function App() {
  const cards= CardData.map(
    item => {
      return (
        <Card key={'card_'+item.id} item={item}>
        </Card>
      );
    }
  );

  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <div className="card-container">
        {cards}
      </div>
    </>
  );
}

export default App
