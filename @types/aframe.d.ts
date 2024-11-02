declare namespace JSX {
  interface IntrinsicElements {
    "a-scene": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
    "a-entity": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      "gltf-model"?: string;
      position?: string;
      scale?: string;
      rotation?: string;
      visible?: string;
    };
    "a-sky": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      src?: string;
      material?: string;
    };
    // Add more A-Frame elements and their attributes as needed
  }
}
