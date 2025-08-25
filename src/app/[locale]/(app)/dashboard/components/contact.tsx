import { AntdParagraph, AntdTitle } from '@/components/antd';
import { Link } from '@/i18n/navigation';
import {
  RiChatSmile2Line,
  RiExternalLinkLine,
  RiFileList3Line,
  RiQuestionLine,
  RiServiceLine,
} from '@remixicon/react';
import { Avatar, Button, Card, Divider } from 'antd';
import React from 'react';

const Contact: React.FC = () => {
  return (
    <Card
      className="bg-linear-210 from-blue-50 to-transparent to-35%"
      classNames={{
        body: 'bg-transparent',
      }}
    >
      <div className="mb-2 text-(--ant-color-primary)">
        <RiChatSmile2Line size={32} />
      </div>
      <AntdTitle level={5} className="mt-0 mb-4">
        Get Help
      </AntdTitle>
      <AntdParagraph>
        Have any questions about our products or need a customized package?
      </AntdParagraph>
      <Button block color="primary" variant="outlined">
        Let&#39;s talk
      </Button>

      <Divider type="horizontal" dashed />

      <ul className="space-y-4">
        <li>
          <Link href="/" className="flex items-center justify-between">
            <div className="flex-auto flex items-center gap-2">
              <Avatar
                size={32}
                className="bg-(--ant-color-primary-bg) text-(--ant-color-primary)"
              >
                <RiServiceLine size={18} />
              </Avatar>
              <span className="text-black font-bold">Partners</span>
            </div>
            <div className="flex-none text-black/50">
              <RiExternalLinkLine size={16} />
            </div>
          </Link>
        </li>
        <li>
          <Link href="/" className="flex items-center justify-between">
            <div className="flex-auto flex items-center gap-2">
              <Avatar
                size={32}
                className="bg-(--ant-color-primary-bg) text-(--ant-color-primary)"
              >
                <RiFileList3Line size={18} />
              </Avatar>
              <span className="text-black font-bold">Documentation</span>
            </div>
            <div className="flex-none text-black/50">
              <RiExternalLinkLine size={16} />
            </div>
          </Link>
        </li>
        <li>
          <Link href="/" className="flex items-center justify-between">
            <div className="flex-auto flex items-center gap-2">
              <Avatar
                size={32}
                className="bg-(--ant-color-primary-bg) text-(--ant-color-primary)"
              >
                <RiQuestionLine size={18} />
              </Avatar>
              <span className="text-black font-bold">FAQs</span>
            </div>
            <div className="flex-none text-black/50">
              <RiExternalLinkLine size={16} />
            </div>
          </Link>
        </li>
      </ul>
    </Card>
  );
};

export default Contact;
