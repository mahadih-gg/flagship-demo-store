
const EcomNavbar = () => {
  return (
    <nav className="container-ecom h-[64px] lg:h-[54px] 2xl:h-[72px] flex items-center">
      <div className="hidden lg:flex items-center justify-between w-full">
        <div className="flex gap-4 2xl:gap-5 text-xs text-[#1F2544] font-medium">
          <a href="#">SHOP</a>
          <a href="#">DEODORANT</a>
          <a href="#">BY SCENT</a>
          <a href="#">SETS</a>
        </div>
        <div className="text-2xl font-semibold text-[#1F2544] tracking-wide">
          PURE GLOW
        </div>
        <div className="flex gap-4 2xl:gap-5 text-xs text-[#1F2544] font-medium">
          <a href="#">SEARCH</a>
          <a href="#">ACCOUNT</a>
          <a href="#">BAG</a>
        </div>
      </div>

      <div className="flex lg:hidden items-center justify-between w-full">
        <div className="flex gap-6 items-center">
          <button aria-label="Menu">
            <MenuIcon />
          </button>
          <button aria-label="Search">
            <SearchIcon />
          </button>
        </div>
        <div className="text-xl font-semibold text-[#1F2544] tracking-wide">
          PURE GLOW
        </div>
        <div className="flex gap-6 items-center">
          <button aria-label="Account">
            <AccountIcon />
          </button>
          <button aria-label="Bag">
            <BagIcon />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default EcomNavbar;


const MenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
    >
      <path stroke="#1F2544" d="M0 17h18M0 8.953h18M0 1h18"></path>
    </svg>
  );
}


const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      fill="none"
      viewBox="0 0 18 19"
    >
      <path
        stroke="#1F2544"
        d="M7 13.29A5.5 5.5 0 1 0 7 2.288a5.5 5.5 0 0 0 0 11ZM10.354 11.434l7 7"
      ></path>
    </svg>
  )
}


const AccountIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      fill="none"
      viewBox="0 0 18 19"
    >
      <path stroke="#1F2544" d="M9 9.688a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path>
      <mask
        id="mask0_678_1603"
        width="16"
        height="9"
        x="1"
        y="10"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M17 10.188H1v8h16z"></path>
      </mask>
      <g mask="url(#mask0_678_1603)">
        <path
          stroke="#1F2544"
          d="M9 25.688a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
        ></path>
      </g>
    </svg>
  )
}


const BagIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      fill="none"
      viewBox="0 0 18 19"
    >
      <path stroke="#1F2544" d="M15.5 6.938h-13v11h13z"></path>
      <mask
        id="mask0_678_1612"
        width="14"
        height="6"
        x="2"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M16 .438H2v5h14z"></path>
      </mask>
      <g mask="url(#mask0_678_1612)">
        <path
          stroke="#1F2544"
          d="M9 9.938a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
        ></path>
      </g>
      <path stroke="#1F2544" d="M4.5 5.438v1M13.5 5.438v1"></path>
    </svg>
  )
}
