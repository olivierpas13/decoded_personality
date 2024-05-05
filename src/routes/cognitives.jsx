import { createFileRoute } from '@tanstack/react-router'
import CognitivesExplanation from '@/components/cognitives/CognitivesExplanation'

export const Route = createFileRoute('/cognitives')({
  component: () => <CognitivesExplanation />,
})