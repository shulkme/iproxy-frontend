import Exchange from '@/app/[locale]/(app)/wallet/recharge/components/exchange';
import Payment from '@/app/[locale]/(app)/wallet/recharge/components/payment';
import { RechargeProvider } from '@/app/[locale]/(app)/wallet/recharge/context';
import { Col, Row } from 'antd';

export default function Page() {
  return (
    <RechargeProvider>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} lg={24} xl={14}>
          <Exchange />
        </Col>
        <Col xs={24} sm={24} lg={24} xl={10}>
          <Payment />
        </Col>
      </Row>
    </RechargeProvider>
  );
}
