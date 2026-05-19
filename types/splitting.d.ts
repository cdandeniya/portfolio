declare module 'splitting' {
  interface SplittingOptions {
    target?: string | Element | Element[]
    by?: string
  }
  function Splitting(options?: SplittingOptions): unknown
  export default Splitting
}
