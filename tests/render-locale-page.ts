import { render } from "@testing-library/react";
import type { ReactElement } from "react";

export async function renderLocalePage(
  importPage: () => Promise<{ default: (props: {
    params: Promise<{ locale: string }>;
  }) => Promise<ReactElement> }>,
  locale = "en",
) {
  const pageModule = await importPage();
  const element = await pageModule.default({
    params: Promise.resolve({ locale }),
  });

  return render(element);
}
