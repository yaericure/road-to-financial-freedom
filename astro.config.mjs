// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://yaericure.github.io',
  base: '/road-to-financial-freedom',
  integrations: [
    starlight({
      title: '財富自由之路',
      description: '升級你的操作系統:注意力、元認知與長期主義,通往財富自由的認知升級之路。',
      defaultLocale: 'root',
      locales: { root: { label: '正體中文', lang: 'zh-TW' } },
      customCss: ['./src/styles/theme.css', './src/styles/sidebar-num.css'],
      lastUpdated: false,
      pagination: true,
      sidebar: [
        {
          label: '財富自由的心智基礎',
          items: [
            { label: '財富自由的真義與時間鐵律', slug: 'unit01' },
            { label: '注意力、付費與安全感', slug: 'unit02' },
            { label: '活在未來與貴人法則', slug: 'unit03' },
          ],
        },
        {
          label: '認知升級的操作系統',
          items: [
            { label: '資本、落後與多維競爭', slug: 'unit04' },
            { label: '元認知能力的認識與提升', slug: 'unit05' },
            { label: '堅持、錯過與世界的生命力', slug: 'unit06' },
            { label: '戒掉抱怨、看見他人的好與「正確」的價值', slug: 'unit07' },
          ],
        },
        {
          label: '命運與剛需',
          items: [
            { label: '命運、驅動力與正確的剛需', slug: 'unit08' },
          ],
        },
        {
          label: '投資世界的基本原則',
          items: [
            { label: '投資的剛需:避險與資本量級', slug: 'unit09' },
            { label: '投資的入場條件與預測的迷思', slug: 'unit10' },
            { label: '先發優勢、全部押上與定投策略', slug: 'unit11' },
            { label: '長期主義、雙倍收入與時間買賣', slug: 'unit12' },
          ],
        },
        {
          label: '個人能力與成長策略',
          items: [
            { label: '寫作、定價與選擇的方法', slug: 'unit13' },
            { label: '成長率、知識與加速成長', slug: 'unit14' },
            { label: '智商迷思與速成陷阱', slug: 'unit15' },
          ],
        },
        {
          label: '踐行與人生終局',
          items: [
            { label: '重複、希望與配得上的自己', slug: 'unit16' },
            { label: '學習能力、趨勢判斷與鏡像世界', slug: 'unit17' },
            { label: '精明的時間買賣與最好的商業模式', slug: 'unit18' },
            { label: '終極問題、原則與執行力的智慧', slug: 'unit19' },
          ],
        },
      ],
    }),
    react(),
  ],
  vite: { plugins: [tailwindcss()] },
});
