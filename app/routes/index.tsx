import { LinksFunction } from "@remix-run/node";
import Header from "~/components/Global/Header";
import stylesHeader from "~/styles/header.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesHeader }];
};

export default function Index() {
  return (
    <div>
      <Header />
    </div>
  );
}
