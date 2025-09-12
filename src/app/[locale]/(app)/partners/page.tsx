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
              <a href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}`}>
                {process.env.NEXT_PUBLIC_SUPPORT_EMAIL}
              </a>
            </p>
          </div>
        </div>
        <div>
          <AntdTitle level={4} className="mb-4">
            {t('groups.browser')}
          </AntdTitle>
          <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,_1fr))]">
            <ListCard
              title="AdsPower"
              link="https://www.adspower.net/share/IuA8f4"
              guide="https://help.adspower.net/"
              cover={'/images/partner_adspower.png'}
            />
            <ListCard
              title="BitBrowser"
              link="https://www.bitbrowser.net/"
              guide="https://doc.bitbrowser.net/"
              cover={'/images/partner_bitbrowser.png'}
            />
            <ListCard
              title="DICloak"
              link="https://dicloak.com/download?rc=n3j4Ch99"
              guide="https://help.dicloak.com/zh/"
              cover={'/images/partner_dicloak.png'}
            />
            <ListCard
              title="IxBrowser"
              link="https://www.ixbrowser.com/code/YJ4Y"
              guide="https://ixbrowser.com/guide?id=32"
              cover={'/images/partner_ixbrowser.png'}
            />
            <ListCard
              title="Vision"
              link="https://browser.vision/r/94ff9533-62c1-4cb9-998e-0af6dbc81df6"
              guide="https://docs.browser.vision/"
              cover={'/images/partner_vision.png'}
            />
          </div>
        </div>
        <div>
          <AntdTitle level={4} className="mb-4">
            {t('groups.phone')}
          </AntdTitle>
          <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,_1fr))]">
            <ListCard
              title="DuoPlus"
              link="https://www.duoplus.cn/share/85gBe7"
              guide="https://help.duoplus.net/"
              cover={'/images/partner_duoplus.png'}
            />
            <ListCard
              title="MoreLogin"
              link="https://www.morelogin.com/?from=AArDlOoIIeZF"
              guide="https://support.morelogin.com/"
              cover={'/images/partner_morelogin.png'}
            />
          </div>
        </div>
        <div>
          <div className="text-center py-4 text-black/50">
            <span>{t('hero.contact')}</span>
            <a href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}`}>
              {process.env.NEXT_PUBLIC_SUPPORT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
