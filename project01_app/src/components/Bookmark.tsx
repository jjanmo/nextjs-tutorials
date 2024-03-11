'use client';

export default function Bookmark() {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert('clicked bookmark!');
  };

  return (
    <div
      className="absolute -top-[2px] left-2 border-x-[12px] border-y-[14px] border-x-white border-t-white border-b-transparent rounded-sm opacity-30 hover:opacity-70 z-20 duration-200 cursor-pointer"
      onClick={handleClick}
    ></div>
  );
}
