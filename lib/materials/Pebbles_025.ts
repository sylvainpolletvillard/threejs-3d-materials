import colorMapFile from "../assets/textures/Pebbles_025/Pebbles_025_BaseColor.jpg"
import normalMapFile from "../assets/textures/Pebbles_025/Pebbles_025_Normal.jpg"
import roughnessMapFile from "../assets/textures/Pebbles_025/Pebbles_025_Roughness.jpg"
import aoMapFile from "../assets/textures/Pebbles_025/Pebbles_025_AmbientOcclusion.jpg"
import { lazyMaterialLoader } from "./loader";

export const Pebbles_025 = lazyMaterialLoader({
    name: "Pebbles_025",
    category: "Rock",
    colorMapFile,
    normalMapFile,
    roughnessMapFile,
    aoMapFile
});