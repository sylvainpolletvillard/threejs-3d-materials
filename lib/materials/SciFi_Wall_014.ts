
import colorMapFile from "../assets/textures/Sci-Fi_Wall_014/Sci-Fi_Wall_014_basecolor.jpg"
import normalMapFile from "../assets/textures/Sci-Fi_Wall_014/Sci-Fi_Wall_014_normal.jpg"
import roughnessMapFile from "../assets/textures/Sci-Fi_Wall_014/Sci-Fi_Wall_014_roughness.jpg"
import aoMapFile from "../assets/textures/Sci-Fi_Wall_014/Sci-Fi_Wall_014_ambientOcclusion.jpg"
import metalnessMapFile from "../assets/textures/Sci-Fi_Wall_014/Sci-Fi_Wall_014_metallic.jpg"
import { lazyMaterialLoader } from "./loader";

export const SciFi_Wall_014 = lazyMaterialLoader({
    colorMapFile,
    normalMapFile,
    roughnessMapFile,
    aoMapFile,
    metalnessMapFile
});