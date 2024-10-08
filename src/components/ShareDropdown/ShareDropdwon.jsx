import constants from '../../constants/constants';

const ShareDropdown = () => {
  const url = window.location.href;
  const handleCopyButton = () => {
    navigator.clipboard.writeText(url);
  };

  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(document.title)}&url=${encodeURIComponent(url)}`, '_blank');
    return false;
  };

  return (
    <div className="
    SHARE-DROPDOWN
    absolute z-40
    w-52
    mt-3 -ml-44
    px-4 py-1
    border-2
    rounded-lg
    bg-white"
    >
      {constants.socials.map((soc) => (
        <button
          key={soc.id}
          type="button"
          onClick={() => (soc.id === 1
            ? handleCopyButton()
            : shareToTwitter()
          )}
          className="
          SOCIALS
          flex items-center
          h-12
          my-2"
        >
          {soc.id === 1 ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24">
              <path fill="black" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" />
            </svg>
          )}
          <span className="ml-4">
            {soc.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default ShareDropdown;
