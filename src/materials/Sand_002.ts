import { DoubleSide, MeshStandardMaterial } from "three";

import colorMapFile from "../assets/textures/Sand_002/Sand 002_COLOR.jpg"
import normalMapFile from "../assets/textures/Sand_002/Sand 002_NRM.jpg"
import roughnessMapFile from "../assets/textures/Sand_002/Sand 002_SPEC.jpg"
import aoMapFile from "../assets/textures/Sand_002/Sand 002_OCC.jpg"
import { lazyLoader } from "./lazyLoader";

export const Sand_002 = lazyLoader({
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