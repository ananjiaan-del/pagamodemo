export const profiles={culture:{name:'文化說書人',icon:'文',color:'#f3b8c5',intro:'你擅長看見地方的記憶，並把故事轉譯成打動人的體驗。',focus:'文化轉譯',mission:'bookstore'},business:{name:'產業設計師',icon:'業',color:'#ffc29c',intro:'你習慣從需求與資源出發，找出能長久運轉的商業模式。',focus:'商業模式',mission:'noodle'},community:{name:'社群連結者',icon:'群',color:'#a9dced',intro:'你相信改變來自信任，擅長讓不同的人找到共同目標。',focus:'組織共好',mission:'alliance'},sustain:{name:'永續實踐家',icon:'續',color:'#d8ef71',intro:'你重視長期影響，會在文化、環境與收益之間找平衡。',focus:'永續經營',mission:'restaurant'}} as const;
export type ProfileKey=keyof typeof profiles;
export const stories=[
 {slug:'bookstore',tag:'文化 × 社群',title:'石店子69有機書店',short:'一本交換書，如何成為地方的入口？',icon:'冊',profile:'culture',summary:'書店不只賣書，更用交換、活動與住宿聚集人群，讓旅人從一個據點走進整條老街。',model:['交換書與活動建立穩定來客','在地選物與住宿創造收入','成為旅遊資訊入口，導流周邊店家']},
 {slug:'noodle',tag:'技藝 × 產業',title:'關西玉山麵',short:'百年製麵工藝，如何走進新市場？',icon:'麵',profile:'business',summary:'第四代保留九降風慢烘技藝，同時改造品牌包裝、建立體驗課程並拓展外部通路。',model:['傳統製麵建立品牌差異','體驗課程提高文化價值','禮盒與通路擴大市場規模']},
 {slug:'restaurant',tag:'飲食 × 傳承',title:'福臨飯店',short:'一碗仙草雞湯，如何留住下一代客人？',icon:'味',profile:'sustain',summary:'母女兩代守住客家手路菜，再透過空間改造與社群經營，讓五十年老店被年輕客群重新看見。',model:['家族料理形成核心產品','空間改善提升用餐體驗','社群內容吸引新世代客群']},
 {slug:'alliance',tag:'組織 × 共好',title:'關西產業聯盟',short:'三十多間店，如何從各自努力變成共好？',icon:'連',profile:'community',summary:'先建立共識，再用示範店家帶動改變，逐步導入數位地圖、支付與跨店體驗。',model:['示範案例降低轉型阻力','店家彼此共學形成支持網絡','共同品牌與地圖創造整體旅遊動線']}
];
