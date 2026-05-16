"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

import { useLocalePath } from "@/hooks/use-locale-path";

function isLocalizedExternally(href: string) {
  return /^(https?:|tel:|mailto:)/i.test(href);
}

type LocaleLinkProps = ComponentProps<typeof Link>;

export function LocaleLink({ href, ...props }: LocaleLinkProps) {
  const { href: localize } = useLocalePath();
  const resolved =
    typeof href === "string" && !isLocalizedExternally(href) ? localize(href) : href;

  return <Link href={resolved} {...props} />;
}
