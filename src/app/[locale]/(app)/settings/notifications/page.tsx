import {
  AntdList,
  AntdListItem,
  AntdListMeta,
  AntdParagraph,
} from '@/components/antd';
import {
  RiEditLine,
  RiHomeOfficeLine,
  RiPinDistanceLine,
  RiServerLine,
  RiSmartphoneLine,
  RiWalletLine,
} from '@remixicon/react';
import { Avatar, Button, Card, Switch } from 'antd';

export default function Page() {
  return (
    <>
      <Card>
        <AntdParagraph strong>
          You&#39;ll get an email when your balance drops below the set amount.
        </AntdParagraph>
        <AntdList>
          <AntdListItem
            actions={[
              <Button
                type="link"
                size="small"
                key="edit"
                icon={<RiEditLine size={16} />}
              />,
              <Switch key="switch" />,
            ]}
          >
            <AntdListMeta
              className="[&_h4]:font-medium"
              avatar={
                <Avatar className="bg-(--ant-color-primary-bg) text-(--ant-color-primary)">
                  <RiWalletLine size={18} />
                </Avatar>
              }
              title={'Wallet'}
              description={'Balance Threshold: $ 500'}
            />
          </AntdListItem>
          <AntdListItem
            actions={[
              <Button
                type="link"
                size="small"
                key="edit"
                icon={<RiEditLine size={16} />}
              />,
              <Switch key="switch" />,
            ]}
          >
            <AntdListMeta
              className="[&_h4]:font-medium"
              avatar={
                <Avatar className="bg-(--ant-color-primary-bg) text-(--ant-color-primary)">
                  <RiPinDistanceLine size={18} />
                </Avatar>
              }
              title={'Residential Proxies'}
              description={
                'Expiration Threshold: 1 Days, Traffic Threshold: 1000 MB'
              }
            />
          </AntdListItem>
          <AntdListItem
            actions={[
              <Button
                type="link"
                size="small"
                key="edit"
                icon={<RiEditLine size={16} />}
              />,
              <Switch key="switch" />,
            ]}
          >
            <AntdListMeta
              className="[&_h4]:font-medium"
              avatar={
                <Avatar className="bg-(--ant-color-primary-bg) text-(--ant-color-primary)">
                  <RiHomeOfficeLine size={18} />
                </Avatar>
              }
              title={'Static ISP Proxies'}
              description={
                'Expiration Threshold: 1 Days, Traffic Threshold: 1000 MB'
              }
            />
          </AntdListItem>
          <AntdListItem
            actions={[
              <Button
                type="link"
                size="small"
                key="edit"
                icon={<RiEditLine size={16} />}
              />,
              <Switch key="switch" />,
            ]}
          >
            <AntdListMeta
              className="[&_h4]:font-medium"
              avatar={
                <Avatar className="bg-(--ant-color-primary-bg) text-(--ant-color-primary)">
                  <RiServerLine size={18} />
                </Avatar>
              }
              title={'Datacenter Proxies'}
              description={
                'Expiration Threshold: 1 Days, Traffic Threshold: 1000 MB'
              }
            />
          </AntdListItem>
          <AntdListItem
            actions={[
              <Button
                type="link"
                size="small"
                key="edit"
                icon={<RiEditLine size={16} />}
              />,
              <Switch key="switch" />,
            ]}
          >
            <AntdListMeta
              className="[&_h4]:font-medium"
              avatar={
                <Avatar className="bg-(--ant-color-primary-bg) text-(--ant-color-primary)">
                  <RiSmartphoneLine size={18} />
                </Avatar>
              }
              title={'Mobile Proxies'}
              description={
                'Expiration Threshold: 1 Days, Traffic Threshold: 1000 MB'
              }
            />
          </AntdListItem>
        </AntdList>
      </Card>
    </>
  );
}
