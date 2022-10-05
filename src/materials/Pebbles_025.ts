import { DoubleSide, MeshStandardMaterial } from "three";

import colorMapFile from "../assets/textures/Pebbles_025/Pebbles_025_BaseColor.jpg"
import normalMapFile from "../assets/textures/Pebbles_025/Pebbles_025_Normal.jpg"
import roughnessMapFile from "../assets/textures/Pebbles_025/Pebbles_025_Roughness.jpg"
import aoMapFile from "../assets/textures/Pebbles_025/Pebbles_025_AmbientOcclusion.jpg"
import { lazyLoader } from "./lazyLoader";

export const Pebbles_025 = lazyLoader({
    colorMapFile,
    normalMapFile,
    roughnessMapFile,
    aoMapFile
}, ({
    colorMap,
    normalMap,
    roughnessMap,
    aoMap
}) => new MeshStandardMaterial({
    map: colorMap,
    normalMap: normalMap,
    roughnessMap: roughnessMap,
    aoMap: aoMap,
    side: DoubleSide
}));