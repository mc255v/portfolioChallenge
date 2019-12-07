const range = (from, to) => {
  const range = [];
  for (let i = from; i<= to; i++) {
    range.push(i);
  }
  return range;
}

export const defaultAvatar = "https://dyci7co52mbcc.cloudfront.net/static/images/default_avatar_v2.png";

export const fetchPageNumbers = ({ currentPage, totalPages, RIGHT_PAGE, LEFT_PAGE }) => {
  const totalBlocks = 7;

  if (totalPages > totalBlocks) {
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    let pages = range(startPage, endPage);

    const hasLeftSpill = startPage > 2;
    const hasRightSpill = (totalPages - endPage) > 1;
    const spillOffset = 5 - (pages.length + 1);

    switch (true) {
      // handle: (1) < {5 6} [7] {8 9} (10)
      case (hasLeftSpill && !hasRightSpill): {
        const extraPages = range(startPage - spillOffset, startPage - 1);
        pages = [LEFT_PAGE, ...extraPages, ...pages];
        break;
      }

      // handle: (1) {2 3} [4] {5 6} > (10)
      case (!hasLeftSpill && hasRightSpill): {
        const extraPages = range(endPage + 1, endPage + spillOffset);
        pages = [...pages, ...extraPages, RIGHT_PAGE];
        break;
      }

      // handle: (1) < {4 5} [6] {7 8} > (10)
      case (hasLeftSpill && hasRightSpill):
      default: {
        pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
        break;
      }
    }

    return [1, ...pages, totalPages];

  }

  return range(1, totalPages);

}

export const createCategories = (works) => {
  let arr = ["All"]
  works.forEach(work => {
   arr = [...arr, ...work.category_list] 
  });
  return [...new Set(arr)];
}