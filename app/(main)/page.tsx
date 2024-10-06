import ExchangeData from '@/components/ExchangeData';
import Header from '@/components/Header';
import ShowNews from '@/components/ShowNews';

export default function Home() {
  return (
    <div className="flex flex-col  gap-4 w-full h-[100vh]">
      <Header />
      <div className="w-[98%] flex flex-col md:flex-row mx-auto gap-5 h-[calc(100vh-14vh)] md:h-[80vh]">
        <ShowNews />
        <ExchangeData />
      </div>
    </div>
  );
}
