'use client'

import {
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

        <PaginationItem>
          <span className="text-muted-foreground text-md px-2 py-1">
            Page {currentPage} of {totalPages}
          </span>
        </PaginationItem>

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
