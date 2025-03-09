export interface NavigationItem {
  key: string;
  label?: string;
  icon?: JSX.Element;
  permission?: boolean;
  onClick?: () => void;
  itemIcon?: React.ReactNode | string;
  type?: "group" | "divider";
  dashed?: boolean;
  className?: string;
  disabled?: boolean;
  title?: string;
  children?: NavigationItem[];
}

export interface NavigationDetailsItem {
  activeUrl: string;
  for: string[];
}
