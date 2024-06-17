import React from 'react';
import babyHands from '../assets/babyHands.jpg';

const Note = () => {
  return (
    <div className="flex flex-col">

      {/* Note Component with Fullscreen Background Image */}
      <div className="relative w-full flex items-center justify-center bg-cover bg-center bg-fixed" 
           style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1573570623564-72eba8b6a421?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTI2fHxiYWJ5fGVufDB8fDB8fHwy'})` }}
      >
        <div className="flex flex-col md:flex-row max-w-6xl p-4 items-start pb-4 m-4 rounded-3xl">
          <div className="text-4xl font-semibold mb-4 md:mb-2 md:mr-8 md:text-right w-full md:basis-1/4 self-center">
            <h1>
              来自我们的<br className="hidden md:block" />创始人
            </h1>
          </div>
          <div className='basis-3/4 flex-grow border-l-4 border-black/80 pl-6 py-2'>
            <p className="text-lg italic">
              "我们所做的一切皆为实现您对家庭未来的愿景。在您开启成为父母的旅程中，我们以您的舒适为先，引领您走过这段创造奇迹的道路，每一步都小心翼翼。请放心，我们的团队会密切注意，始终在幕后努力，为您提供一生难忘的经历。
              每一刻都很重要。我们在这里陪伴您的每一个时刻。"
            </p>
            <p className="text-lg text-left font-medium mt-4">
              张欣博士, 智特生物创始人, 首席医疗顾问
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
