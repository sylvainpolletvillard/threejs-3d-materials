import { MeshStandardMaterial, Texture } from "three";

export type T3DMaterialCategory = "Ground" | "Wood" | "Rock" | "Sand" | "Urban"

export interface T3DMaterialConfig {
    name: string;
    category: T3DMaterialCategory;
}

export type T3DMaterial = T3DMaterialConfig & MeshStandardMaterial 

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

