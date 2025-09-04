import { RiPinDistanceLine, RiWindowLine } from '@remixicon/react';
import { Button, Card, Descriptions } from 'antd';

export default function Page() {
  return (
    <>
      <div className="space-y-6">
        <Card>
          <Descriptions
            title={
              <div className="flex items-center gap-4">
                <RiPinDistanceLine size={24} />
                <span>{'Residential Proxies'}</span>
              </div>
            }
            extra={
              <>
                <Button type="primary">Subscription plan</Button>
              </>
            }
            items={[
              {
                label: 'Plan name',
                children: '--',
              },
              {
                label: 'Subscription unit price',
                children: '--',
              },
              {
                label: 'Subscription amount',
                children: '--',
              },
              {
                label: 'Subscription start date',
                children: '--',
              },
              {
                label: 'Last subscription time',
                children: '--',
              },
              {
                label: 'Next subscription time',
                children: '--',
              },
            ]}
          />
        </Card>
        <Card>
          <Descriptions
            title={
              <div className="flex items-center gap-4">
                <RiWindowLine size={24} />
                <span>{'SERP API'}</span>
              </div>
            }
            extra={
              <>
                <Button type="primary">Subscription plan</Button>
              </>
            }
            items={[
              {
                label: 'Plan name',
                children: '--',
              },
              {
                label: 'Subscription unit price',
                children: '--',
              },
              {
                label: 'Subscription amount',
                children: '--',
              },
              {
                label: 'Subscription start date',
                children: '--',
              },
              {
                label: 'Last subscription time',
                children: '--',
              },
              {
                label: 'Next subscription time',
                children: '--',
              },
            ]}
          />
        </Card>
      </div>
    </>
  );
}
