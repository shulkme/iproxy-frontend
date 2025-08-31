import Generator from '@/app/[locale]/(app)/proxies/mobile/setup/components/generator';
import Result from '@/app/[locale]/(app)/proxies/mobile/setup/components/result';
import { Col, Row } from 'antd';

export default function Page() {
  return (
    <div className="p-8">
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={14} xxl={16}>
          <div className="space-y-8">
            <Generator />
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={10} xxl={8}>
          <Result />
        </Col>
      </Row>
    </div>
  );
}
