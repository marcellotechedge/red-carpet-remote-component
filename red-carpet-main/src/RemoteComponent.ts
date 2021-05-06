import {
    createRemoteComponent,
    createRequires
  } from "@paciolan/remote-component";
  import Config from "./remote-component.config";
  
  const requires = createRequires(Config.resolve as any);
  
  export const RemoteComponent = createRemoteComponent({ requires });