import { DoubleSide, MeshStandardMaterial } from "three";

import colorMapFile from "../assets/textures/Ground_Dirt_007/Ground_Dirt_007_basecolor.jpg"
import normalMapFile from "../assets/textures/Ground_Dirt_007/Ground_Dirt_007_normal.jpg"
import roughnessMapFile from "../assets/textures/Ground_Dirt_007/Ground_Dirt_007_roughness.jpg"
import aoMapFile from "../assets/textures/Ground_Dirt_007/Ground_Dirt_007_ambientOcclusion.jpg"
import { lazyLoader } from "./lazyLoader";

export const Ground_Dirt_007 = lazyLoader({
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