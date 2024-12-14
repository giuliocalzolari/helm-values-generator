import { CommonConfig } from '../../../types/helm';

export const commonConfig: CommonConfig = {
  replicaCount: 1,
  image: {
    repository: 'nginx',
    tag: 'latest',
    pullPolicy: 'IfNotPresent'
  },
  resources: {
    limits: {
      cpu: '100m',
      memory: '128Mi'
    },
    requests: {
      cpu: '100m',
      memory: '128Mi'
    }
  }
};