'use client';
import {
  Form as AntdForm,
  Layout as AntdLayout,
  List as AntdList,
  Input,
  Radio,
  Typography,
} from 'antd';

const {
  Sider: AntdSider,
  Content: AntdContent,
  Header: AntdHeader,
  Footer: AntdFooter,
} = AntdLayout;

const { Item: AntdFormItem } = AntdForm;

const { Password: AntdInputPassword } = Input;

const {
  Title: AntdTitle,
  Paragraph: AntdParagraph,
  Text: AntdText,
  Link: AntdLink,
} = Typography;

const { Item: AntdListItem } = AntdList;

const { Group: AntdRadioGroup, Button: AntdRadioButton } = Radio;

export {
  AntdContent,
  AntdFooter,
  AntdForm,
  AntdFormItem,
  AntdHeader,
  AntdInputPassword,
  AntdLayout,
  AntdLink,
  AntdList,
  AntdListItem,
  AntdParagraph,
  AntdRadioButton,
  AntdRadioGroup,
  AntdSider,
  AntdText,
  AntdTitle,
};
