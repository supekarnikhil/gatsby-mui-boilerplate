import * as React from "react";
import SignIn from "../components/SignIn";
import LandingPageLayout from "../layouts/page_layouts/LandingPageLayout";

export default function Index() {
  return (
    <LandingPageLayout>
      <SignIn />
    </LandingPageLayout>
  );
}
