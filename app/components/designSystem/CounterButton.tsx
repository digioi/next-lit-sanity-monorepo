const Component = "my-element";

const DynamicImport = {
  // @ts-ignore
  server: () => Component,
  client: async () => {
    const component = await import("./CounterButton.client");
    return component.default;
  }    
}
export default DynamicImport;
  