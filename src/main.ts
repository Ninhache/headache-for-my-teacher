const standardHtmlTags = [
  "a",
  "h1",
  "div",
  "span",
  "header",
  "main",
  "ul",
  "li",
  "p",
] as const;

const voidHtmlTags = ["img"] as const;

type StandardHtmlTags = (typeof standardHtmlTags)[number];
type VoidHtmlTags = (typeof voidHtmlTags)[number];
type HtmlTags = StandardHtmlTags | VoidHtmlTags;

type GlobalAttributes = {
  id?: string;
  class?: string;
  style?: string;
};

type RequireKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;

type SpecificAttributes = {
  img: { src: string; alt: string } & (
    | { width?: never; height?: never }
    | RequireKeys<{ width: number; height: number }, "width" | "height">
  );
  a: { href: string };
};

type AttributesFor<T extends HtmlTags> = GlobalAttributes &
  (T extends keyof SpecificAttributes ? SpecificAttributes[T] : {});

type AttributeString<T> = T extends Record<string, unknown>
  ? {
      [K in Extract<keyof T, string>]: T[K] extends string | number | boolean
        ? `${K}="${T[K]}"`
        : never;
    }[Extract<keyof T, string>]
  : never;

type HtmlElements<T extends HtmlTags> = T extends StandardHtmlTags
  ? `<${T}${AttributeString<AttributesFor<T>> extends never
      ? ""
      : ` ${AttributeString<AttributesFor<T>>}`}>${string}</${T}>`
  : `<${T}${AttributeString<AttributesFor<T>> extends never
      ? ""
      : ` ${AttributeString<AttributesFor<T>>}`} />`;

type HtmlContent<T extends HtmlTags> = T extends StandardHtmlTags
  ? HtmlElements<HtmlTags> | Array<string | HtmlElements<HtmlTags>> | string
  : never;

function renderElement<T extends HtmlTags>(
  tag: T,
  attributes: T extends keyof SpecificAttributes
    ? SpecificAttributes[T] & GlobalAttributes
    : Partial<AttributesFor<T>>,
  content?: HtmlContent<T>
): HtmlElements<T> {
  const attrString = Object.entries(attributes || {})
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");

  if (content && standardHtmlTags.includes(tag as StandardHtmlTags)) {
    return `<${tag} ${attrString}>${content}</${tag}>` as HtmlElements<T>;
  }
  return `<${tag} ${attrString} />` as HtmlElements<T>;
}

function renderImg(src: string, alt: string = "") {
  return renderElement("img", { src, alt });
}

const validImg = renderImg("https://picsum.photos/300");
document.querySelector(".videoList")!.innerHTML = validImg;
