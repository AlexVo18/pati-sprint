// import Action from "./components/section-old/action";
// import Advice from "./components/section-old/advice";
// import Commitment from "./components/section-old/commitment";
// import Connection from "./components/section-old/connection";
// import DrainageSystem from "./components/section-old/drainage-system";
// import Header from "./components/section-old/header";
// import Hero from "./components/section-old/hero";
// import Ingredients from "./components/section-old/ingredients";
// import MissingPiece from "./components/section-old/missing-piece";
// import Mission from "./components/section-old/mission";
// import Press from "./components/section-old/press";
// import Questions from "./components/section-old/questions";
// import Reviews from "./components/section-old/reviews";
// import Stories from "./components/section-old/stories";

import Ambassadors from "./components/section/ambassadors";
import BeckhamStack from "./components/section/beckham-stack";
import Content from "./components/section/content";
import Experts from "./components/section/experts";
import Faqs from "./components/section/faqs";
import Footer from "./components/section/footer";
import GetStarted from "./components/section/get-started";
import Header from "./components/section/header";
import Hero from "./components/section/hero";
import MonthlyBreakdown from "./components/section/monthly-breakdown";
import OrganSystems from "./components/section/organ-systems";
import Pillars from "./components/section/pillars";
import Premium from "./components/section/premium";
import Preparation from "./components/section/preparation";
import Reviews from "./components/section/reviews";
import Standard from "./components/section/standard";
import Team from "./components/section/team";
import Testament from "./components/section/testament";

export function App() {
  return (
    <main className="font-aeonik">
      <Header />
      <Hero />
      <Testament />
      <Reviews />
      <OrganSystems />
      <MonthlyBreakdown />
      <Standard />
      <Pillars />
      <Experts />
      <Content />
      <Preparation />
      <GetStarted />
      <Ambassadors />
      <Team />
      <BeckhamStack />
      <Premium />
      <Faqs />
      <Footer />
    </main>
  );
}

export default App;
