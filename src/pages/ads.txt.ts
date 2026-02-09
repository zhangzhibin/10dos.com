/**
 * ads.txt 由环境变量 PUBLIC_ADSENSE_PUB_ID 在构建时生成，勿将真实 ID 提交到仓库。
 */
export const prerender = true;

export function GET() {
  const pubId = import.meta.env.PUBLIC_ADSENSE_PUB_ID as string | undefined;
  const line = pubId
    ? `google.com, ${pubId}, DIRECT, f08c47fec0942fa0\n`
    : '';
  return new Response(line, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
