import * as React from "react";
import SignIn from "../components/SignIn";
import MainLayout from "../layouts/MainLayout";

export default function Index() {
  return (
    <MainLayout>
      <SignIn />
    </MainLayout>
  );
}
