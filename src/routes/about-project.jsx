import { createFileRoute } from '@tanstack/react-router'
import AboutProject from '@/components/AboutProject'

export const Route = createFileRoute('/about-project')({
  component: () => <AboutProject />,
})