import { IContainerPluginInputs } from '@cloudbase/framework-plugin-container';

export interface IDenoPluginInputs {
  dockerImage?: string;
  runtime?: string;
  servicePath?: string;
  serviceName?: string;
  projectPath?: string;
  containerOptions?: IContainerPluginInputs;
  functionOptions?: any;
  installDeps: boolean;
  buildCommand?: string;
  wrapExpress?: boolean;
}
