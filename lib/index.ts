import { T3DMaterial } from "./materials/types";
import { Ground_Dirt_007 } from "./materials/Ground_Dirt_007";
import { Pebbles_025 } from "./materials/Pebbles_025";
import { Sand_002 } from "./materials/Sand_002";
import { SciFi_Wall_014 } from "./materials/SciFi_Wall_014";
import { Wood_027 } from "./materials/Wood_027";

export type { T3DMaterial, T3DMaterialCategory, T3DMaterialConfig } from "./materials/types";
interface LazyLoaderProxyProxyConstructor {
    new <T, H extends object>(target: T, handler: ProxyHandler<H>): H
  }
const LazyLoaderProxy = Proxy as LazyLoaderProxyProxyConstructor

export const T3DMaterials: { [key: string]: T3DMaterial } = new LazyLoaderProxy<object, { [name: string]: T3DMaterial }>({
    Wood_027,
    Pebbles_025,
    Ground_Dirt_007,
    Sand_002,
    SciFi_Wall_014
}, {
    get(o, key){        
        let material = Reflect.get(o, key)
        if(o.hasOwnProperty(key) && typeof key === "string" && typeof material === "function"){
            console.log(`Loading material ${key}`)
            material = material() // load textures
            Reflect.set(o, key, material) // save loaded material to only load once
        }
        return material
    }
})