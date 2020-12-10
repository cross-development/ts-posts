//Core
import React from 'react';
//Styles
import { StylesLayout } from './Layout.styles';

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => <StylesLayout>{children}</StylesLayout>;

export default Layout;
