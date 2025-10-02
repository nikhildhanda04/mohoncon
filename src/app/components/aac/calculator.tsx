'use client'
import { useState } from "react";
import { motion } from "framer-motion";

type BlockSize = {
  value: string;
  label: string;
  cbm: number; // volume of one block in m³
};

type Result = {
  blocksRequired: number;
  wallVolumeM3: string;
  blockSize: string;
  requiredBlockCBM: string;
} | null;

export default function Calculator() {
  const [wallArea, setWallArea] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('600X200X075');
  const [result, setResult] = useState<Result>(null);

  const blockSizes: BlockSize[] = [
    { value: '600X200X050', label: '600X200X050', cbm: 0.006 },
    { value: '600X200X075', label: '600X200X075', cbm: 0.009 },
    { value: '600X200X100', label: '600X200X100', cbm: 0.012 },
    { value: '600X200X125', label: '600X200X125', cbm: 0.015 },
    { value: '600X200X150', label: '600X200X150', cbm: 0.018 },
    { value: '600X200X175', label: '600X200X175', cbm: 0.021 },
    { value: '600X200X200', label: '600X200X200', cbm: 0.024 },
    { value: '600X200X225', label: '600X200X225', cbm: 0.027 },
    { value: '600X200X250', label: '600X200X250', cbm: 0.030 },
    { value: '600X200X275', label: '600X200X275', cbm: 0.033 },
    { value: '600X200X300', label: '600X200X300', cbm: 0.036 },
    // Additional block sizes
    { value: '625X200X200', label: '625X200X200', cbm: 0.025 },
    { value: '625X240X200', label: '625X240X200', cbm: 0.030 },
    { value: '625X250X200', label: '625X250X200', cbm: 0.031 },
    { value: '625X300X200', label: '625X300X200', cbm: 0.038 },
    { value: '625X200X100', label: '625X200X100', cbm: 0.0125 },
    { value: '625X240X100', label: '625X240X100', cbm: 0.015 },
    { value: '625X250X100', label: '625X250X100', cbm: 0.0156 },
    { value: '625X300X100', label: '625X300X100', cbm: 0.0188 }
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

    // Calculate wall thickness in meters from block size (third part, in mm)
    const thickness = parseInt(selectedSize.split('X')[2]) / 1000; // mm to m

    // Calculate wall volume in m³
    const wallVolume = wallAreaM2 * thickness;

    // Calculate number of blocks required (wall volume / block volume)
    const blocksRequired = Math.ceil(wallVolume / selectedBlock.cbm);

    // Calculate required block volume in cbm
    const requiredBlockCBM = (blocksRequired * selectedBlock.cbm).toFixed(3);

    setResult({
      blocksRequired: blocksRequired,
      wallVolumeM3: wallVolume.toFixed(3),
      blockSize: selectedBlock.label,
      requiredBlockCBM: requiredBlockCBM
    });
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0, filter: 'blur(10px)' }}
      whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="bg-primary rounded-3xl p-8 md:w-md mt-20 text-white"
    >
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
        className="w-full bg-lime-400 hover:bg-lime-500 text-white font-semibold text-xs md:text-base py-4 rounded-xl transition-colors duration-200 mb-6"
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
            <div className="text-sm text-white/80">
              Required Block (in cbm): {result.requiredBlockCBM} m³
            </div>
          </div>
        ) : (
          <div className="text-white/60">
            Enter wall area and select block size to calculate
          </div>
        )}
      </div>
    </motion.div>
  );
}