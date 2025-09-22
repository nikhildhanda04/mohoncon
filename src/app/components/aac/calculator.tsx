'use client'
import { useState } from "react";
import { motion } from "framer-motion";

type BlockSize = {
  value: string;
  label: string;
  cbm: number;
  blocksPerCBM: number;
};

type Result = {
  blocksRequired: number;
  wallVolumeM3: string;
  blockSize: string;
} | null;

export default function Calculator(){
  const [wallArea, setWallArea] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('600X200X075');
  const [result, setResult] = useState<Result>(null);

  const blockSizes: BlockSize[] = [
    { value: '600X200X050', label: '600X200X050', cbm: 0.006, blocksPerCBM: 166.67 },
    { value: '600X200X075', label: '600X200X075', cbm: 0.009, blocksPerCBM: 111.11 },
    { value: '600X200X100', label: '600X200X100', cbm: 0.012, blocksPerCBM: 83.33 },
    { value: '600X200X125', label: '600X200X125', cbm: 0.015, blocksPerCBM: 66.67 },
    { value: '600X200X150', label: '600X200X150', cbm: 0.018, blocksPerCBM: 55.56 },
    { value: '600X200X175', label: '600X200X175', cbm: 0.021, blocksPerCBM: 47.62 },
    { value: '600X200X200', label: '600X200X200', cbm: 0.024, blocksPerCBM: 41.67 },
    { value: '600X200X225', label: '600X200X225', cbm: 0.027, blocksPerCBM: 37.04 },
    { value: '600X200X250', label: '600X200X250', cbm: 0.030, blocksPerCBM: 33.33 },
    { value: '600X200X275', label: '600X200X275', cbm: 0.033, blocksPerCBM: 30.30 },
    { value: '600X200X300', label: '600X200X300', cbm: 0.036, blocksPerCBM: 27.78 }
  ];

  const calculateBlocks = () => {
    const wallAreaValue = parseFloat(wallArea);
    
    if (!wallAreaValue || wallAreaValue <= 0) {
      alert('Please enter a valid wall area');
      return;
    }

    const selectedBlock = blockSizes.find(block => block.value === selectedSize);
    if (!selectedBlock) return;

    // Convert wall area from sq.ft to sq.m (1 sq.ft = 0.092903 sq.m)
    const wallAreaM2 = wallAreaValue * 0.092903;
    
    // Calculate wall thickness in meters
    const thickness = parseInt(selectedSize.split('X')[2]) / 1000; // Convert mm to m
    
    // Calculate volume of wall
    const wallVolume = wallAreaM2 * thickness;
    
    // Calculate number of blocks required
    const blocksRequired = Math.ceil(wallVolume * selectedBlock.blocksPerCBM);
    
    setResult({
      blocksRequired: blocksRequired,
      wallVolumeM3: wallVolume.toFixed(3),
      blockSize: selectedBlock.label
    });
  };


    return(
     <motion.div 
     initial = {{ y:50, opacity:0, filter:'blur(10px)'}}
            whileInView = {{ y:0, opacity:1, filter:'blur(0px)'}}
            transition = {{ duration:0.7, delay:0.3}}
     className="bg-blue-800 rounded-3xl p-8 md:w-md mt-20 text-white">
      {/* Wall Area Input */}
      <div className="mb-6">
        <label className="block text-sm md:text-lg font-medium mb-3">
          Wall Area
        </label>
        <div className="relative">
          <input
            type="number"
            value={wallArea}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWallArea(e.target.value)}
            placeholder="Enter area"
            className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <span className="absolute right-12 top-1/2 transform -translate-y-1/2 text-white/80">
            sq.ft
          </span>
        </div>
      </div>

      {/* Block Size Dropdown */}
      <div className="mb-6">
        <label className="block text-sm md:text-lg font-medium mb-3">
          Size of Block
        </label>
        <select
          value={selectedSize}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedSize(e.target.value)}
          className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none cursor-pointer"
        >
          {blockSizes.map((block) => (
            <option key={block.value} value={block.value} className="bg-blue-600 text-white">
              {block.label}
            </option>
          ))}
        </select>
      </div>

      {/* Calculate Button */}
      <button
        onClick={calculateBlocks}
        className="w-full bg-lime-400 hover:bg-lime-500 text-blue-900 font-semibold text-xs md:text-base py-4 rounded-xl transition-colors duration-200 mb-6"
      >
        Calculate
      </button>

      {/* Result */}
      <div className="mb-4">
        <h3 className="md:text-lg text-xs font-medium mb-2">
          Total Product Required
        </h3>
        {result ? (
          <div className="bg-white/20 rounded-lg p-4">
            <div className="text-2xl font-bold mb-2">
              {result.blocksRequired} Blocks
            </div>
            <div className="text-sm text-white/80">
              Block Size: {result.blockSize}
            </div>
            <div className="text-sm text-white/80">
              Wall Volume: {result.wallVolumeM3} m³
            </div>
          </div>
        ) : (
          <div className="text-white/60">
            Enter wall area and select block size to calculate
          </div>
        )}
      </div>
    </motion.div>
    )
}