import React from 'react';

import { FARM } from '@/mock';
import { Card, CardItem } from '@/shared/ui';
import { getDate } from '@/shared/utils';
import { useFlow } from '@/app/stackflow';
import { PATH } from '@/shared/constants';
import { CoughIcon } from '@/asset/icons';
import { FaHome } from 'react-icons/fa';
import { useFetchArticle } from '../api';
import { useFetchCoughCnt } from '../api/cough';

export default function HomeContainer() {
  const { push } = useFlow();
  const today = new Date();
  const { data } = useFetchArticle();
  const { data: coughCnt } = useFetchCoughCnt();

  return (
    <div className='flex h-full flex-col justify-between'>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-2'>
            <span className='border-point bg-point/30 w-fit rounded-full border-[1px] px-2 py-1 text-sm'>
              농장
            </span>
            {FARM.location}
          </div>
          <div className='flex w-full justify-between'>
            <div className='flex flex-col gap-1 text-2xl font-medium'>
              <p>
                <span className='font-bold'>유진</span>님, 좋은 아침이에요.
              </p>
              <p>
                오늘의 <span className='font-bold'>{FARM.title}</span>을
                확인하세요!
              </p>
            </div>
            <button
              name='farmStatus'
              className='border-border bg-fill size-fit cursor-pointer rounded-full border-[1px] px-3 py-1.5 text-sm focus:outline-none'
              onClick={() => push(PATH.FARM, {})}
            >
              더보기
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <CardItem className='h-30'>
            <div className='flex size-full items-center justify-between'>
              <div className='flex size-full items-center gap-4'>
                <div className='flex h-full items-center'>
                  <img
                    className='rounded-small size-18 object-cover'
                    src={CoughIcon}
                  />
                </div>

                <div className='flex flex-col'>
                  <span className='text-lg font-medium'>지난밤 기침</span>
                  <p>
                    <span className='text-xl font-bold'>{coughCnt || 0}</span>회
                  </p>
                </div>
              </div>
              <button
                name='recentCough'
                className='rounded-small bg-point flex h-fit w-fit cursor-pointer items-center justify-center px-4 py-2 text-nowrap text-white'
                onClick={() => push(PATH.COUGH, {})}
              >
                자세히 보기
              </button>
            </div>
          </CardItem>
          <CardItem className='h-40'>
            <div className='flex size-full items-center justify-between'>
              <div className='flex h-full flex-col justify-between'>
                <div className='flex flex-col'>
                  <span className='text-lg font-medium'>주변 농장의</span>
                  <span className='text-xl font-bold'>질병 발병 상황</span>
                </div>
                <span className='text-light'>
                  {getDate(today, 'YYYY.MM.DD 기준')}
                </span>
              </div>
              <button
                name='diseaseMap'
                onClick={() => push(PATH.MAP, {})}
                className='h-full w-40 cursor-pointer bg-cover bg-center'
                style={{
                  backgroundImage: `url(https://i.pinimg.com/736x/2c/82/ed/2c82edda3e2bce7f7e1ca55557790d97.jpg)`,
                }}
              />
            </div>
          </CardItem>
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-xl font-bold'>최근 농장 소식</span>
          <button className='cursor-pointer focus:outline-none'>더보기</button>
        </div>
        <div className='scrollbar-hide rounded-10 relative flex h-fit items-center gap-x-3 overflow-x-scroll'>
          {data &&
            data.map((article, i) => (
              <Card
                key={i}
                className='h-64 w-64 cursor-pointer'
                article={article}
                onClick={() => window.open(article.url, '_blank')}
              />
            ))}
        </div>
      </div>

      <div className='rounded-large flex w-full justify-center'>
        <div className='box-shadow-dock grid size-16 place-items-center rounded-full bg-white'>
          <FaHome size={20} />
        </div>
      </div>
    </div>
  );
}
