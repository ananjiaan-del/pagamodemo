import MissionClient from './MissionClient';
import { stories } from '../../data';

export function generateStaticParams(){
  return stories.map((story)=>({slug:story.slug}));
}

export default async function MissionPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  return <MissionClient slug={slug}/>;
}
