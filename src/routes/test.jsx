import Test from '@/components/Test'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test')({
  component: () => <Test/>
})