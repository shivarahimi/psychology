// base
import { Popover } from "antd";
import { FC, ReactNode } from "react";

interface IPropType {
  content: JSX.Element;
  title?: string;
  trigger: "hover" | "focus" | "click";
  children: ReactNode;
}

const FullPopover: FC<IPropType> = ({
  content,
  title,
  trigger = "click",
  children,
}) => {
  return (
    <section>
      <Popover content={content} title={title} trigger={trigger}>
        {children}
      </Popover>
    </section>
  );
};

export { FullPopover };
