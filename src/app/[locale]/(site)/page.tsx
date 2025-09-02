import { Link } from '@/i18n/navigation';
import { Button } from 'antd';
import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations();
  return (
    <div className="w-full h-[200vh] flex flex-col items-center justify-center gap-8">
      <h2>{t('hello')}</h2>
      <div>
        <Link href="/dashboard">
          <Button type="primary">Login</Button>
        </Link>
      </div>
    </div>
  );
}
