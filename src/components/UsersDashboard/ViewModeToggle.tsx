import { LayoutGrid, List } from 'lucide-react'

import { ToggleGroup, ToggleGroupItem } from '@/components/shadcn'

interface ViewModeToggleProps {
  setView: (v: 'grid' | 'list') => void
  view: 'grid' | 'list'
}

export const ViewModeToggle = ({ setView, view }: ViewModeToggleProps) => {
  return (
    <ToggleGroup
      onValueChange={(v) => setView(v as 'grid' | 'list')}
      type="single"
      value={view}
    >
      <ToggleGroupItem value="grid">
        <LayoutGrid className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="list">
        <List className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
