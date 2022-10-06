import colorMapFile from "../assets/textures/Ground_Dirt_007/Ground_Dirt_007_basecolor.jpg"
import normalMapFile from "../assets/textures/Ground_Dirt_007/Ground_Dirt_007_normal.jpg"
import roughnessMapFile from "../assets/textures/Ground_Dirt_007/Ground_Dirt_007_roughness.jpg"
import aoMapFile from "../assets/textures/Ground_Dirt_007/Ground_Dirt_007_ambientOcclusion.jpg"
import { lazyMaterialLoader } from "./loader";

export const Ground_Dirt_007 = lazyMaterialLoader({
    colorMapFile,
    normalMapFile,
    roughnessMapFile,
    aoMapFile
});