import 'core-js/client/shim';
import 'reflect-metadata';
require('zone.js/dist/zone');

Error['stackTraceLimit'] = Infinity;
require('zone.js/dist/long-stack-trace-zone');
