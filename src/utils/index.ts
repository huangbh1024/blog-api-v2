import { parse } from 'yaml';
import { join } from 'path';
import { readFileSync } from 'fs';

export const getEnv = () => process.env.RUNNING_ENV;

export const getConfig = () => {
  const env = getEnv();
  const yamlPath = join(process.cwd(), `./.config/${env}.yaml`);
  const file = readFileSync(yamlPath, 'utf8');
  return parse(file);
};
