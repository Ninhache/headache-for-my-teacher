type StandardHtmlTags =
  | "h1"
  | "div"
  | "span"
  | "header"
  | "main"
  | "ul"
  | "li"
  | "p";
type VoidHtmlTags = "img";

type HtmlTags = StandardHtmlTags | VoidHtmlTags;

type GlobalAttributes = {
  id?: string;
  class?: string;
  style?: string;
};

type SpecificAttributes = {
  // todo: improve "string" because it's not enough over-over-engiennier yet :p
  img: { src: string; alt: string; width?: number; height?: number };
};

type AttributesFor<T extends HtmlTags> = T extends keyof SpecificAttributes
  ? GlobalAttributes & SpecificAttributes[T]
  : GlobalAttributes;

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
  ? HtmlElements<HtmlTags> | Array<string | HtmlElements<HtmlTags>> | string // < I don't like the usage of raw string here but.. i'm a bit forced with that type structure
  : never;

function renderElement<T extends HtmlTags>(
  tag: T,
  attributes: T extends keyof SpecificAttributes
    ? Pick<AttributesFor<T>, keyof SpecificAttributes[T]> &
        Partial<GlobalAttributes>
    : Partial<AttributesFor<T>> | null,
  content?: HtmlContent<T>
): HtmlElements<T> {
  const attrString = Object.entries(attributes || {})
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");
  if (content) {
    return `<${tag} ${attrString}>${content}</${tag}>` as HtmlElements<T>;
  }
  return `<${tag} ${attrString} />` as HtmlElements<T>;
}

const fullHtml = renderElement("div", { id: "app" }, [
  renderElement("header", {}, [
    renderElement("h1", { style: "color: blue" }, "Welcome to My App"),
    renderElement("img", {
      src: "https://picsum.photos/300",
      alt: "A random image",
    }),
  ]),
  renderElement("main", { class: "content" }, [
    renderElement("p", null, "This is a paragraph with some text."),
    renderElement("ul", null, [
      renderElement("li", null, "First item"),
      renderElement("li", null, "Second item"),
    ]),
  ]),
]);
document.querySelector(".container")!.innerHTML = fullHtml;
