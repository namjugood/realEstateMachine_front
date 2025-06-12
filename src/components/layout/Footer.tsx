import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="h-[152px] sm:h-[72px] bg-neutral-800 text-white flex items-center justify-center">
      <nav className="nav p-6">
        <ul className="flex flex-wrap sm:flex-nowrap gap-4 items-center">
          <li className="w-auto sm:w-auto"><a href="#" className="text-xs font-normal text-neutral-200">이용약관</a></li>
          <li className="w-auto sm:w-auto"><a href="#" className="text-xs font-bold text-neutral-200">개인정보처리방침</a></li>
          <li className="w-full sm:w-auto"><a href="#" className="text-xs font-normal text-neutral-200">이메일무단수집거부</a></li>
          <li className="w-auto sm:w-auto"><a href="#" className="text-xs font-normal text-neutral-200">저작권정책</a></li>
          <li className="w-auto sm:w-auto"><a href="#" className="text-xs font-normal text-neutral-200">품질오류신고 및 확인</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;