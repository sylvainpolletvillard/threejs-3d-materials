import { MeshStandardMaterial, TextureLoader, Texture } from "three";

export interface TexturePaths {
    colorMapFile: string;
    normalMapFile: string;
    roughnessMapFile: string;
    aoMapFile: string;
    metalnessMapFile?: string;
}

export interface TextureMaps {
    colorMap: Texture,
    normalMap: Texture,
    roughnessMap: Texture,
    aoMap: Texture,
    metalnessMap: Texture | undefined
}

export const lazyLoader = (texturePaths: TexturePaths, constructor: (textureMaps: TextureMaps) => MeshStandardMaterial) => {
    return () => {
        const textureLoader = new TextureLoader();
        const colorMap = textureLoader.load( texturePaths.colorMapFile );
        const normalMap = textureLoader.load( texturePaths.normalMapFile );
        const roughnessMap = textureLoader.load( texturePaths.roughnessMapFile );
        const aoMap = textureLoader.load( texturePaths.aoMapFile );
        const metalnessMap = texturePaths.metalnessMapFile ? textureLoader.load( texturePaths.metalnessMapFile ) : undefined;
        return constructor({
            colorMap,
            normalMap,
            roughnessMap,
            aoMap,
            metalnessMap
        }) 
    }
}