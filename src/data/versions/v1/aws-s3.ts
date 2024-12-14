import { StorageConfig } from '../../../types/helm';
import { commonConfig } from './common';

export const awsS3Config: StorageConfig = {
  ...commonConfig,
  storage: {
    bucketName: '',
    region: 'us-east-1'
  }
};