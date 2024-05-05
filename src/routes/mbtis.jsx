import { createFileRoute } from '@tanstack/react-router'
import Mbtis from '@/components/Mbtis'

export const Route = createFileRoute('/mbtis')({
  component: () => <Mbtis />
})