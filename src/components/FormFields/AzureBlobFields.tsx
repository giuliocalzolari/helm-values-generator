import React from 'react';
import { AzureBlobParams } from '../../types/helm';
import CommonFields from './CommonFields';

interface AzureBlobFieldsProps {
  values: AzureBlobParams;
  onChange: (field: keyof AzureBlobParams, value: string) => void;
}

const AzureBlobFields: React.FC<AzureBlobFieldsProps> = ({ values, onChange }) => {
  return (
    <div className="space-y-6">
      <CommonFields values={values} onChange={onChange} />
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Container Name
          </label>
          <input
            type="text"
            value={values.containerName}
            onChange={(e) => onChange('containerName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="my-container"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Storage Account Name
          </label>
          <input
            type="text"
            value={values.accountName}
            onChange={(e) => onChange('accountName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="mystorageaccount"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Storage Account Key
          </label>
          <input
            type="password"
            value={values.accountKey}
            onChange={(e) => onChange('accountKey', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>
      </div>
    </div>
  );
};

export default AzureBlobFields;