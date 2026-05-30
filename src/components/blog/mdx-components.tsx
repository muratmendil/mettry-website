import type { MDXComponents } from "mdx/types";
import { Callout } from "./Callout";
import { PullQuote } from "./PullQuote";
import { ArticleImage } from "./ArticleImage";
import { ArticleTable } from "./ArticleTable";
import { InlineCTA } from "./InlineCTA";
import { slugify } from "@/lib/blog";

/**
 * Composants disponibles dans les fichiers MDX.
 * À passer à <MDXRemote components={...}> ou compileMDX({ components: ... }).
 *
 * Les h2/h3 sont overridés pour générer un id slugifié — utilisé par le sommaire
 * (TOC) qui scrolle vers ces ancres.
 */
export const blogMdxComponents: MDXComponents = {
    Callout,
    PullQuote,
    ArticleImage,
    ArticleTable,
    InlineCTA,
    h2: (props) => {
        const text = typeof props.children === "string" ? props.children : "";
        return <h2 id={ slugify(text) } {...props
} />;
  },
h3: (props) => {
    const text = typeof props.children === "string" ? props.children : "";
    return <h3 id={ slugify(text) } {...props } />;
},
};