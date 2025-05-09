import React, { useEffect, useState } from 'react';
import { useSubmitReportRequest } from '../api';
import { LoadingPig } from '@/asset/image';
import ReactMarkdown from 'react-markdown';

export default function ReportContainer() {
  let test: void;
  const [ndata, setData] = useState<string>('');
  const { refetch, isPending, data } = useSubmitReportRequest();
  useEffect(() => {
    refetch();
  }, [refetch, test]);
  useEffect(() => {
    if (data) setData(data);
  }, [data]);
  return (
    <>
      <div className='flex flex-col gap-6 bg-white pt-4'>
        <span className='text-xl font-bold'>AI 농장 리포트 작성 결과</span>
        {isPending ? (
          <div className='grid h-50 w-full place-items-center'>
            <div className='flex h-fit w-fit flex-col items-center justify-center'>
              <img src={LoadingPig} className='size-40' />
              <span className='text-light'>분석 결과를 불러오는 중..</span>
            </div>
          </div>
        ) : (
          <div className='border-border h-fit overflow-hidden rounded-lg border-[1px] p-4'>
            <ReactMarkdown>{ndata}</ReactMarkdown>
          </div>
        )}
      </div>
    </>
  );
}
