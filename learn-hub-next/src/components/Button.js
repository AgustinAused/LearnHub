export default function LoadMoreButton({loadMore}) {
    const handleLoadMore = () => {
        loadMore();
      };
    
      return (
        <button onClick={handleLoadMore} style={{ marginTop: '10px' }}>
          Load More
        </button>
      );
};
