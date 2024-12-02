type StandardHtmlTags = "h1" | "div" | "span";
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

function renderElement<T extends HtmlTags>(
  tag: T,
  attributes: T extends keyof SpecificAttributes
    ? Pick<AttributesFor<T>, keyof SpecificAttributes[T]> &
        Partial<GlobalAttributes>
    : Partial<AttributesFor<T>>,
  content?: T extends StandardHtmlTags ? string : never
): HtmlElements<T> {
  const attrString = Object.entries(attributes || {})
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");
  if (content) {
    return `<${tag} ${attrString}>${content}</${tag}>` as HtmlElements<T>;
  }
  return `<${tag} ${attrString} />` as HtmlElements<T>;
}

const title = renderElement("img", {
  style: "color: red",
  src: "https://picsum.photos/200",
  alt: "Random unsplash image",
  width: 200,
  height: 200,
});
document.querySelector(".container > header")!.innerHTML = title;
