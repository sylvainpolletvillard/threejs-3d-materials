import { MeshStandardMaterial, TextureLoader,  DoubleSide, MeshStandardMaterialParameters } from "three";
import { T3DMaterial, T3DMaterialConfig, TexturePaths } from "./types"

export const lazyMaterialLoader: (config: T3DMaterialConfig & TexturePaths) => () => T3DMaterial = (config) =>{
    return () => {
        const textureLoader = new TextureLoader();
        const materialConfig: MeshStandardMaterialParameters = {
            map: textureLoader.load( config.colorMapFile ),
            normalMap: textureLoader.load( config.normalMapFile ),
            roughnessMap: textureLoader.load( config.roughnessMapFile ),
            aoMap: textureLoader.load( config.aoMapFile ),
            side: DoubleSide
        }
        if(config.metalnessMapFile){
            materialConfig.metalnessMap = textureLoader.load( config.metalnessMapFile )
        }
        return Object.assign(new MeshStandardMaterial(materialConfig), config) as T3DMaterial
    }
}