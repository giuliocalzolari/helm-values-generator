import { StorageConfig } from '../../../types/helm';
import { commonConfig } from './common';

export const azureBlobConfig: StorageConfig = {
  ...commonConfig,
  storage: {
    containerName: '',
  }
};