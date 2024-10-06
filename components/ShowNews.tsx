'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

interface Article {
  title: string;
  description: string;
  urlToImage: string | null;
  url: string;
}

const API_URL = 'https://newsapi.org/v2/top-headlines?country=us';
const API_KEY = '7fe00d94c3c046d1a64c2c24aadada6e';

const ShowNews = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await axios.get(`${API_URL}&apiKey=${API_KEY}`);
        const fetchedArticles = res.data.articles;
        if (fetchedArticles.length > 0) {
          setArticles(fetchedArticles);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }

    fetchNews();
  }, []);

  useEffect(() => {
    if (articles.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [articles]);

  const currentArticle = articles[currentIndex];

  return (
    <div className="relative w-full md:w-[40%] rounded-[8px] overflow-hidden order-2 md:order-1 h-[40%] md:h-full">
      {currentArticle?.urlToImage && (
        <Image
          src={currentArticle.urlToImage}
          alt={currentArticle.title}
          fill
          priority
          className="absolute inset-0 z-0 object-cover rounded-lg"
        />
      )}
      <div className="relative px-2 py-4 bg-black bg-opacity-50 text-white z-10 flex flex-col gap-2 justify-end h-full">
        <p className="text-xs md:text-lg font-bold w-[90%] mx-auto">
          {currentArticle?.title}
        </p>
        <p className="text-[10px] md:text-[15px] w-[90%] mx-auto">
          {currentArticle?.description}
        </p>
      </div>
    </div>
  );
};

export default ShowNews;
