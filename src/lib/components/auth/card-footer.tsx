import { Link } from "@tanstack/react-router";
import React from "react";

type AuthCardFooterProps = {
  message: string;
  linkTitle: string;
  linkHref: string;
};

export const AuthCardFooter: React.FC<AuthCardFooterProps> = ({
  message,
  linkTitle,
  linkHref,
}) => {
  return (
    <div className="flex justify-center">
      {message}
&nbsp;
      <Link to={linkHref} className="underline underline-offset-4">
        {linkTitle}
      </Link>
    </div>
  );
};
