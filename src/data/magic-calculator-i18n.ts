/**
 * 魔术计算器多语言文案
 */
export type MagicCalculatorLang = 'en' | 'zh' | 'ja' | 'zhtw';

export interface MagicCalculatorT {
  /** 页面 meta 标题（SEO） */
  title: string;
  /** 页面正文大标题（h1） */
  bodyTitle: string;
  description: string;
  revealTitle: string;
  step1: string;
  step2: string;
  step3Prefix: string;
  step3Suffix: string;
  done: string;
}

export const magicCalculatorI18n: Record<MagicCalculatorLang, MagicCalculatorT> = {
  en: {
    title: '2026 CCTV Year of the Horse Spring Festival Gala Calculator Magic Reveal',
    bodyTitle: '2026 CCTV Year of the Horse Spring Festival Gala Calculator Magic — Try It Online',
    description: '2026 CCTV Year of the Horse Spring Festival Gala: calculator magic reveal and simulation. Try the trick yourself.',
    revealTitle: 'Reveal',
    step1: 'Step 1: Enter a 4-digit number, then press +.',
    step2: 'Step 2: Enter a 5-digit number, then press +.',
    step3Prefix: 'Step 3: Enter a ',
    step3Suffix: '-digit number, then press =.',
    done: 'Done. Press C to clear and start over.',
  },
  zh: {
    title: '2026央视马年春晚计算器魔术揭秘',
    bodyTitle: '2026央视马年春晚计算器魔术在线体验',
    description: '2026年央视马年中央电视台春晚，神奇计算器魔术揭秘和模拟。在线体验春晚同款计算器魔术。',
    revealTitle: '揭秘',
    step1: '第一步，输入一个4位数。输入完毕后，按 + 。',
    step2: '第二步，输入一个5位数。输入完毕后，按+。',
    step3Prefix: '第三步，随机输入一个',
    step3Suffix: '位数。输入完毕后，按=。',
    done: '计算完成。按 C 清空重新开始。',
  },
  zhtw: {
    title: '2026央視馬年春晚計算器魔術揭秘',
    bodyTitle: '2026央視馬年春晚計算器魔術在線體驗',
    description: '2026年央視馬年中央電視台春晚，神奇計算器魔術揭秘和模擬。在線體驗春晚同款計算器魔術。',
    revealTitle: '揭秘',
    step1: '第一步，輸入一個4位數。輸入完畢後，按 + 。',
    step2: '第二步，輸入一個5位數。輸入完畢後，按+。',
    step3Prefix: '第三步，隨機輸入一個',
    step3Suffix: '位數。輸入完畢後，按=。',
    done: '計算完成。按 C 清空重新開始。',
  },
  ja: {
    title: '2026年CCTV馬年春節聯歓会 計算機マジック種明かし',
    bodyTitle: '2026年CCTV馬年春節聯歓会 計算機マジック オンライン体験',
    description: '2026年CCTV馬年春節聯歓会の計算機マジックの種明かしとシミュレーション。',
    revealTitle: '種明かし',
    step1: 'ステップ1：4桁の数字を入力し、+ を押してください。',
    step2: 'ステップ2：5桁の数字を入力し、+ を押してください。',
    step3Prefix: 'ステップ3：',
    step3Suffix: '桁の数字を入力し、= を押してください。',
    done: '完了。C を押してクリアし、最初からやり直してください。',
  },
};
