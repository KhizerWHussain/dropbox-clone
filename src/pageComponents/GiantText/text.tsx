import { Colors } from "../../../constants";
const { design } = Colors;

const ColorTextComponent = (text: string, color: string) => {
  return <span style={{ color }}>{text}</span>;
};

export const giantTextArray: any = [
  "With",
  "Dropbox,",
  "you",
  "can",
  ColorTextComponent("edit and sign", design.brownish),
  "your",
  "documents,",
  ColorTextComponent("collaborate", design.greenish),
  "on",
  "projects",
  "and",
  ColorTextComponent("search", design.purplish),
  "across",
  "all",
  "your",
  "apps,",
  "and",
  "it",
  "happens",
  "in",
  "the",
  "same",
  "place",
  "you",
  ColorTextComponent("securely store", design.pinkish),
  "all",
  "your",
  "content.",
  "It’s",
  "that",
  "simple",
  ":)",
];
