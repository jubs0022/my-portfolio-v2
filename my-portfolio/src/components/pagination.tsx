import "./css/pagination.css";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const pad = (n: number) => String(n).padStart(2, "0");

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const progress = (currentPage / totalPages) * 100;

  return (
    <nav className="pagination" aria-label="Projects pagination">
      <div className="pagination-arrows">
        <button
          className="page-arrow"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous project"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          className="page-arrow"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next project"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div
        className="pagination-progress"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={totalPages}
        aria-valuenow={currentPage}
        aria-label={`Project ${currentPage} of ${totalPages}`}
      >
        <span className="pagination-current">{pad(currentPage)}</span>
        <div className="pagination-track">
          <div className="pagination-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="pagination-total">{pad(totalPages)}</span>
      </div>
    </nav>
  );
}