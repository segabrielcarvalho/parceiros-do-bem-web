import { routes } from "@/routes";
import Link from "next/link";
import React from "react";

export const LoginButton: React.FC = () => (
  <Link
    href={routes.auth.login.path}
    className="text-sm/6 font-semibold text-gray-900"
  >
    Faça Login <span aria-hidden="true">&rarr;</span>
  </Link>
);
