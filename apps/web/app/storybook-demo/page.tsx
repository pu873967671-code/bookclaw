'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// 示例绘本数据
const storyPages = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800',
    text: '从前有只小猫咪，佢好钟意喺花园度玩。',
    audio: '/audio/page1.mp3', // 占位，实际需要音频文件
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800',
    text: '有一日，佢发现咗一只好靓嘅蝴蝶。',
    audio: '/audio/page2.mp3',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1573865526739-10c1d3a1f0cc?w=800',
    text: '小猫咪追住蝴蝶跑，跑到好远好远。',
    audio: '/audio/page3.mp3',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800',
    text: '最后佢发现咗一个神秘嘅花园，入面有好多朋友。',
    audio: '/audio/page4.mp3',
  },
];

export default function StorybookDemo() {
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // 初始化 ScrollTrigger 动画
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
            onEnter: () => setCurrentPage(index),
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (isAutoPlay && currentPage < storyPages.length) {
      // 自动播放：滚动到下一页
      const timer = setTimeout(() => {
        const nextPage = currentPage + 1;
        if (nextPage < storyPages.length) {
          gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: sectionsRef.current[nextPage], offsetY: 50 },
            ease: 'power2.inOut',
          });
        } else {
          setIsAutoPlay(false); // 播完停止
        }
      }, 5000); // 每页停留 5 秒

      return () => clearTimeout(timer);
    }
  }, [isAutoPlay, currentPage]);

  const handleAutoPlayToggle = () => {
    setIsAutoPlay(!isAutoPlay);
    if (!isAutoPlay && currentPage === 0) {
      // 从头开始
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: sectionsRef.current[0], offsetY: 50 },
      });
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-purple-50 to-pink-50 min-h-screen">
      {/* 控制按钮 */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={handleAutoPlayToggle}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition"
        >
          {isAutoPlay ? '⏸ 暂停' : '▶️ 自动播放'}
        </button>
        <div className="px-4 py-2 bg-white rounded-lg shadow-lg">
          第 {currentPage + 1} / {storyPages.length} 页
        </div>
      </div>

      {/* 绘本页面 */}
      <div className="container mx-auto px-4 py-20">
        {storyPages.map((page, index) => (
          <div
            key={page.id}
            ref={(el) => {
              if (el) sectionsRef.current[index] = el;
            }}
            className="min-h-screen flex items-center justify-center mb-20"
          >
            <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="relative h-96">
                <img
                  src={page.image}
                  alt={`Page ${page.id}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-8">
                <p className="text-2xl text-gray-800 leading-relaxed font-medium">
                  {page.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 结束提示 */}
      {currentPage === storyPages.length - 1 && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg">
          <p className="text-gray-700">🎉 故事讲完啦！</p>
        </div>
      )}
    </div>
  );
}
