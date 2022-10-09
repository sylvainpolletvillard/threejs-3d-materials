import colorMapFile from "../assets/textures/Wood_027/Wood_027_basecolor.jpg"
import normalMapFile from "../assets/textures/Wood_027/Wood_027_normal.jpg"
import roughnessMapFile from "../assets/textures/Wood_027/Wood_027_roughness.jpg"
import aoMapFile from "../assets/textures/Wood_027/Wood_027_ambientOcclusion.jpg"
import { lazyMaterialLoader } from "./loader";

export const Wood_027 = lazyMaterialLoader({
    name: "Wood_027",
    category: "Wood",
    colorMapFile,
    normalMapFile,
    roughnessMapFile,
    aoMapFile
});