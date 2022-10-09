import colorMapFile from "../assets/textures/Sand_002/Sand 002_COLOR.jpg"
import normalMapFile from "../assets/textures/Sand_002/Sand 002_NRM.jpg"
import roughnessMapFile from "../assets/textures/Sand_002/Sand 002_SPEC.jpg"
import aoMapFile from "../assets/textures/Sand_002/Sand 002_OCC.jpg"
import { lazyMaterialLoader } from "./loader";

export const Sand_002 = lazyMaterialLoader({
    name: "Sand_002",
    category: "Sand",
    colorMapFile,
    normalMapFile,
    roughnessMapFile,
    aoMapFile
});