import type { ReactElement } from "react";

export const AllSingleUnderlineText = ({ text }: { text: string }): ReactElement => {

  const _text = text.split(' ').flatMap((word, idx) => [
    <u key={`u-${idx}`}>{word}</u>,
    ' '
  ])

  return (
    <span>
      {_text}
    </span>
  )
}

export const InvertedColorsText = ({ text }: { text: string }): ReactElement => {
  return (
    <span className="text__wrapper--inverted">
      <span className="text--inverted">{text}</span>
    </span>
  )
}