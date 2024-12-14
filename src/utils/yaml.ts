import { dump } from 'js-yaml';

export const convertToYaml = (config: unknown): string => {
  try {
    return dump(config, { indent: 2, lineWidth: -1 });
  } catch (error) {
    console.error('Error converting to YAML:', error);
    return '';
  }
};