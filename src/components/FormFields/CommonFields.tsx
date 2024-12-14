import React from 'react';
import { CommonParams } from '../../types/helm';

interface CommonFieldsProps {
  values: CommonParams;
  onChange: (field: keyof CommonParams, value: string) => void;
}

const CommonFields: React.FC<CommonFieldsProps> = ({ values, onChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Domain
        </label>
        <input
          type="text"
          value={values.domain}
          onChange={(e) => onChange('domain', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="example.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Username
        </label>
        <input
          type="text"
          value={values.username}
          onChange={(e) => onChange('username', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="admin"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          value={values.password}
          onChange={(e) => onChange('password', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="••••••••"
        />
      </div>
    </div>
  );
};

export default CommonFields;