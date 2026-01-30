import Container from "@/components/common/container";
import { commitments } from "../advice/mock-data";
import CommitmentItem from "../advice/commitment-item";

const Commitment = () => {
  return (
    <div className="bg-main-skin">
      <Container id="commitment" className="py-8">
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-6">
          {commitments.map((item) => {
            const { title } = item;
            return <CommitmentItem item={item} key={title} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default Commitment;
