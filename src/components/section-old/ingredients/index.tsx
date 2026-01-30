import Container from "@/components/common/container";
import SectionHeader from "@/components/common/typography/section-header";
import { effectImg, effectImgSm, ingredients } from "./mock-data";
import IngredientItem from "./ingredient-item";

const HeaderSubText = () => {
  return (
    <div>
      <p>
        Sculptique is the only formula that addresses ALL 6 mechanisms of
        lymphatic dysfunction simultaneously—not with symbolic doses, but with
        therapeutic amounts based on clinical research.
      </p>
      <p>
        Not just moving fluid temporarily. Not just reducing inflammation.
        <strong>Complete restoration.</strong>
      </p>
    </div>
  );
};

const Ingredients = () => {
  return (
    <div className="bg-main-skin">
      <Container id="ingredients" className="sm:py-14 py-8">
        <div className="flex flex-col gap-10">
          <SectionHeader subText={<HeaderSubText />} hasSpacing={false}>
            <span className="text-main-green">8-Ingredient System</span> The
            That Restores What Hormones Once Maintained
          </SectionHeader>
          <div className="grid sm:grid-cols-4 border-[0.5px] border-black rounded-xl bg-white overflow-hidden">
            {ingredients.map((item) => (
              <div
                key={item.name}
                className="border-[0.5px] border-black cursor-pointer"
              >
                <IngredientItem item={item} />
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center">
            <div className="max-w-145 ">
              <img
                src={effectImg}
                alt="synergistic-effect"
                loading="lazy"
                className="w-full max-sm:hidden"
              />
              <img
                src={effectImgSm}
                alt="synergistic-effect-small"
                loading="lazy"
                className="w-full sm:hidden"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Ingredients;
