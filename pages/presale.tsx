import { NextPage } from "next";
import { Dashboard } from "layouts/dashboard";

export interface PresaleProps {
  hello: string;
}

const Presale: NextPage<PresaleProps> = () => {
  return <>Overview</>;
};

Presale.getLayout = ({ children }) => {
  return <Dashboard>{children}</Dashboard>;
};

export default Presale;
