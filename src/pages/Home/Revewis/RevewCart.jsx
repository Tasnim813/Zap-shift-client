import React from 'react';

const RevewCart = ({reveiw}) => {
    const {review,userName,user_email,user_photoURL}=reveiw;
    return (
        <div class="card w-full max-w-md bg-[#fce4e4] shadow-xl p-8 rounded-2xl border border-gray-100">
  <div class="text-[#b5c2c2] mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-12 h-12" viewBox="0 0 24 24">
      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 6.79086 11.8079 5 14.017 5H19.017C21.2261 5 23.017 6.79086 23.017 9V15C23.017 18.866 19.883 22 16.017 22H14.017V21ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H2.017C1.46472 8 1.017 8.44772 1.017 9V12C1.017 12.5523 0.569282 13 0.017 13H-1.983C-2.53528 13 -2.983 12.5523 -2.983 12V9C-2.983 6.79086 -1.19214 5 1.017 5H6.017C8.22614 5 10.017 6.79086 10.017 9V15C10.017 18.866 6.883 22 3.017 22H1.017V21Z" />
    </svg>
  </div>

  <p class="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
 {review}
  </p>

  <div class="border-t border-dashed border-gray-400 mb-6"></div>

  <div class="flex items-center gap-4">
    {/* Circle er moddhe Image ekhane update kora hoyeche */}
    <div class="avatar">
      <div class="w-12 rounded-full overflow-hidden">
        <img src={user_photoURL} alt="Awlad Hossin" />
      </div>
    </div>
    
    <div>
      <h3 class="font-bold text-[#1a3d3d] text-xl">{userName}</h3>
      <p class="text-gray-500 font-medium">{user_email}</p>
    </div>
  </div>
</div>
    );
};

export default RevewCart;