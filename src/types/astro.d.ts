/**
 * @doc https://docs.astro.build/en/guides/typescript/#built-in-html-attributes
 */
/// <reference types="astro/astro-jsx" />

export type HTMLTagString = keyof astroHTML.JSX.DefinedIntrinsicElements;
