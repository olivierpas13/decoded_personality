import { createFileRoute } from '@tanstack/react-router'
import { mbtis } from '@/theory/mbtis'
import Results from '@/components/Results'

export const Route = createFileRoute('/results/istp')({
  component: () => <Results mbti={mbtis.ISTP} />,
})