import { Grid, List } from 'lucide-react'

import { Button } from '@/components/shadcn'

interface Props {
  onChange: (viewMode: 'grid' | 'list') => void
  viewMode: 'grid' | 'list'
}

export const ViewModeToggle = ({ onChange, viewMode }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <Button
        aria-label="Grid view"
        onClick={() => onChange('grid')}
        size="sm"
        variant={viewMode === 'grid' ? 'default' : 'outline'}
      >
        <Grid className="h-4 w-4" />
      </Button>
      <Button
        aria-label="List view"
        onClick={() => onChange('list')}
        size="sm"
        variant={viewMode === 'list' ? 'default' : 'outline'}
      >
        <List className="h-4 w-4" />
      </Button>
    </div>
  )
}
