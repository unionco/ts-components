- namespace all the styles, so ThumbsSlider.Container or something to avoid super verbose names and potential name conflict
  - Goal 1: Avoid real or assumed conflicts with component names
    - solution: always prepend with `Styled`
  - Goal 2: Avoid very verbose names
    - solution: Do the `.` naming convention where you can "re-use" names like `Container` that will be namespaced because of the parent object name
- confirm default export strategy vs. all named exports, particularly since we're using a top-level index that exports 'em all anyway
  - Currently we have to do both in the top-level index file, like:
  ```
  export { default as FlyoutSearch } from './FlyoutSearch';
  export * from './FlyoutSearch';
  ```
- ensure every component has a story that has all the config props as knobs
- standardize naming for levels of containers, so "Container", then it's child is "Wrapper" or something like that.
  - certain instances of components requires several wrapping styled-components
- 
