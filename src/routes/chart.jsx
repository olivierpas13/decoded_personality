import { createFileRoute } from '@tanstack/react-router'
import CognitivesChart from '@/components/cognitives/CognitivesChart'

export const Route = createFileRoute('/chart')({
  component: () => <CognitivesChart />
})