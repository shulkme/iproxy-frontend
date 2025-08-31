import Features from '@/app/[locale]/(app)/proxies/mobile/pricing/components/features';
import Order from '@/app/[locale]/(app)/proxies/mobile/pricing/components/order';
import Subscription from '@/app/[locale]/(app)/proxies/mobile/pricing/components/subscription';
import { Col, Row } from 'antd';

export default function Page() {
  return (
    <div className="p-8">
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={16} xxl={18}>
          <div className="space-y-8">
            <Subscription />
            <Features />
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={6}>
          <Order />
        </Col>
      </Row>
    </div>
  );
}
