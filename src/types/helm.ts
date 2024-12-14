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
  domain?: string;
  auth?: {
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
  monitoring?: {
    enabled: boolean;
    scrapeInterval: string;
  };
  ingress?: {
    enabled: boolean;
    annotations: Record<string, string>;
  };
  security?: {
    podSecurityContext: {
      runAsNonRoot: boolean;
      runAsUser: number;
    };
    containerSecurityContext: {
      allowPrivilegeEscalation: boolean;
      readOnlyRootFilesystem: boolean;
    };
  };
}

export interface StorageConfig extends CommonConfig {
  storage: {
    bucketName?: string;
    region?: string;
    containerName?: string;
    projectId?: string;
    location?: string;
    encryption?: {
      enabled: boolean;
      algorithm?: string;
      keyType?: string;
      kmsKeyName?: string;
    };
    versioning?: {
      enabled: boolean;
    };
    lifecycle?: {
      enabled: boolean;
      transitionDays?: number;
      expirationDays?: number;
      coolAfterDays?: number;
      archiveAfterDays?: number;
      deleteAfterDays?: number;
      nearlineDays?: number;
      coldlineDays?: number;
      archiveDays?: number;
    };
    accessTier?: string;
  };
}
