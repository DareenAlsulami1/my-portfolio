// app/globals.d.ts or src/globals.d.ts
declare module '*.css' {
  const content: string;
  export default content;
}