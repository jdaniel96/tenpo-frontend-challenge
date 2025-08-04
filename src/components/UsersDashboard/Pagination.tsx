'use client'

import {
  Button,
  Pagination as ShadPagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/shadcn'

interface PaginationProps {
  currentPage: number
  onPageChange: (page: number) => void
  totalPages: number
}

interface GetVisiblePagesProps {
  currentPage: number
  totalPages: number
}

const getVisiblePages = ({ currentPage, totalPages }: GetVisiblePagesProps) => {
  const rangeWithDots: (number | string)[] = []

  const startPage = Math.max(2, currentPage - 1)
  const endPage = Math.min(totalPages - 1, currentPage + 1)

  // Always show first page
  rangeWithDots.push(1)

  // Left dots
  if (startPage > 2) rangeWithDots.push('...')

  // Pages between first and last
  for (let i = startPage; i <= endPage; i++) rangeWithDots.push(i)

  // Right dots
  if (endPage < totalPages - 1) rangeWithDots.push('...')

  // Always show last page if more than 1
  if (totalPages > 1) rangeWithDots.push(totalPages)

  return rangeWithDots
}

export const Pagination = ({
  currentPage,
  onPageChange,
  totalPages,
}: PaginationProps) => {
  return (
    <ShadPagination className="justify-center">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            aria-disabled={currentPage === 1}
            isDisabled={currentPage === 1}
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          />
        </PaginationItem>

        {getVisiblePages({ currentPage, totalPages }).map((page, index) => (
          <PaginationItem key={index}>
            {typeof page === 'number' ? (
              <Button
                onClick={() => onPageChange(page)}
                size="icon"
                variant={page === currentPage ? 'default' : 'outline'}
              >
                {page}
              </Button>
            ) : (
              <span className="text-muted-foreground px-2 py-1">…</span>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            aria-disabled={currentPage === totalPages}
            isDisabled={currentPage === totalPages}
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          />
        </PaginationItem>
      </PaginationContent>
    </ShadPagination>
  )
}
