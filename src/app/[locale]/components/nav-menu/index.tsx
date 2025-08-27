'use client';
import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/utils/classname';
import { GetProp, Menu, MenuProps } from 'antd';
import React from 'react';

export type NavMenuItemType = GetProp<MenuProps, 'items'>[number];

interface NavMenuProps extends Omit<MenuProps, 'items'> {
  items: NavMenuItemType[];
  classNames?: {
    menu?: string;
    item?: string;
  };
}

const NavMenu: React.FC<NavMenuProps> = ({
  classNames,
  className,
  ...props
}) => {
  const pathname = usePathname();
  return (
    <Menu
      className={cn(className, classNames?.menu)}
      {...props}
      _internalRenderMenuItem={(dom, props) => {
        const { title, attribute, className, elementRef, ...restProps } =
          dom.props;
        const isSelected =
          props.eventKey === '/'
            ? pathname === props.eventKey
            : pathname.startsWith(props.eventKey);
        return (
          <Link
            href={props.eventKey}
            target={props.eventKey.startsWith('http') ? '_blank' : '_self'}
            {...attribute}
            className={cn(
              className,
              'group',
              isSelected && 'ant-menu-item-selected',
              classNames?.item,
            )}
            title={typeof title === 'string' ? title : undefined}
            ref={elementRef}
            {...restProps}
          />
        );
      }}
    />
  );
};

export default NavMenu;
