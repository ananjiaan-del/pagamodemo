import {Suspense} from 'react';
export default function ResultLayout({children}:{children:React.ReactNode}){
  return <Suspense fallback={<main className="quiz-page"><p>結果整理中…</p></main>}>{children}</Suspense>;
}
