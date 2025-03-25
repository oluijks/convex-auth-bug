import React from "react";

import { CardDescription, CardHeader, CardTitle } from "@/lib/components/ui/card";

type AuthCardHeaderProps = {
  title: string;
  description: string;
};

export const AuthCardHeader: React.FC<AuthCardHeaderProps> = ({ title, description }) => {
  return (
    <CardHeader className="text-center">
      <CardTitle className="font-heading font-normal text-2xl">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
  );
};
