export interface PaginatedData<T> {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  data: T[];
}
