import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  const buffer = await readFile(path.join(process.cwd(), 'public/zips', 'JohnBall.zip'));

  const headers = new Headers();
  headers.append('Content-Disposition', 'attachment; filename="JohnBall.zip"');
  headers.append('Content-Type', 'application/zip');

  return new Response(buffer, {
    headers,
  });
}