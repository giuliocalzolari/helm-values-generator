export type DeploymentKind = 'aws-s3' | 'azure-blob' | 'google-storage';

export interface CommonParams {
  domain: string;
  username: string;
  password: string;
}

export interface AwsS3Params extends CommonParams {
  bucketName: string;
  region: string;
  accessKeyId: string;
  secretAccessKey: string;
}

export interface AzureBlobParams extends CommonParams {
  containerName: string;
  accountName: string;
  accountKey: string;
}

export interface GoogleStorageParams extends CommonParams {
  bucketName: string;
  projectId: string;
  serviceAccountKey: string;
}

export type DeploymentParams = AwsS3Params | AzureBlobParams | GoogleStorageParams;

export interface HelmVersion {
  version: string;
  deploymentKinds: DeploymentKind[];
}

export interface CommonConfig {
  replicaCount: number;
  domain: string;
  auth: {
    username: string;
    password: string;
  };
  image: {
    repository: string;
    tag: string;
    pullPolicy: string;
  };
  resources: {
    limits: {
      cpu: string;
      memory: string;
    };
    requests: {
      cpu: string;
      memory: string;
    };
  };
}