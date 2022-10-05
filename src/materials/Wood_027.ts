import { DoubleSide, MeshStandardMaterial } from "three";

import colorMapFile from "../assets/textures/Wood_027/Wood_027_basecolor.jpg"
import normalMapFile from "../assets/textures/Wood_027/Wood_027_normal.jpg"
import roughnessMapFile from "../assets/textures/Wood_027/Wood_027_roughness.jpg"
import aoMapFile from "../assets/textures/Wood_027/Wood_027_ambientOcclusion.jpg"
import { lazyLoader } from "./lazyLoader";

export const Wood_027 = lazyLoader({
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