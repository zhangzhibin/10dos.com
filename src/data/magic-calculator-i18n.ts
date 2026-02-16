/**
 * 魔术计算器多语言文案
 */
export type MagicCalculatorLang = 'en' | 'zh' | 'ja' | 'zhtw';

export interface MagicCalculatorT {
  title: string;
  description: string;
  step1: string;
  step2: string;
  step3Prefix: string;
  step3Suffix: string;
  done: string;
}

export const magicCalculatorI18n: Record<MagicCalculatorLang, MagicCalculatorT> = {
  en: {
    title: 'Magic Calculator',
    description: 'A small magic calculator based on the current time. Enter numbers step by step to get a surprising result.',
    step1: 'Step 1: Enter a 4-digit number, then press +.',
    step2: 'Step 2: Enter a 5-digit number, then press +.',
    step3Prefix: 'Step 3: Enter a ',
    step3Suffix: '-digit number, then press =.',
    done: 'Done. Press C to clear and start over.',
  },
  zh: {
    title: '魔术计算器',
    description: '基于当前时间的小魔术计算器，按步骤输入数字即可得到神奇结果。',
    step1: '第一步，输入一个4位数。输入完毕后，按 + 。',
    step2: '第二步，输入一个5位数。输入完毕后，按+。',
    step3Prefix: '第三步，随机输入一个',
    step3Suffix: '位数。输入完毕后，按=。',
    done: '计算完成。按 C 清空重新开始。',
  },
  zhtw: {
    title: '魔術計算器',
    description: '基於當前時間的小魔術計算器，按步驟輸入數字即可得到神奇結果。',
    step1: '第一步，輸入一個4位數。輸入完畢後，按 + 。',
    step2: '第二步，輸入一個5位數。輸入完畢後，按+。',
    step3Prefix: '第三步，隨機輸入一個',
    step3Suffix: '位數。輸入完畢後，按=。',
    done: '計算完成。按 C 清空重新開始。',
  },
  ja: {
    title: 'マジック計算機',
    description: '現在時刻に基づく小さなマジック計算機。手順に従って数字を入力すると驚きの結果が出ます。',
    step1: 'ステップ1：4桁の数字を入力し、+ を押してください。',
    step2: 'ステップ2：5桁の数字を入力し、+ を押してください。',
    step3Prefix: 'ステップ3：',
    step3Suffix: '桁の数字を入力し、= を押してください。',
    done: '完了。C を押してクリアし、最初からやり直してください。',
  },
};
