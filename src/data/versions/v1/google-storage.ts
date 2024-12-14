import { StorageConfig } from '../../../types/helm';
import { commonConfig } from './common';

export const googleStorageConfig: StorageConfig = {
  ...commonConfig,
  storage: {
    bucketName: '',
    projectId: ''
  }
};