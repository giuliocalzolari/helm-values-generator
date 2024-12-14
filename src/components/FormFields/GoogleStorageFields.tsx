import React from 'react';
import { GoogleStorageParams } from '../../types/helm';
import CommonFields from './CommonFields';

interface GoogleStorageFieldsProps {
  values: GoogleStorageParams;
  onChange: (field: keyof GoogleStorageParams, value: string) => void;
}

const GoogleStorageFields: React.FC<GoogleStorageFieldsProps> = ({ values, onChange }) => {
  return (
    <div className="space-y-6">
      <CommonFields values={values} onChange={onChange} />
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bucket Name
          </label>
          <input
            type="text"
            value={values.bucketName}
            onChange={(e) => onChange('bucketName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="my-bucket"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Project ID
          </label>
          <input
            type="text"
            value={values.projectId}
            onChange={(e) => onChange('projectId', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="my-project-123"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service Account Key
          </label>
          <textarea
            value={values.serviceAccountKey}
            onChange={(e) => onChange('serviceAccountKey', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Paste your service account key JSON here"
            rows={4}
          />
        </div>
      </div>
    </div>
  );
};

export default GoogleStorageFields;