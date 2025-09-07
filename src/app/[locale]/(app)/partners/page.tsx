'use client';
import ListCard from '@/app/[locale]/(app)/partners/components/list-card';
import { AntdTitle } from '@/components/antd';
import { Title } from '@/providers/title';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('app.pages.partners');
  return (
    <>
      <Title title={t('title')} />
      <div className="max-w-[1600px] mx-auto p-4 lg:p-8 space-y-8">
        <div className="bg-blue-500/5 border border-blue-100 rounded-sm p-8 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 h-full w-1/3 bg-linear-[190deg] from-blue-200/50 to-transparent to-90% -skew-x-45 translate-x-1/2"></div>
          <div className="space-y-2 relative z-10">
            <h2 className="text-2xl font-bold mb-6">{t('hero.title')}</h2>
            <p className="text-black/50">{t('hero.desc')}</p>
            <p className="text-black/50">
              <span>{t('hero.contact')}</span>
              <a>support@xxx.com</a>
            </p>
          </div>
        </div>
        <div>
          <AntdTitle level={4} className="mb-4">
            {t('groups.browser')}
          </AntdTitle>
          <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,_1fr))]">
            <ListCard
              title=""
              link=""
              guide=""
              cover={
                'https://wordpress.thordata.com/wp-content/uploads/2025/07/AdsPower.png'
              }
            />
            <ListCard
              title=""
              link=""
              guide=""
              cover={
                'https://wordpress.thordata.com/wp-content/uploads/2025/07/Genlogin-1.png'
              }
            />
            <ListCard
              title=""
              link=""
              guide=""
              cover={
                'https://wordpress.thordata.com/wp-content/uploads/2025/07/DICloak.png'
              }
            />
            <ListCard
              title=""
              link=""
              guide=""
              cover={
                'https://wordpress.thordata.com/wp-content/uploads/2025/07/EasyBr.png'
              }
            />
            <ListCard
              title=""
              link=""
              guide=""
              cover={
                'https://wordpress.thordata.com/wp-content/uploads/2025/07/ClonBrowser.png'
              }
            />
            <ListCard
              title=""
              link=""
              guide=""
              cover={
                'https://wordpress.thordata.com/wp-content/uploads/2025/07/BitBrowser.png'
              }
            />
          </div>
        </div>
        <div>
          <AntdTitle level={4} className="mb-4">
            {t('groups.phone')}
          </AntdTitle>
          <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,_1fr))]">
            <ListCard
              title=""
              link=""
              guide=""
              cover={
                'https://wordpress.thordata.com/wp-content/uploads/2025/07/AdsPower.png'
              }
            />
            <ListCard
              title=""
              link=""
              guide=""
              cover={
                'https://wordpress.thordata.com/wp-content/uploads/2025/07/AdsPower.png'
              }
            />
            <ListCard
              title=""
              link=""
              guide=""
              cover={
                'https://wordpress.thordata.com/wp-content/uploads/2025/07/AdsPower.png'
              }
            />
            <ListCard
              title=""
              link=""
              guide=""
              cover={
                'https://wordpress.thordata.com/wp-content/uploads/2025/07/AdsPower.png'
              }
            />
            <ListCard
              title=""
              link=""
              guide=""
              cover={
                'https://wordpress.thordata.com/wp-content/uploads/2025/07/AdsPower.png'
              }
            />
            <ListCard
              title=""
              link=""
              guide=""
              cover={
                'https://wordpress.thordata.com/wp-content/uploads/2025/07/AdsPower.png'
              }
            />
          </div>
        </div>
        <div>
          <AntdTitle level={4} className="mb-4">
            {t('groups.automation')}
          </AntdTitle>
          <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,_1fr))]">
            <ListCard
              title=""
              link=""
              guide=""
              cover={
                'https://wordpress.thordata.com/wp-content/uploads/2025/07/AdsPower.png'
              }
            />
            <ListCard
              title=""
              link=""
              guide=""
              cover={
                'https://wordpress.thordata.com/wp-content/uploads/2025/07/AdsPower.png'
              }
            />
            <ListCard
              title=""
              link=""
              guide=""
              cover={
                'https://wordpress.thordata.com/wp-content/uploads/2025/07/AdsPower.png'
              }
            />
            <ListCard
              title=""
              link=""
              guide=""
              cover={
                'https://wordpress.thordata.com/wp-content/uploads/2025/07/AdsPower.png'
              }
            />
            <ListCard
              title=""
              link=""
              guide=""
              cover={
                'https://wordpress.thordata.com/wp-content/uploads/2025/07/AdsPower.png'
              }
            />
            <ListCard
              title=""
              link=""
              guide=""
              cover={
                'https://wordpress.thordata.com/wp-content/uploads/2025/07/AdsPower.png'
              }
            />
          </div>
        </div>
        <div>
          <AntdTitle level={4} className="mb-4">
            {t('groups.other')}
          </AntdTitle>
          <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,_1fr))]">
            <ListCard
              title=""
              link=""
              guide=""
              cover={
                'https://wordpress.thordata.com/wp-content/uploads/2025/07/AdsPower.png'
              }
            />
            <ListCard
              title=""
              link=""
              guide=""
              cover={
                'https://wordpress.thordata.com/wp-content/uploads/2025/07/AdsPower.png'
              }
            />
            <ListCard
              title=""
              link=""
              guide=""
              cover={
                'https://wordpress.thordata.com/wp-content/uploads/2025/07/AdsPower.png'
              }
            />
            <ListCard
              title=""
              link=""
              guide=""
              cover={
                'https://wordpress.thordata.com/wp-content/uploads/2025/07/AdsPower.png'
              }
            />
            <ListCard
              title=""
              link=""
              guide=""
              cover={
                'https://wordpress.thordata.com/wp-content/uploads/2025/07/AdsPower.png'
              }
            />
            <ListCard
              title=""
              link=""
              guide=""
              cover={
                'https://wordpress.thordata.com/wp-content/uploads/2025/07/AdsPower.png'
              }
            />
          </div>
        </div>
        <div>
          <div className="text-center py-4 text-black/50">
            <span>{t('hero.contact')}</span>
            <a>support@xxx.com</a>
          </div>
        </div>
      </div>
    </>
  );
}
