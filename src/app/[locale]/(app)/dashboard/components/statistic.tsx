'use client';
import { useDashboard } from '@/app/[locale]/(app)/dashboard/context';
import { AntdParagraph, AntdTitle } from '@/components/antd';
import { Link } from '@/i18n/navigation';
import {
  RiArrowRightUpLine,
  RiCheckLine,
  RiDeleteBin6Line,
  RiHourglassLine,
  RiPulseLine,
  RiRotateLockLine,
  RiShieldCheckLine,
  RiShoppingCart2Line,
} from '@remixicon/react';
import { Avatar, Button, Card, Col, Divider, Row } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react';

const IspPane = () => {
  const t = useTranslations('app.pages.dashboard.statistic.isp');
  return (
    <Card>
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={16}>
          <AntdTitle level={3} className="m-0 mb-6">
            {t('title')}
          </AntdTitle>
          <AntdParagraph type="secondary" className="m-0">
            {t('desc')}
          </AntdParagraph>
          <div className="py-6">
            <Row gutter={[32, 32]}>
              <Col sm={6}>
                <div className="space-y-4">
                  <Avatar className="bg-green-50 text-green-500">
                    <RiShieldCheckLine size={24} />
                  </Avatar>
                  <h3 className="font-medium text-black/65">
                    {t('statistics.available')}
                  </h3>
                  <div className="text-2xl font-bold">0 IPs</div>
                </div>
              </Col>
              <Col sm={6}>
                <div className="space-y-4">
                  <Avatar className="bg-orange-50 text-orange-500">
                    <RiHourglassLine size={24} />
                  </Avatar>
                  <h3 className="font-medium text-black/65">
                    {t('statistics.expiring')}
                  </h3>
                  <div className="text-2xl font-bold">0 IPs</div>
                </div>
              </Col>
              <Col sm={6}>
                <div className="space-y-4">
                  <Avatar className="bg-blue-50 text-blue-500">
                    <RiRotateLockLine size={24} />
                  </Avatar>
                  <h3 className="font-medium text-black/65">
                    {t('statistics.renewal')}
                  </h3>
                  <div className="text-2xl font-bold">0 IPs</div>
                </div>
              </Col>
              <Col sm={6}>
                <div className="space-y-4">
                  <Avatar className="bg-red-50 text-red-500">
                    <RiDeleteBin6Line size={24} />
                  </Avatar>
                  <h3 className="font-medium text-black/65">
                    {t('statistics.expired')}
                  </h3>
                  <div className="text-2xl font-bold">0 IPs</div>
                </div>
              </Col>
            </Row>
          </div>
          <Divider type="horizontal" dashed />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                className="text-black hover:text-(--ant-color-link)"
                href="/"
              >
                {t('links.renewal')}
              </Link>
              <span className="text-black/50">/</span>
              <Link
                className="text-black inline-flex gap-2 items-center hover:text-(--ant-color-link)"
                href="/"
              >
                <span>{t('links.documentation')}</span>
                <span className="text-black/50">
                  <RiArrowRightUpLine size={14} />
                </span>
              </Link>
            </div>
            <div>
              <Button
                className="px-8"
                size="large"
                color="primary"
                variant="outlined"
              >
                {t('actions.using')}
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={8}>
          <div className="p-6 h-full bg-linear-to-bl from-blue-700 to-blue-950 rounded-md text-white relative overflow-hidden">
            <div className="w-[200%] rounded-full aspect-square border border-white/10 z-0 absolute -top-[130%] -right-[120%]"></div>
            <div className="w-[150%] rounded-full aspect-square border border-white/10 z-0 absolute -top-[100%] -right-[90%]"></div>
            <div className="w-[110%] rounded-full aspect-square border border-white/10 z-0 absolute -top-[80%] -right-[70%]"></div>
            <div className="space-y-8 relative z-10">
              <div className="bg-white/20 p-4 rounded-sm">
                <div className="text-white/75 mb-2">{t('cover.title')}</div>
                <div className="font-bold align-baseline">
                  {t.rich('cover.price', {
                    price: () => <span className="text-2xl">$0.55</span>,
                  })}
                </div>
              </div>
              <div>
                <ul className="space-y-2.5">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <li key={i} className="flex items-center gap-2 font-medium">
                      <RiCheckLine size={14} className="text-cyan-400" />
                      <span>{t(`cover.features.${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Button
                  size="large"
                  icon={<RiShoppingCart2Line size={18} />}
                  block
                  type="primary"
                >
                  {t('cover.buy')}
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

const DatacenterPane = () => {
  const t = useTranslations('app.pages.dashboard.statistic.datacenter');
  return (
    <Card>
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={16}>
          <AntdTitle level={3} className="m-0 mb-6">
            {t('title')}
          </AntdTitle>
          <AntdParagraph type="secondary" className="m-0">
            {t('desc')}
          </AntdParagraph>
          <div className="py-6">
            <Row gutter={[32, 32]}>
              <Col sm={6}>
                <div className="space-y-4">
                  <Avatar className="bg-green-50 text-green-500">
                    <RiShieldCheckLine size={24} />
                  </Avatar>
                  <h3 className="font-medium text-black/65">
                    {t('statistics.available')}
                  </h3>
                  <div className="text-2xl font-bold">0 IPs</div>
                </div>
              </Col>
              <Col sm={6}>
                <div className="space-y-4">
                  <Avatar className="bg-orange-50 text-orange-500">
                    <RiHourglassLine size={24} />
                  </Avatar>
                  <h3 className="font-medium text-black/65">
                    {t('statistics.expiring')}
                  </h3>
                  <div className="text-2xl font-bold">0 IPs</div>
                </div>
              </Col>
              <Col sm={6}>
                <div className="space-y-4">
                  <Avatar className="bg-blue-50 text-blue-500">
                    <RiRotateLockLine size={24} />
                  </Avatar>
                  <h3 className="font-medium text-black/65">
                    {t('statistics.renewal')}
                  </h3>
                  <div className="text-2xl font-bold">0 IPs</div>
                </div>
              </Col>
              <Col sm={6}>
                <div className="space-y-4">
                  <Avatar className="bg-red-50 text-red-500">
                    <RiDeleteBin6Line size={24} />
                  </Avatar>
                  <h3 className="font-medium text-black/65">
                    {t('statistics.expired')}
                  </h3>
                  <div className="text-2xl font-bold">0 IPs</div>
                </div>
              </Col>
            </Row>
          </div>
          <Divider type="horizontal" dashed />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                className="text-black hover:text-(--ant-color-link)"
                href="/"
              >
                {t('links.renewal')}
              </Link>
              <span className="text-black/50">/</span>
              <Link
                className="text-black inline-flex gap-2 items-center hover:text-(--ant-color-link)"
                href="/"
              >
                <span>{t('links.documentation')}</span>
                <span className="text-black/50">
                  <RiArrowRightUpLine size={14} />
                </span>
              </Link>
            </div>
            <div>
              <Button
                className="px-8"
                size="large"
                color="primary"
                variant="outlined"
              >
                {t('actions.using')}
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={8}>
          <div className="p-6 h-full bg-linear-to-bl from-blue-700 to-blue-950 rounded-md text-white relative overflow-hidden">
            <div className="w-[200%] rounded-full aspect-square border border-white/10 z-0 absolute -top-[130%] -right-[120%]"></div>
            <div className="w-[150%] rounded-full aspect-square border border-white/10 z-0 absolute -top-[100%] -right-[90%]"></div>
            <div className="w-[110%] rounded-full aspect-square border border-white/10 z-0 absolute -top-[80%] -right-[70%]"></div>
            <div className="space-y-8 relative z-10">
              <div className="bg-white/20 p-4 rounded-sm">
                <div className="text-white/75 mb-2">{t('cover.title')}</div>
                <div className="font-bold align-baseline">
                  {t.rich('cover.price', {
                    price: () => <span className="text-2xl">$0.55</span>,
                  })}
                </div>
              </div>
              <div>
                <ul className="space-y-2.5">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <li key={i} className="flex items-center gap-2 font-medium">
                      <RiCheckLine size={14} className="text-cyan-400" />
                      <span>{t(`cover.features.${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Button
                  size="large"
                  icon={<RiShoppingCart2Line size={18} />}
                  block
                  type="primary"
                >
                  {t('cover.buy')}
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

const ResidentialPane = () => {
  const t = useTranslations('app.pages.dashboard.statistic.residential');
  return (
    <Card>
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={16}>
          <AntdTitle level={3} className="m-0 mb-6">
            {t('title')}
          </AntdTitle>
          <AntdParagraph type="secondary" className="m-0">
            {t('desc')}
          </AntdParagraph>
          <div className="py-6">
            <Row gutter={[32, 32]}>
              <Col sm={6}>
                <div className="space-y-4">
                  <Avatar className="bg-blue-50 text-blue-500">
                    <RiPulseLine size={24} />
                  </Avatar>
                  <h3 className="font-medium text-black/65">
                    {t('statistics.remaining-traffic')}
                  </h3>
                  <div className="text-2xl font-bold">0.00 GB</div>
                </div>
              </Col>
              <Col sm={6}>
                <div className="space-y-4">
                  <Avatar className="bg-orange-50 text-orange-500">
                    <RiHourglassLine size={24} />
                  </Avatar>
                  <h3 className="font-medium text-black/65">
                    {t('statistics.expiration-time')}
                  </h3>
                  <div className="text-2xl font-bold">--</div>
                </div>
              </Col>
            </Row>
          </div>
          <Divider type="horizontal" dashed />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                className="text-black hover:text-(--ant-color-link)"
                href="/"
              >
                {t('links.renewal')}
              </Link>
              <span className="text-black/50">/</span>
              <Link
                className="text-black inline-flex gap-2 items-center hover:text-(--ant-color-link)"
                href="/"
              >
                <span>{t('links.documentation')}</span>
                <span className="text-black/50">
                  <RiArrowRightUpLine size={14} />
                </span>
              </Link>
            </div>
            <div>
              <Button
                className="px-8"
                size="large"
                color="primary"
                variant="outlined"
              >
                {t('actions.using')}
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={8}>
          <div className="p-6 h-full bg-linear-to-bl from-blue-700 to-blue-950 rounded-md text-white relative overflow-hidden">
            <div className="w-[200%] rounded-full aspect-square border border-white/10 z-0 absolute -top-[130%] -right-[120%]"></div>
            <div className="w-[150%] rounded-full aspect-square border border-white/10 z-0 absolute -top-[100%] -right-[90%]"></div>
            <div className="w-[110%] rounded-full aspect-square border border-white/10 z-0 absolute -top-[80%] -right-[70%]"></div>
            <div className="space-y-8 relative z-10">
              <div className="bg-white/20 p-4 rounded-sm">
                <div className="text-white/75 mb-2">{t('cover.title')}</div>
                <div className="font-bold align-baseline">
                  {t.rich('cover.price', {
                    price: () => <span className="text-2xl">$0.55</span>,
                  })}
                </div>
              </div>
              <div>
                <ul className="space-y-2.5">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <li key={i} className="flex items-center gap-2 font-medium">
                      <RiCheckLine size={14} className="text-cyan-400" />
                      <span>{t(`cover.features.${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Button
                  size="large"
                  icon={<RiShoppingCart2Line size={18} />}
                  block
                  type="primary"
                >
                  {t('cover.buy')}
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

const MobilePane = () => {
  const t = useTranslations('app.pages.dashboard.statistic.mobile');
  return (
    <Card>
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={16}>
          <AntdTitle level={3} className="m-0 mb-6">
            {t('title')}
          </AntdTitle>
          <AntdParagraph type="secondary" className="m-0">
            {t('desc')}
          </AntdParagraph>
          <div className="py-6">
            <Row gutter={[32, 32]}>
              <Col sm={6}>
                <div className="space-y-4">
                  <Avatar className="bg-blue-50 text-blue-500">
                    <RiPulseLine size={24} />
                  </Avatar>
                  <h3 className="font-medium text-black/65">
                    {t('statistics.remaining-traffic')}
                  </h3>
                  <div className="text-2xl font-bold">0.00 GB</div>
                </div>
              </Col>
              <Col sm={6}>
                <div className="space-y-4">
                  <Avatar className="bg-orange-50 text-orange-500">
                    <RiHourglassLine size={24} />
                  </Avatar>
                  <h3 className="font-medium text-black/65">
                    {t('statistics.expiration-time')}
                  </h3>
                  <div className="text-2xl font-bold">--</div>
                </div>
              </Col>
            </Row>
          </div>
          <Divider type="horizontal" dashed />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                className="text-black hover:text-(--ant-color-link)"
                href="/"
              >
                {t('links.renewal')}
              </Link>
              <span className="text-black/50">/</span>
              <Link
                className="text-black inline-flex gap-2 items-center hover:text-(--ant-color-link)"
                href="/"
              >
                <span>{t('links.documentation')}</span>
                <span className="text-black/50">
                  <RiArrowRightUpLine size={14} />
                </span>
              </Link>
            </div>
            <div>
              <Button
                className="px-8"
                size="large"
                color="primary"
                variant="outlined"
              >
                {t('actions.using')}
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={8}>
          <div className="p-6 h-full bg-linear-to-bl from-blue-700 to-blue-950 rounded-md text-white relative overflow-hidden">
            <div className="w-[200%] rounded-full aspect-square border border-white/10 z-0 absolute -top-[130%] -right-[120%]"></div>
            <div className="w-[150%] rounded-full aspect-square border border-white/10 z-0 absolute -top-[100%] -right-[90%]"></div>
            <div className="w-[110%] rounded-full aspect-square border border-white/10 z-0 absolute -top-[80%] -right-[70%]"></div>
            <div className="space-y-8 relative z-10">
              <div className="bg-white/20 p-4 rounded-sm">
                <div className="text-white/75 mb-2">{t('cover.title')}</div>
                <div className="font-bold align-baseline">
                  {t.rich('cover.price', {
                    price: () => <span className="text-2xl">$0.55</span>,
                  })}
                </div>
              </div>
              <div>
                <ul className="space-y-2.5">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <li key={i} className="flex items-center gap-2 font-medium">
                      <RiCheckLine size={14} className="text-cyan-400" />
                      <span>{t(`cover.features.${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Button
                  size="large"
                  icon={<RiShoppingCart2Line size={18} />}
                  block
                  type="primary"
                >
                  {t('cover.buy')}
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

const Statistic: React.FC = () => {
  const { currentTab } = useDashboard();
  switch (currentTab) {
    case 'isp':
      return <IspPane />;
    case 'datacenter':
      return <DatacenterPane />;
    case 'residential':
      return <ResidentialPane />;
    case 'mobile':
      return <MobilePane />;
  }
};

export default Statistic;
