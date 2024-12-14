import { AwsS3Params, AzureBlobParams, GoogleStorageParams } from '../types/helm';

const generateCommonConfig = (params: { domain: string; username: string; password: string }) => ({
  replicaCount: 1,
  domain: params.domain,
  auth: {
    username: params.username,
    password: params.password,
  },
  image: {
    repository: 'nginx',
    tag: 'latest',
    pullPolicy: 'IfNotPresent',
  },
  resources: {
    limits: {
      cpu: '100m',
      memory: '128Mi',
    },
    requests: {
      cpu: '100m',
      memory: '128Mi',
    },
  },
});

export const generateAwsS3Config = (params: AwsS3Params) => ({
  ...generateCommonConfig(params),
  storage: {
    type: 'aws-s3',
    bucketName: params.bucketName,
    region: params.region,
    credentials: {
      accessKeyId: params.accessKeyId,
      secretAccessKey: params.secretAccessKey,
    },
  },
});

export const generateAzureBlobConfig = (params: AzureBlobParams) => ({
  ...generateCommonConfig(params),
  storage: {
    type: 'azure-blob',
    containerName: params.containerName,
    credentials: {
      accountName: params.accountName,
      accountKey: params.accountKey,
    },
  },
});

export const generateGoogleStorageConfig = (params: GoogleStorageParams) => ({
  ...generateCommonConfig(params),
  storage: {
    type: 'google-storage',
    bucketName: params.bucketName,
    projectId: params.projectId,
    credentials: {
      serviceAccountKey: params.serviceAccountKey,
    },
  },
});