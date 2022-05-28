import {
  DocumentInitialProps,
  RenderPageResult,
  DocumentInitialProps,
} from "next/dist/shared/lib/utils";
import { ReactElement, JSXElementConstructor, ReactFragment } from "react";

declare module "next/document" {
  export type DocumentInitialProps = RenderPageResult & {
    styles?:
      | ReactElement[]
      | ReactFragment
      | ReactElement
      | JSXElementConstructor;
    emotionStyleTags?: JSX.Element[];
  };
}
