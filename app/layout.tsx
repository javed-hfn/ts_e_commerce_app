"use client";
import { Provider } from "react-redux";
import { store } from "store/store";
import Header from "components/Header";
import "styles/globals.css";

export const metadata = {
  title: "E-Commerce",
  description: "E-Commerce Application Description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Provider store={store}>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
