import { createFileRoute } from "@tanstack/react-router";
import Results from "@/components/Results";
import { mbtis } from "@/theory/mbtis";

export const Route = createFileRoute("/results/enfj")({
  component: () => <Results mbti={mbtis.ENFJ} />,
});
