import { federation } from "@module-federation/vite";
import fg from "fast-glob";
import { cloneDeep } from "lodash-es";
import { build } from "vite";

async function buildAll() {
  const mfConfigPaths = await fg("./src/plugins/**/mf-config.ts");
  console.log(mfConfigPaths);
  for (const p of mfConfigPaths) {
    const { default: federationConfig } = await import(`./${p}`);
    const { name } = federationConfig;
    const { default: viteConfig } = await import("./vite.config");
    const config = cloneDeep(viteConfig);

    const dir = p.match(/\.\/src\/(.*)\/mf-config.ts/)?.[1];
    config.plugins?.push(federation(federationConfig));
    if (config.build?.rollupOptions) {
      config.build.rollupOptions = {
        output: {
          chunkFileNames: `${dir}/js/[name]-[hash].js`,
          entryFileNames: `${dir}/js/[name]-[hash].js`,
          assetFileNames: `${dir}/[ext]/[name]-[hash].[ext]`,
        },
      };
    }
    await build(config);
  }
}
buildAll();
