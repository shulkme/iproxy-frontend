import Detail from '@/app/[locale]/(app)/proxies/datacenter/ip-list/components/detail';
import Statistics from '@/app/[locale]/(app)/proxies/datacenter/ip-list/components/statistics';
import { Alert } from 'antd';

export default function Page() {
  return (
    <>
      <Alert
        banner
        type="info"
        message={
          <>
            In order not to affect your use, please renew before the IP expires,
            cannot renew after expiration. You can also top up your wallet for
            auto-renewal. <a>Learn more</a>
          </>
        }
      />
      <div className="p-8 space-y-6">
        <Statistics />
        <Detail />
      </div>
    </>
  );
}
