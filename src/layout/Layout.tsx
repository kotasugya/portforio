import { ReactElement } from "react";
import { Header } from "../components/molecules/Header";
import { Footer } from "../components/molecules/Footer";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
