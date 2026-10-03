import {Suspense} from 'react';
export default function MapLayout({children}:{children:React.ReactNode}){
  return <Suspense fallback={<main className="map-page"><p>地圖載入中…</p></main>}>{children}</Suspense>;
}
