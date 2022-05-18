import { NextPage } from "next";
import { Dashboard } from "layouts/dashboard";

export interface OverviewProps {
  hello: string;
}

const Overview: NextPage<OverviewProps> = () => {
  return <>Overview</>;
};

Overview.getLayout = ({ children }) => {
  return <Dashboard>{children}</Dashboard>;
};

export default Overview;
