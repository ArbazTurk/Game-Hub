import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width={"270px"}>
      <Skeleton height={"180px"} />
      <CardBody>
        <SkeletonText height={"80px"} />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
