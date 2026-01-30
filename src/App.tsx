import Action from "./components/section/action";
import Advice from "./components/section/advice";
import Commitment from "./components/section/commitment";
import Connection from "./components/section/connection";
import DrainageSystem from "./components/section/drainage-system";
import Header from "./components/section/header";
import Hero from "./components/section/hero";
import Ingredients from "./components/section/ingredients";
import MissingPiece from "./components/section/missing-piece";
import Mission from "./components/section/mission";
import Press from "./components/section/press";
import Questions from "./components/section/questions";
import Reviews from "./components/section/reviews";
import Stories from "./components/section/stories";

export function App() {
  return (
    <main className="font-nunito tracking-[0.035em] leading-[1.3em]">
      <Header />
      <Hero />
      <Press />
      <Connection />
      <DrainageSystem />
      <MissingPiece />
      <Ingredients />
      <Reviews />
      <Commitment />
      <Advice />
      <Stories />
      <Questions />
      <Mission />
      <Action />
    </main>
  );
}

export default App;
