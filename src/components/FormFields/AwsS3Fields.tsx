import React from 'react';
import { AwsS3Params } from '../../types/helm';
import CommonFields from './CommonFields';

interface AwsS3FieldsProps {
  values: AwsS3Params;
  onChange: (field: keyof AwsS3Params, value: string) => void;
}

const AwsS3Fields: React.FC<AwsS3FieldsProps> = ({ values, onChange }) => {
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
            Region
          </label>
          <input
            type="text"
            value={values.region}
            onChange={(e) => onChange('region', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="us-east-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Access Key ID
          </label>
          <input
            type="text"
            value={values.accessKeyId}
            onChange={(e) => onChange('accessKeyId', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="AKIAXXXXXXXXXXXXXXXX"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Secret Access Key
          </label>
          <input
            type="password"
            value={values.secretAccessKey}
            onChange={(e) => onChange('secretAccessKey', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>
      </div>
    </div>
  );
};

export default AwsS3Fields;