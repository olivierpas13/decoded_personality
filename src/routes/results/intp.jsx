import Results from "@/components/Results";
import { mbtis } from "@/theory/mbtis";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/results/intp")({
  component: () => <Results mbti={mbtis.INTP} />,
});
