import { LinksFunction } from "@remix-run/node";
import Footer from "~/components/Global/Footer";
import Header from "~/components/Global/Header";

import stylesHeader from "~/styles/header.css";
import stylesFooter from "~/styles/footer.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: stylesHeader },
    { rel: "stylesheet", href: stylesFooter },
  ];
};

export default function Index() {
  return (
    <div>
      <Header />
    </div>
  );
}
