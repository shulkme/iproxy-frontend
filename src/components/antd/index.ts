'use client';
import {
  DatePicker as AntdDatePicker,
  Form as AntdForm,
  Input as AntdInput,
  Layout as AntdLayout,
  List as AntdList,
  Radio as AntdRadio,
  Typography,
} from 'antd';

const {
  Sider: AntdSider,
  Content: AntdContent,
  Header: AntdHeader,
  Footer: AntdFooter,
} = AntdLayout;

const { Item: AntdFormItem } = AntdForm;

const { Password: AntdInputPassword } = AntdInput;

const {
  Title: AntdTitle,
  Paragraph: AntdParagraph,
  Text: AntdText,
  Link: AntdLink,
} = Typography;

const { Item: AntdListItem } = AntdList;
const { Meta: AntdListMeta } = AntdListItem;

const { Group: AntdRadioGroup, Button: AntdRadioButton } = AntdRadio;

const { RangePicker: AntdDateRangePicker } = AntdDatePicker;

export {
  AntdContent,
  AntdDatePicker,
  AntdDateRangePicker,
  AntdFooter,
  AntdForm,
  AntdFormItem,
  AntdHeader,
  AntdInput,
  AntdInputPassword,
  AntdLayout,
  AntdLink,
  AntdList,
  AntdListItem,
  AntdListMeta,
  AntdParagraph,
  AntdRadio,
  AntdRadioButton,
  AntdRadioGroup,
  AntdSider,
  AntdText,
  AntdTitle,
};
