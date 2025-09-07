import Features from '@/app/[locale]/(app)/proxies/static-isp/pricing/components/features';
import Order from '@/app/[locale]/(app)/proxies/static-isp/pricing/components/order';
import Region from '@/app/[locale]/(app)/proxies/static-isp/pricing/components/region';
import { CheckoutProvider } from '@/app/[locale]/(app)/proxies/static-isp/pricing/context';
import { Col, Row } from 'antd';

export default function Page() {
  return (
    <CheckoutProvider>
      <div className="p-4 lg:p-8">
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={16} xxl={18}>
            <div className="space-y-8">
              <Region />
              <Features />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={6}>
            <Order />
          </Col>
        </Row>
      </div>
    </CheckoutProvider>
  );
}
