import ExchangeData from '@/components/ExchangeData';
import Header from '@/components/Header';
import ShowNews from '@/components/ShowNews';

export default function Home() {
  return (
    <div className="flex flex-col gap-4 w-full h-screen">
      <Header />
      <div className="w-[98%] mx-auto flex flex-col md:flex-row gap-5">
        <ShowNews />
        <ExchangeData />
      </div>
    </div>
  );
}
