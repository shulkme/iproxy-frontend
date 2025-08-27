import { AntdParagraph, AntdText, AntdTitle } from '@/components/antd';
import { Card, Col, Descriptions, Row, Statistic } from 'antd';

export default function Page() {
  return (
    <>
      <div className="space-y-6">
        <Card>
          <AntdTitle level={5} className="mb-6">
            Referral code and link
          </AntdTitle>
          <AntdParagraph>
            Invite new client to join {process.env.NEXT_PUBLIC_APP_NAME} using
            your unique referral code or referral link, and you can earn up to
            10% of each referred client&#39;s order.{' '}
            <a href="">More information</a>
          </AntdParagraph>
          <Descriptions
            classNames={{
              content: 'font-medium',
            }}
            column={1}
            items={[
              {
                label: 'Referral code',
                children: <AntdText copyable>ABCDEF</AntdText>,
              },
              {
                label: 'Referral link',
                children: (
                  <AntdText copyable>
                    https://www.example.com?inviteCode=ABCDEF
                  </AntdText>
                ),
              },
            ]}
          />
        </Card>
        <Card>
          <AntdTitle level={5} className="mb-6">
            Referral rewards
          </AntdTitle>

          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={4}>
              <Statistic
                title={'Total rewards'}
                value={1234}
                prefix={'$'}
                className="[&_.ant-statistic-content]:font-medium"
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={4}>
              <Statistic
                title={'Total rewards'}
                value={1234}
                prefix={'$'}
                className="[&_.ant-statistic-content]:font-medium"
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={4}>
              <Statistic
                title={'Total rewards'}
                value={1234}
                prefix={'$'}
                className="[&_.ant-statistic-content]:font-medium"
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={4}>
              <Statistic
                title={'Total rewards'}
                value={1234}
                prefix={'$'}
                className="[&_.ant-statistic-content]:font-medium"
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={4}>
              <Statistic
                title={'Total rewards'}
                value={1234}
                prefix={'$'}
                className="[&_.ant-statistic-content]:font-medium"
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={4}>
              <Statistic
                title={'Total rewards'}
                value={1234}
                prefix={'$'}
                className="[&_.ant-statistic-content]:font-medium"
              />
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
}
