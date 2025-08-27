import Affiliate from '@/app/[locale]/(app)/dashboard/components/affiliate';
import CDKey from '@/app/[locale]/(app)/dashboard/components/cdkey';
import Contact from '@/app/[locale]/(app)/dashboard/components/contact';
import Residential from '@/app/[locale]/(app)/dashboard/components/residential';
import Tabs from '@/app/[locale]/(app)/dashboard/components/tabs';
import Traffic from '@/app/[locale]/(app)/dashboard/components/traffic';
import { Title } from '@/providers/title';
import { Col, Row } from 'antd';

export default function Page() {
  return (
    <>
      <Title title={'Dashboard'} />
      <div className="max-w-[1600px] mx-auto p-8">
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={16} xxl={18}>
            <Row gutter={[24, 24]}>
              <Col span={24}>
                <Tabs />
              </Col>
              <Col span={24}>
                <Residential />
              </Col>
              <Col span={24}>
                <Traffic />
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={6}>
            <Row gutter={[24, 24]}>
              <Col span={24}>
                <CDKey />
              </Col>
              <Col span={24}>
                <Affiliate />
              </Col>
              <Col span={24}>
                <Contact />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}
