// Permite importação de arquivos CSS/SCSS/etc. no TypeScript
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}