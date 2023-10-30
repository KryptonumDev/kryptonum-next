import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import RoadmapClient from "../../Client/RoadmapClient";

const Roadmap = ({ heading, list, cta }) => {

  return (
    <RoadmapClient list={list} cta={cta}>
      <DecorativeHeading type="h2">{heading}</DecorativeHeading>
    </RoadmapClient>
  );
};

export default Roadmap;
