import { HelmVersion } from '../types/helm';

export const availableVersions: HelmVersion[] = [
  {
    version: 'v1',
    deploymentKinds: ['aws-s3', 'azure-blob', 'google-storage']
  }
];