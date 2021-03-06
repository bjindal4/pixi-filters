/// <reference types="pixi.js" />
declare module "@pixi/filter-advanced-bloom" {
    export class AdvancedBloomFilter extends PIXI.Filter {
        constructor(options?: AdvancedBloomOptions);
        constructor(threshold?: number);
        threshold: number;
        bloomScale: number;
        brightness: number;
        kernels: number[];
        blur: number;
        quality: number;
        pixelSize:number|PIXI.Point|number[];
        resolution: number;
    }
    export interface AdvancedBloomOptions {
        threshold?: number;
        bloomScale?: number;
        brightness?: number;
        kernels?: number[];
        blur?: number;
        quality?: number;
        pixelSize?: number|PIXI.Point|number[];
        resolution?: number;
    }
}