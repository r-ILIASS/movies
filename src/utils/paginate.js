export const paginate = (currentPage, pageSize, items) => {
  const indexOfLastPage = currentPage * pageSize;
  const indexOfFirstPage = indexOfLastPage - pageSize;
  return items.slice(indexOfFirstPage, indexOfLastPage);
};
