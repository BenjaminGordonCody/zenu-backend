export const PageNumber = (p) => {
  return (
    <button
      className="pageButton"
      key={p.pageNum}
      onClick={() => {
        p.setPage(p.pageNum);
      }}
    >
      {`${p.pageNum}`}
    </button>
  );
};
