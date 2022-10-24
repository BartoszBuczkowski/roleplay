import { altvEsbuild } from 'altv-esbuild';
import esbuild from 'esbuild';

esbuild.build({
   watch: true,
   bundle: true,
   target: 'esnext',
   logLevel: 'info',
   format: 'esm',
   entryPoints: ['./src/client/client.ts', './src/client/views/App.tsx'],
   outdir: './dist',
   plugins: [
      altvEsbuild({
         mode: 'client',
         dev: true, // enables hot reload automatically
         altvEnums: true,
      }),
   ],
});
