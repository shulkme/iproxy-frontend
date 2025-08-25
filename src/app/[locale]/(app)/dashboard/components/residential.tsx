import { AntdParagraph, AntdTitle } from '@/components/antd';
import { Link } from '@/i18n/navigation';
import {
  RiCheckLine,
  RiPulseLine,
  RiShoppingCart2Line,
  RiTimeLine,
} from '@remixicon/react';
import { Avatar, Button, Card, Col, Divider, Row } from 'antd';
import React from 'react';

const Residential: React.FC = () => {
  return (
    <Card>
      <Row gutter={[32, 32]}>
        <Col xs={18} sm={20} md={24} lg={18} xl={20} xxl={16}>
          <AntdTitle level={5}>Residential Proxies</AntdTitle>
          <AntdParagraph type="secondary" className="mb-8">
            Discover over 200M+ ethically sourced residential IPs for seamless
            human-like crawling. Access local public data effortlessly and
            without barriers.
          </AntdParagraph>
          <Row gutter={[32, 32]}>
            <Col sm={6}>
              <div className="space-y-4">
                <Avatar className="bg-(--ant-color-primary-bg) text-(--ant-color-primary)">
                  <RiPulseLine size={24} />
                </Avatar>
                <h3 className="font-medium text-black/65">Remaining traffic</h3>
                <div className="text-2xl font-bold">0.00GB</div>
              </div>
            </Col>
            <Col sm={6}>
              <div className="space-y-4">
                <Avatar className="bg-(--ant-color-primary-bg) text-(--ant-color-primary)">
                  <RiTimeLine size={24} />
                </Avatar>
                <h3 className="font-medium text-black/65">Expiration time</h3>
                <div className="text-2xl font-bold">--</div>
              </div>
            </Col>
          </Row>
          <Divider type="horizontal" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                className="text-black hover:text-(--ant-color-link)"
                href="/"
              >
                Automatic renewal
              </Link>
              <span className="text-black/50">/</span>
              <Link
                className="text-black hover:text-(--ant-color-link)"
                href="/"
              >
                Alert settings
              </Link>
              <span className="text-black/50">/</span>
              <Link
                className="text-black hover:text-(--ant-color-link)"
                href="/"
              >
                Documentation
              </Link>
            </div>
            <div>
              <Button
                className="px-8"
                size="large"
                color="primary"
                variant="outlined"
              >
                Start using
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={6} sm={4} md={24} lg={6} xl={4} xxl={8}>
          <Card
            className="h-full bg-linear-to-bl from-blue-700 to-blue-900 rounded-xl text-white"
            classNames={{
              body: 'bg-transparent space-y-4',
            }}
          >
            <div className="bg-white/20 p-4 rounded-lg">
              <div>Starts from</div>
              <div className="flex items-baseline gap-2">
                <div className="text-2xl font-bold">$0.55</div>
                <div className="font-bold">/ GB</div>
                <div className="rounded-full text-xs font-bold py-0.5 px-2 bg-yellow-200 text-yellow-600 inline-block">
                  85% OFF
                </div>
              </div>
            </div>
            <div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 font-medium">
                  <RiCheckLine size={14} className="text-cyan-400" />
                  <span>HTTP/HTTPS/SOCKS5 protocols</span>
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <RiCheckLine size={14} className="text-cyan-400" />
                  <span>200 million ethical IPs</span>
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <RiCheckLine size={14} className="text-cyan-400" />
                  <span>99.9% fast response time</span>
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <RiCheckLine size={14} className="text-cyan-400" />
                  <span>Country and city-level targeting</span>
                </li>
              </ul>
            </div>
            <div>
              <Button
                size="large"
                icon={<RiShoppingCart2Line size={18} />}
                block
                type="primary"
              >
                Buy Now
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

export default Residential;
