import { registry } from './auto-loader';

// For now, export empty objects to get the system running
// The proper adapters will be implemented once the import issues are resolved
export const items: Record<string, any> = {};
export const farmroutes: Record<string, any> = {};

console.log('⚠️  Using simplified adapter - full compatibility layer will be implemented next');