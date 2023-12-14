import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import RoadmapSection from "./roadmapSection";

const Roadmap = ({ heading, list, cta }) => {

  return (
    <RoadmapSection list={list} cta={cta}>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
    </RoadmapSection>
  );
};

export default Roadmap;
