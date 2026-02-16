import { locales, type Locale } from './locales.ts';

/** 导航链接，供 Header / Footer 使用；href 为默认语言路径，其他语言加 pathPrefix */
export const navLinks = [
  { href: '/', labelEn: 'Home', labelZh: '首页', labelZhtw: '首頁', labelJa: 'ホーム' },
  { href: '/how-it-works/', labelEn: 'How it works', labelZh: '使用说明', labelZhtw: '使用說明', labelJa: '使い方' },
  { href: '/faq/', labelEn: 'FAQ', labelZh: '常见问题', labelZhtw: '常見問題', labelJa: 'よくある質問' },
  { href: '/install/', labelEn: 'Install', labelZh: '安装', labelZhtw: '安裝', labelJa: 'インストール' },
  { href: '/privacy/', labelEn: 'Privacy', labelZh: '隐私', labelZhtw: '隱私', labelJa: 'プライバシー' },
  { href: '/magic-calculator/', labelEn: 'Magic Calculator', labelZh: '魔术计算器', labelZhtw: '魔術計算器', labelJa: 'マジック計算機' },
] as const;

export type { Locale };

export function getNavHref(href: string, lang: Locale): string {
  const item = locales.find((l) => l.code === lang);
  if (!item?.pathPrefix) return href;
  return href === '/' ? `${item.pathPrefix}/` : `${item.pathPrefix}${href}`;
}

export function getNavLabel(
  item: (typeof navLinks)[number],
  lang: Locale
): string {
  if (lang === 'ja') return item.labelJa;
  if (lang === 'zh') return item.labelZh;
  if (lang === 'zhtw') return item.labelZhtw;
  return item.labelEn;
}
