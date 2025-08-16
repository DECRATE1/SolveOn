import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { setVisibleLimit } from "../store/AppSlice";
import type { ReactNode } from "react";

interface HandlerLinkProps {
  to: string;
  onClick?: (e?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  children: ReactNode;
  className: string;
  role?: string;
}

export default function HandlerLink({
  to,
  onClick,
  children,
  className,
  role,
  ...props
}: HandlerLinkProps) {
  const dispatch = useDispatch();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    dispatch(setVisibleLimit(4));
    if (onClick) onClick(e);
  };
  return (
    <Link
      {...props}
      className={className}
      to={to}
      role={role}
      onClick={(e) => handleClick(e)}
    >
      {children}
    </Link>
  );
}
