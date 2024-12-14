import React, { useState, useEffect } from 'react';
import { CloudIcon } from 'lucide-react';
import { DeploymentKind } from '../types/helm';
import { availableVersions } from '../data/versions';
import { useDeploymentParams } from '../hooks/useDeploymentParams';
import { convertToYaml } from '../utils/yaml';
import { 
  generateAwsS3Config, 
  generateAzureBlobConfig, 
  generateGoogleStorageConfig 
} from '../utils/configGenerators';
import AwsS3Fields from './FormFields/AwsS3Fields';
import AzureBlobFields from './FormFields/AzureBlobFields';
import GoogleStorageFields from './FormFields/GoogleStorageFields';

const ConfigForm: React.FC = () => {
  const [selectedVersion, setSelectedVersion] = useState<string>('');
  const [selectedDeployment, setSelectedDeployment] = useState<DeploymentKind | ''>('');
  const [configOutput, setConfigOutput] = useState<string>('');
  
  const { params, updateParam } = useDeploymentParams(
    selectedDeployment as DeploymentKind || 'aws-s3'
  );

  useEffect(() => {
    if (!selectedDeployment) {
      setConfigOutput('');
      return;
    }

    let config;
    switch (selectedDeployment) {
      case 'aws-s3':
        config = generateAwsS3Config(params as any);
        break;
      case 'azure-blob':
        config = generateAzureBlobConfig(params as any);
        break;
      case 'google-storage':
        config = generateGoogleStorageConfig(params as any);
        break;
      default:
        return;
    }

    setConfigOutput(convertToYaml(config));
  }, [selectedDeployment, params]);

  const renderDeploymentFields = () => {
    switch (selectedDeployment) {
      case 'aws-s3':
        return <AwsS3Fields values={params as any} onChange={updateParam} />;
      case 'azure-blob':
        return <AzureBlobFields values={params as any} onChange={updateParam} />;
      case 'google-storage':
        return <GoogleStorageFields values={params as any} onChange={updateParam} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex items-center justify-center mb-8">
        <CloudIcon className="w-8 h-8 mr-2 text-blue-500" />
        <h1 className="text-3xl font-bold text-gray-800">Helm Values Generator</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Version
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedVersion}
                onChange={(e) => {
                  setSelectedVersion(e.target.value);
                  setSelectedDeployment('');
                }}
              >
                <option value="">Select Version</option>
                {availableVersions.map((version) => (
                  <option key={version.version} value={version.version}>
                    {version.version}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deployment Kind
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedDeployment}
                onChange={(e) => setSelectedDeployment(e.target.value as DeploymentKind)}
                disabled={!selectedVersion}
              >
                <option value="">Select Deployment Kind</option>
                {selectedVersion && availableVersions
                  .find((v) => v.version === selectedVersion)
                  ?.deploymentKinds.map((kind) => (
                    <option key={kind} value={kind}>
                      {kind}
                    </option>
                  ))}
              </select>
            </div>

            {selectedDeployment && renderDeploymentFields()}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Generated YAML Configuration</h2>
          <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto h-[calc(100vh-16rem)] overflow-y-auto">
            <code className="text-green-400 whitespace-pre-wrap">{configOutput}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ConfigForm;