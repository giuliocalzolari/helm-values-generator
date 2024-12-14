import { useState, useCallback } from 'react';
import { DeploymentKind, DeploymentParams } from '../types/helm';

const getInitialParams = (kind: DeploymentKind): DeploymentParams => {
  const common = {
    domain: '',
    username: '',
    password: '',
  };

  switch (kind) {
    case 'aws-s3':
      return {
        ...common,
        bucketName: '',
        region: 'us-east-1',
        accessKeyId: '',
        secretAccessKey: '',
      };
    case 'azure-blob':
      return {
        ...common,
        containerName: '',
        accountName: '',
        accountKey: '',
      };
    case 'google-storage':
      return {
        ...common,
        bucketName: '',
        projectId: '',
        serviceAccountKey: '',
      };
  }
};

export const useDeploymentParams = (kind: DeploymentKind) => {
  const [params, setParams] = useState<DeploymentParams>(getInitialParams(kind));

  const updateParam = useCallback((field: keyof DeploymentParams, value: string) => {
    setParams((prev) => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  return { params, updateParam };
};