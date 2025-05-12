"use client";

import { useState, useEffect } from 'react';

interface LinkItem {
  title: string;
  url: string;
  icon: string;
  description?: string;
}

export default function LinksList() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links: LinkItem[] = [
    { title: 'My personal site (Soon)', url: 'https://toktorov.com', icon: 'fa-solid fa-clock' },
    { title: 'Pomodoro Timer (BeeFocus)', url: 'https://beefocus.su/', icon: 'fa-solid fa-hourglass-start' },
    { title: 'Telegram Channel', url: 'https://t.me/toktorov_one', icon: 'fa-brands fa-telegram' },
    { title: 'YouTube Channel', url: 'https://www.youtube.com/@toktorov_one', icon: 'fa-brands fa-youtube' },
    { title: 'TikTok Account', url: 'https://www.tiktok.com/@codex_kg', icon: 'fa-brands fa-tiktok' },
    { title: 'LinkedIn Profile', url: 'https://www.linkedin.com/in/toktorov/', icon: 'fa-brands fa-linkedin' },
    { title: 'GitHub Account', url: 'https://github.com/Toktorov', icon: 'fa-brands fa-github' },
    { 
      title: 'Contact With Me (only on business)', 
      url: 'https://t.me/bigbeesu', 
      icon: 'fa-solid fa-message', 
      description: "I just don't do any training and there are no vacancies"
    }
  ];

  if (!mounted) {
    return (
      <div className="w-full flex flex-col gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-16 rounded-xl bg-white bg-opacity-20 animate-pulse"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-4">
      {links.map((link, index) => (
        <a 
          key={index}
          href={link.url} 
          className="flex items-center gap-4 p-4 rounded-xl bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300 text-white shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`text-xl ${link.icon}`}></i>
          <div className="flex flex-col">
            <span className="font-medium">{link.title}</span>
            {link.description && <p className="text-sm text-white text-opacity-80">{link.description}</p>}
          </div>
        </a>
      ))}
    </div>
  );
}