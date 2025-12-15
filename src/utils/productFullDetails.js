import { label } from "framer-motion/client";

const productFullDetails = [
  {
    slug: "microbt-whatsminer-m60-172th",
    name: "MicroBT WhatsMiner M60 (172 Th/s)",

    overview: `The MicroBT WhatsMiner M60 (172 Th/s) is a next-generation SHA-256 ASIC miner engineered for Bitcoin (BTC) and Bitcoin Cash (BCH) mining. Delivering a powerful hashrate of 172 Th/s (±5%) with a low power consumption of 3,422 W (±5%), it achieves an exceptional energy efficiency of 19.895 J/Th — making it one of the most efficient Bitcoin miners of 2024.
Built with advanced 5 nm chip technology, the M60 ensures improved heat control, enhanced long-term reliability, and consistent mining output. Its dual-fan cooling system maintains optimal temperatures even under heavy workloads, ensuring stable performance for industrial-scale mining operations.
Compact, durable, and optimized for maximum profitability, the WhatsMiner M60 is a reliable choice for miners seeking long-term performance, efficiency, and uptime in demanding mining environments.`,

    specifications: [
      { label: "Manufacturer", value: "MicroBT" },
      { label: "Model", value: "WhatsMiner M60 (172 Th/s)" },
      { label: "Algorithm", value: "SHA-256" },
      { label: "Hashrate", value: "172 Th/s (±5%)" },
      { label: "Power Consumption", value: "3,422 W (±5%)" },
      { label: "Energy Efficiency", value: "19.895 J/Th" },
      { label: "Generation", value: "7th Generation – 2023" },
      { label: "Chip Size", value: "5 nm" },
      { label: "Cooling System", value: "Dual-fan air cooling" },
      { label: "Noise Level", value: "75 dB" },
      { label: "Network Connection", value: "Ethernet" },
      { label: "Power Supply", value: "Integrated PSU" },
      { label: "Input Voltage", value: "200 – 240 V AC" },
      { label: "Dimensions (L × W × H)", value: "430 × 155 × 226 mm" },
      { label: "Weight", value: "13.5 kg" },
      { label: "Operating Temperature", value: "–5 °C – 35 °C" },
      { label: "Humidity Range", value: "5% – 95% RH" },
      { label: "Release Date", value: "February 2024" },
    ],
  },
  {
    slug: "elphapex-dg1-plus-14gh",
    name: "ElphaPex DG1+ (14 Gh/s)",

    overview: `The ElphaPex DG1+ (14 Gh/s) is a high-performance Scrypt ASIC miner engineered for dual mining Litecoin (LTC) and Dogecoin (DOGE). Delivering 14 Gh/s (±3%) at a power draw of 3,920 W (±10%), it offers an impressive power efficiency of 0.28 J/Mh, making it one of the most efficient Scrypt miners in its class.
Built with industrial-grade durability, the DG1+ features a solid metal chassis and a powerful air-cooling system with four high-speed fans, ensuring stable performance and sustained thermal control during intensive mining operations. With a 75 dB noise output, it is designed for professional or hosted mining environments.
Thanks to its robust architecture, proven reliability, and competitive efficiency, the ElphaPex DG1+ (14 Gh/s) is an excellent choice for miners targeting long-term profitability through LTC and DOGE dual mining.`,

    specifications: [
      { label: "Manufacturer", value: "ElphaPex" },
      { label: "Model", value: "DG1+ (14 Gh/s)" },
      { label: "Algorithm", value: "Scrypt" },
      { label: "Hashrate", value: "14 Gh/s (±3%)" },
      { label: "Power Consumption", value: "3,920 W (±10%)" },
      { label: "Energy Efficiency", value: "0.28 J/Mh" },
      { label: "Generation", value: "5th Generation – 2021" },
      { label: "Cooling System", value: "Air-cooled with 4 fans" },
      { label: "Noise Level", value: "75 dB" },
      { label: "Network Connection", value: "RJ45 Ethernet 10/100 M" },
      { label: "Power Supply", value: "Integrated PSU" },
      { label: "Input Voltage", value: "200 – 240 V AC" },
      { label: "Dimensions (L × W × H)", value: "432 × 196 × 287 mm" },
      { label: "Weight", value: "18.3 kg" },
      { label: "Operating Temperature", value: "5 °C – 45 °C" },
      { label: "Humidity Range", value: "5% – 95% RH" },
      { label: "Release Date", value: "July 2024" },
    ],
  },
  {
    slug: "jingle-miner-btc-solo-lite-1-2th",
    name: "Jingle Miner BTC Solo Lite (1.2TH)",
    overview: `The Jingle Miner BTC Solo Lite (1.2TH/s) is a compact, ultra-efficient SHA-256d ASIC miner designed by JingleMining for solo or small-scale Bitcoin mining. It achieves a hashrate of 1.2 TH/s (±5%) while consuming only 23 W (±5%), delivering an exceptional energy efficiency of 19.17 J/TH making it one of the most power-efficient Bitcoin miners in its class.
Powered by the BM1370 ASIC chip, originally developed for the Antminer S21 Pro, the BTC Solo Lite brings industrial-level performance to a small plug-and-play device ideal for desktop mining setups.`,
    specifications: [
      { label: "Manufacturer", value: "JingleMining" },
      { label: "Model", value: "BTC Solo Lite (1.2 TH/s)" },
      { label: "Algorithm", value: "SHA-256d" },
      { label: "Hashrate", value: "1.2 TH/s (±5%)" },
      { label: "Power Consumption", value: "23 W (±5%)" },
      { label: "Energy Efficiency", value: "19.17 J/TH" },
      { label: "Input Voltage", value: "5 V DC" },
      { label: "Cooling System", value: "Silent air-cooling" },
      { label: "Noise Level", value: "Low-noise operation" },
      { label: "Dimensions (Net)", value: "114.4 × 66 × 58 mm" },
      { label: "Dimensions (Gross)", value: "170 × 152 × 92 mm" },
      { label: "Weight (Net)", value: "0.25 kg" },
      { label: "Weight (Gross)", value: "0.65 kg" },
      { label: "Accessory", value: "PSU (5V/5A) Power Cable with US, EU, UK, AU adapters" },
      { label: "Release Date", value: "2024" },
    ],
  },

  {
    slug: "goldshell-xt-box-sha3x-580ghs",
    overview: `The Goldshell XT-BOX (580 Gh/s) is a compact and efficient ASIC miner developed for the SHA3x algorithm, purpose-built to mine Tari (XTM). As the first-ever ASIC miner for SHA3x, it delivers exceptional performance with a hashrate of 580 Gh/s (±5%) while consuming only 400 W (±5%), resulting in an energy efficiency of 0.69 J/Gh.
Designed for quiet home or small-scale mining setups, the XT-BOX operates at just 35 dB, offering a silent and energy-saving solution for new-generation miners. Its dual-fan cooling system, WiFi and Ethernet connectivity, and plug-and-play setup make it easy to operate even for beginners.
With its low power consumption and stable performance, the Goldshell XT-BOX (580 Gh/s) provides an ideal balance of profitability, efficiency, and accessibility making it a top choice for those looking to enter the Tari mining ecosystem.
`,
    specifications: [
      { label: "Manufacturer", value: "Goldshell" },
      { label: "Model", value: "XT-BOX (580 Gh/s)" },
      { label: "Algorithm", value: "SHA3x" },
      { label: "Hashrate", value: "580 Gh/s (±5%)" },
      { label: "Power Consumption", value: "400 W (±5%)" },
      { label: "Energy Efficiency", value: "0.69 J/Gh" },
      { label: "Cooling System", value: "Dual-fan air cooling" },
      { label: "Noise Level", value: "35 dB" },
      { label: "Network Connection", value: "Ethernet / Wi-Fi" },
      { label: "Power Supply", value: "Integrated PSU" },
      { label: "Input Voltage", value: "110 – 240 V AC" },
      { label: "Dimensions", value: "198 × 150 × 95 mm" },
      { label: "Weight", value: "2.43 kg" },
      { label: "Operating Temperature", value: "5 °C – 35 °C" },
      { label: "Release Date", value: "September 2025" },
    ],
  },

  {
    slug: "canaan-avalon-q-90th",
    name: "Canaan Avalon Q (90 Th/s)",

    overview: `The Canaan Avalon Q (90 Th/s) is a highly efficient SHA-256 ASIC miner designed for Bitcoin (BTC) and other SHA-256 cryptocurrencies. Delivering 90 Th/s (±5%) at just 1,674 W (±5%), it achieves an impressive power efficiency of 0.019 J/Gh, making it one of the most efficient miners in its class.
Built using advanced 4 nm chip technology, the Avalon Q offers enhanced performance, low heat output, and reliable long-term operation. Its dual-fan air-cooling system ensures stable thermal management, while maintaining a remarkably quiet 45 dB noise level — significantly quieter than traditional industrial miners.
Compact, durable, and engineered for stability, the Avalon Q is an ideal choice for miners seeking energy-efficient Bitcoin mining hardware backed by Canaan's proven technology and engineering expertise.`,

    specifications: [
      { label: "Manufacturer", value: "Canaan" },
      { label: "Model", value: "Avalon Q (90 Th/s)" },
      { label: "Algorithm", value: "SHA-256" },
      { label: "Hashrate", value: "90 Th/s (±5%)" },
      { label: "Power Consumption", value: "1,674 W (±5%)" },
      { label: "Energy Efficiency", value: "0.019 J/Gh" },
      { label: "Generation", value: "7th Generation – 2023" },
      { label: "Chip Size", value: "4 nm" },
      { label: "Chip Count", value: "160" },
      { label: "Cooling System", value: "Air-cooled with 2 fans" },
      { label: "Noise Level", value: "45 dB" },
      { label: "Network Connection", value: "Ethernet / Wi-Fi" },
      { label: "Power Supply", value: "Integrated PSU" },
      { label: "Input Voltage", value: "110 – 240 V AC" },
      { label: "Dimensions (L × W × H)", value: "455 × 130 × 440 mm" },
      { label: "Weight", value: "10.5 kg" },
      { label: "Operating Temperature", value: "0 °C – 35 °C" },
      { label: "Humidity Range", value: "5% – 95% RH" },
      { label: "Release Date", value: "April 2025" },
    ],
  },

  {
    slug: "bitmain-antminer-l9-17gh",
    name: "Bitmain Antminer L9 (17 Gh/s)",

    overview: `The Bitmain Antminer L9 (17 Gh/s) is a high-efficiency Scrypt ASIC miner engineered for dual mining Litecoin (LTC) and Dogecoin (DOGE). Delivering 17 Gh/s (±5%) at only 3,570 W (±5%), it achieves an impressive energy efficiency of 0.21 J/Mh, offering an optimized balance of power and performance.
Built with Bitmain’s advanced chip architecture, the L9 ensures reliable 24/7 operation with a dual-fan air-cooling system that maintains optimal temperatures under heavy workloads. Compact and power-efficient, it is suitable for professional and mid-scale miners aiming for long-term profitability in the LTC + DOGE ecosystem.
With exceptional stability and efficiency, the Antminer L9 continues Bitmain’s legacy of industry-leading Scrypt mining hardware, designed for maximum returns and smooth operation in modern mining environments.`,

    specifications: [
      { label: "Manufacturer", value: "Bitmain" },
      { label: "Model", value: "Antminer L9 (17 Gh/s)" },
      { label: "Algorithm", value: "Scrypt" },
      { label: "Hashrate", value: "17 Gh/s (±5%)" },
      { label: "Power Consumption", value: "3,570 W (±5%)" },
      { label: "Energy Efficiency", value: "0.21 J/Mh" },
      { label: "Generation", value: "7th Generation – 2024" },
      { label: "Cooling System", value: "Air-cooled with 2 fans" },
      { label: "Noise Level", value: "75 dB" },
      { label: "Network Connection", value: "Ethernet" },
      { label: "Power Supply", value: "Integrated PSU" },
      { label: "Input Voltage", value: "200 – 240 V AC" },
      { label: "Dimensions (L × W × H)", value: "195 × 290 × 379 mm" },
      { label: "Weight", value: "13.5 kg" },
      { label: "Operating Temperature", value: "5 °C – 45 °C" },
      { label: "Humidity Range", value: "5% – 95% RH" },
      { label: "Release Date", value: "May 2024" },
    ],
  },
  {
    slug: "iceriver-kas-ks7-30th",
    name: "IceRiver KAS KS7 (30 Th/s)",
    overview: `The IceRiver KAS KS7 (30 Th/s) is a powerful ASIC miner engineered for the kHeavyHash algorithm, purpose-built to mine Kaspa (KAS) and compatible coins. Delivering an exceptional hashrate of 30 Th/s (±5%) at a power consumption of 3,500 W (±5%), it achieves an outstanding energy efficiency of 0.117 J/Gh.

Designed for professional mining environments, the KS7 features robust air cooling with four high-speed fans and reliable components for stable 24/7 operation. With low noise levels and durable build, the KS7 stands out as one of the most dependable and profitable Kaspa miners in 2025.`,
    specifications: [
      { label: "Manufacturer", value: "IceRiver" },
      { label: "Model", value: "KAS KS7 (30 Th/s)" },
      { label: "Algorithm", value: "kHeavyHash" },
      { label: "Hashrate", value: "30 Th/s (±5%)" },
      { label: "Power Consumption", value: "3,500 W (±5%)" },
      { label: "Energy Efficiency", value: "0.117 J/Gh" },
      { label: "Generation", value: "5th Generation – 2025" },
      { label: "Cooling System", value: "Air-cooled with 4 fans" },
      { label: "Noise Level", value: "75 dB" },
      { label: "Network Connection", value: "Ethernet" },
      { label: "Power Supply", value: "Integrated PSU" },
      { label: "Input Voltage", value: "200 - 250 V AC" },
      { label: "Dimensions", value: "430 × 195 × 290 mm" },
      { label: "Weight", value: "17.5 kg" },
      { label: "Operating Temperature", value: "5 °C – 40 °C" },
      { label: "Humidity Range", value: "10 % – 90 % RH" },
      { label: "Release Date", value: "April 2025" },
    ],
  },
  {
    slug: "bitmain-antminer-ks7-40th",
    name: "Bitmain Antminer KS7 (40 Th/s)",
    overview: `The Bitmain Antminer KS7 (40 Th/s) is a high-performance ASIC miner built for the kHeavyHash algorithm, optimized for Kaspa (KAS). Delivering 40 Th/s (±5%) at 3,080 W, it achieves 0.077 J/Gh efficiency — making it one of the most power-efficient Kaspa miners available.

With Bitmain’s advanced ASIC technology, four-fan cooling system, and stable 24/7 operation, the KS7 stands among the most profitable Kaspa mining rigs in 2025.`,
    specifications: [
      { label: "Manufacturer", value: "Bitmain" },
      { label: "Model", value: "Antminer KS7 (40 Th/s)" },
      { label: "Algorithm", value: "kHeavyHash" },
      { label: "Hashrate", value: "40 Th/s (±5%)" },
      { label: "Power Consumption", value: "3,080 W (±5%)" },
      { label: "Energy Efficiency", value: "0.077 J/Gh" },
      { label: "Generation", value: "6th Generation – 2025" },
      { label: "Cooling System", value: "Air-cooled with 4 fans" },
      { label: "Noise Level", value: "75 dB" },
      { label: "Network Connection", value: "Ethernet" },
      { label: "Power Supply", value: "Integrated PSU" },
      { label: "Input Voltage", value: "220 – 277 V AC" },
      { label: "Dimensions", value: "430 × 196 × 290 mm" },
      { label: "Weight", value: "16.4 kg" },
      { label: "Operating Temperature", value: "5 °C – 45 °C" },
      { label: "Humidity Range", value: "10 % – 90 % RH" },
      { label: "Release Date", value: "May 2025" },
    ],
  },
  {
    slug: "bitmain-antminer-ks5-20th",
    name: "Bitmain Antminer KS5 (20 Th/s)",

    overview: `The Bitmain Antminer KS5 (20 Th/s) is a high-performance ASIC miner designed for the kHeavyHash algorithm and optimized for Kaspa (KAS) mining. Delivering 20 Th/s (±5%) at a power draw of 3,000 W (±5%), it achieves an energy efficiency of 0.15 J/Gh, offering a strong balance between speed and power efficiency.
Built with Bitmain’s advanced chip architecture, the KS5 ensures stable 24/7 operation and strong durability for long-term mining. Its dual-fan air-cooling system provides effective heat management, maintaining stable performance under continuous workloads. With a compact industrial design and reliable performance, the Antminer KS5 is an excellent choice for miners scaling into the Kaspa ecosystem or expanding existing operations.`,

    specifications: [
      { label: "Manufacturer", value: "Bitmain" },
      { label: "Model", value: "Antminer KS5 (20 Th/s)" },
      { label: "Algorithm", value: "kHeavyHash" },
      { label: "Hashrate", value: "20 Th/s (±5%)" },
      { label: "Power Consumption", value: "3,000 W (±5%)" },
      { label: "Energy Efficiency", value: "0.15 J/Gh" },
      { label: "Generation", value: "4th Generation – 2024" },
      { label: "Cooling System", value: "Air-cooled with 2 fans" },
      { label: "Noise Level", value: "75 dB" },
      { label: "Network Connection", value: "Ethernet" },
      { label: "Power Supply", value: "Integrated PSU" },
      { label: "Input Voltage", value: "200 – 240 V AC" },
      { label: "Dimensions (L × W × H)", value: "195 × 290 × 430 mm" },
      { label: "Weight", value: "16.1 kg" },
      { label: "Operating Temperature", value: "5 °C – 45 °C" },
      { label: "Humidity Range", value: "5% – 95% RH" },
      { label: "Release Date", value: "March 2024" },
    ],
  },
  {
    slug: "bitmain-antminer-s19k-pro-120th",
    name: "Bitmain Antminer S19k Pro (120 Th/s)",

    overview: `The Bitmain Antminer S19k Pro (120 Th/s) is a powerful and reliable SHA-256 ASIC miner engineered for Bitcoin (BTC) and other SHA-256-based cryptocurrencies. Delivering a hashrate of 120 Th/s (±5%) at a power draw of 2,760 W (±5%), it achieves a competitive energy efficiency of 23 J/Th, ensuring optimal performance with lower electricity costs.
Built for professional and industrial mining environments, the S19k Pro features four high-speed fans for efficient heat management and stable 24/7 operation. With Bitmain’s proven ASIC architecture and durable build quality, it offers long-term operational stability and sustained mining profitability.
Compact, efficient, and easy to deploy, the Antminer S19k Pro remains one of the most cost-effective Bitcoin miners — balancing performance, energy efficiency, and reliability for both large-scale and small-scale mining operations.`,

    specifications: [
      { label: "Manufacturer", value: "Bitmain" },
      { label: "Model", value: "Antminer S19k Pro (120 Th/s)" },
      { label: "Algorithm", value: "SHA-256" },
      { label: "Hashrate", value: "120 Th/s (±5%)" },
      { label: "Power Consumption", value: "2,760 W (±5%)" },
      { label: "Energy Efficiency", value: "23 J/Th" },
      { label: "Generation", value: "6th Generation – 2020" },
      { label: "Cooling System", value: "Air-cooled with 4 fans" },
      { label: "Noise Level", value: "75 dB" },
      { label: "Network Connection", value: "Ethernet" },
      { label: "Power Supply", value: "Integrated PSU" },
      { label: "Input Voltage", value: "200 – 240 V AC" },
      { label: "Dimensions (L × W × H)", value: "195 × 290 × 370 mm" },
      { label: "Weight", value: "13.2 kg" },
      { label: "Operating Temperature", value: "5 °C – 45 °C" },
      { label: "Humidity Range", value: "5% – 95% RH" },
      { label: "Release Date", value: "April 2023" },
    ],
  },
  {
    slug: "bitmain-antminer-s21-xp-hyd-473th",
    name: "Bitmain Antminer S21 XP Hyd (473 Th/s)",

    overview: `The Bitmain Antminer S21 XP Hyd (473 Th/s) is a next-generation hydro-cooled ASIC miner built for the SHA-256 algorithm, optimized for Bitcoin (BTC) and other SHA-256 cryptocurrencies. Delivering a remarkable hashrate of 473 Th/s (±5%) at a power draw of 5,676 W (±5%), it achieves industry-leading energy efficiency of 12 J/Th, setting a new standard in high-performance Bitcoin mining.
Equipped with Bitmain’s advanced hydro-cooling system, the S21 XP Hyd ensures exceptional thermal regulation, dramatically reducing heat and noise while maintaining continuous peak performance. Operating at only 50 dB, it stands among the quietest miners in its class.
Engineered for industrial-scale mining operations, this miner combines top-tier efficiency, durability, and cooling innovation — making the Antminer S21 XP Hyd (473 Th/s) one of the most advanced and profitable Bitcoin mining solutions available in 2025.`,

    specifications: [
      { label: "Manufacturer", value: "Bitmain" },
      { label: "Model", value: "Antminer S21 XP Hyd (473 Th/s)" },
      { label: "Algorithm", value: "SHA-256" },
      { label: "Hashrate", value: "473 Th/s (±5%)" },
      { label: "Power Consumption", value: "5,676 W (±5%)" },
      { label: "Energy Efficiency", value: "12 J/Th" },
      { label: "Generation", value: "8th Generation – 2024" },
      { label: "Cooling System", value: "Hydro-cooling" },
      { label: "Noise Level", value: "50 dB" },
      { label: "Network Connection", value: "Ethernet" },
      { label: "Power Supply", value: "Integrated PSU" },
      { label: "Input Voltage", value: "200 – 240 V AC" },
      { label: "Dimensions (L × W × H)", value: "410 × 170 × 209 mm" },
      { label: "Weight", value: "17.5 kg (approx.)" },
      { label: "Operating Temperature", value: "5 °C – 45 °C" },
      { label: "Humidity Range", value: "5% – 95% RH" },
      { label: "Release Date", value: "November 2024" },
    ],
  },
  {
    slug: "bitmain-antminer-s21-235th",
    name: "Bitmain Antminer S21+ (235 Th/s)",

    overview: `The Bitmain Antminer S21+ (235 Th/s) is a high-performance SHA-256 ASIC miner designed for efficient Bitcoin (BTC) and Bitcoin Cash (BCH) mining. Delivering an exceptional hashrate of 235 Th/s (±5%) at a power consumption of 3,877 W (±5%), it achieves an excellent energy efficiency of 16.498 J/Th, making it one of the most advanced air-cooled miners in its class.
Built with Bitmain’s latest chip architecture, the S21+ offers outstanding thermal management and long-term stability. Its dual high-speed fan system ensures optimal cooling even during extended operations, maintaining reliable performance across varying environmental conditions.
Compact, durable, and optimized for maximum efficiency, the Antminer S21+ (235 Th/s) delivers an ideal balance of power and profitability — perfect for both industrial and professional Bitcoin miners in 2025.`,

    specifications: [
      { label: "Manufacturer", value: "Bitmain" },
      { label: "Model", value: "Antminer S21+ (235 Th/s)" },
      { label: "Algorithm", value: "SHA-256" },
      { label: "Hashrate", value: "235 Th/s (±5%)" },
      { label: "Power Consumption", value: "3,877 W (±5%)" },
      { label: "Energy Efficiency", value: "16.498 J/Th" },
      { label: "Generation", value: "7th Generation – 2023" },
      { label: "Cooling System", value: "Air-cooled with 2 fans" },
      { label: "Noise Level", value: "75 dB" },
      { label: "Network Connection", value: "Ethernet" },
      { label: "Power Supply", value: "Integrated PSU" },
      { label: "Input Voltage", value: "200 – 240 V AC" },
      { label: "Dimensions (L × W × H)", value: "400 × 195 × 290 mm" },
      { label: "Weight", value: "15.5 kg (approx.)" },
      { label: "Operating Temperature", value: "10 °C – 40 °C" },
      { label: "Humidity Range", value: "10 % – 90 % RH" },
      { label: "Release Date", value: "June 2025" },
    ],
  },
  {
    slug: "bitmain-antminer-s21-plus-216th",
    productName: "Bitmain Antminer S21+ (216Th)",
    overview: `The Bitmain Antminer S21+ (216 Th/s) is a next-generation SHA-256 ASIC miner engineered for efficient Bitcoin (BTC) and Bitcoin Cash (BCH) mining. Delivering a hashrate of 216 Th/s (±5%) with a power consumption of 3,564 W (±10%), it achieves a strong energy efficiency of 16.5 J/Th, balancing high performance and power savings for modern mining farms.
Equipped with Bitmain’s latest ASIC architecture, the S21+ provides excellent reliability, improved heat management, and consistent 24/7 operation. Its dual-fan cooling system ensures optimal airflow while maintaining a stable noise level of 75 dB, making it ideal for both large scale and professional miners.
Compact, durable, and built for maximum profitability, the Antminer S21+ (216 Th/s) stands out as one of the most efficient SHA-256 miners available in 2025, a smart investment for miners looking for performance and longevity.`,

    specifications: [
      { label: "Manufacturer", value: "Bitmain" },
      { label: "Model", value: "Antminer S21+ (216 Th/s)" },
      { label: "Algorithm", value: "SHA-256" },
      { label: "Hashrate", value: "216 Th/s (±5%)" },
      { label: "Power Consumption", value: "3,564 W (±10%)" },
      { label: "Energy Efficiency", value: "16.5 J/Th" },
      { label: "Generation", value: "7th Generation – 2023" },
      { label: "Cooling System", value: "Air-cooled with 2 fans" },
      { label: "Noise Level", value: "75 dB" },
      { label: "Network Connection", value: "Ethernet" },
      { label: "Power Supply", value: "Integrated PSU" },
      { label: "Input Voltage", value: "200 – 240 V AC" },
      { label: "Dimensions (L × W × H)", value: "400 × 195 × 290 mm" },
      { label: "Weight", value: "15.5 kg (approx.)" },
      { label: "Operating Temperature", value: "10 °C – 40 °C" },
      { label: "Humidity Range", value: "10% – 90% RH" },
      { label: "Release Date", value: "February 2025" },
    ],
  },

  {
    slug: "bitmain-antminer-s21-pro-234th",
    productName: "Bitmain Antminer S21 Pro (234 Th/s)",
    overview: `The Bitmain Antminer S21 Pro (234 Th/s) is an advanced SHA-256 ASIC miner engineered for high-efficiency Bitcoin (BTC) and Bitcoin Cash (BCH) mining. With a maximum hashrate of 234 Th/s (±5%) and a power consumption of 3,510 W (±5%), it achieves an outstanding energy efficiency of 15 J/Th, setting a new benchmark for air-cooled mining machines.

Powered by Bitmain’s enhanced ASIC chip design, the S21 Pro delivers stable performance and optimized power efficiency for long-term mining operations. Its dual-fan cooling system ensures superior airflow and thermal balance, while the sturdy build supports consistent uptime even in demanding environments.

The Antminer S21 Pro (234 Th/s) is a top-tier solution for industrial and professional miners seeking maximum profitability, long-lasting durability, and cutting-edge performance in 2025.`,

    specifications: [
      { label: "Manufacturer", value: "Bitmain" },
      { label: "Model", value: "Antminer S21 Pro (234 Th/s)" },
      { label: "Algorithm", value: "SHA-256" },
      { label: "Hashrate", value: "234 Th/s (±5%)" },
      { label: "Power Consumption", value: "3,510 W (±5%)" },
      { label: "Energy Efficiency", value: "15 J/Th" },
      { label: "Generation", value: "7th Generation - 2023" },
      { label: "Cooling System", value: "Air-cooled with 2 fans" },
      { label: "Noise Level", value: "75 dB" },
      { label: "Network Connection", value: "Ethernet" },
      { label: "Power Supply", value: "Integrated PSU" },
      { label: "Input Voltage", value: "200 – 240 V AC" },
      { label: "Dimensions", value: "400 × 195 × 290 mm" },
      { label: "Weight", value: "15.5 kg (approx.)" },
      { label: "Operating Temperature", value: "5 °C – 45 °C" },
      { label: "Humidity Range", value: "5 % – 95 % RH" },
      { label: "Release Date", value: "July 2024" },
    ],
  },
  {
    slug: "bitmain-antminer-l7-9-5gh",
    productName: "Bitmain Antminer L7 (9.5 Gh/s)",
    overview: `The Bitmain Antminer L7 (9.5 Gh/s) is a high-efficiency Scrypt ASIC miner designed for mining Litecoin (LTC) and Dogecoin (DOGE) simultaneously. Delivering a hashrate of 9.5 Gh/s (±5%) while consuming 3,425 W (±5%), it achieves an impressive energy efficiency of 0.361 J/Mh, making it one of the most profitable and reliable dual mining machines on the market.
Powered by Bitmain’s proven ASIC chip architecture, the L7 provides consistent 24/7 performance and long-term durability. Its quad-fan cooling system ensures optimal temperature control during extended mining sessions, while maintaining stable output under various environmental conditions.
With its strong balance of power, efficiency, and profitability, the Antminer L7 (9.5Gh/s) remains the top choice for Litecoin and Dogecoin miners seeking dependable performance and efficient energy use in 2025.
`,

    specifications: [
      { label: "Manufacturer", value: "Bitmain" },
      { label: "Model", value: "Antminer L7 (9.5Gh/s)" },
      { label: "Algorithm", value: "Scrypt" },
      { label: "Hashrate", value: "9.5Gh/s (±5%)" },
      { label: "Power Consumption", value: "3,425 W (±5%)" },
      { label: "Energy Efficiency", value: "0.361 J/Mh" },
      { label: "Generation", value: "5th Generation – 2021" },
      { label: "Cooling System", value: "Air-cooled with 4 fans" },
      { label: "Noise Level", value: "75 dB" },
      { label: "Network Connection", value: "Ethernet" },
      { label: "Power Supply", value: "Integrated PSU" },
      { label: "Input Voltage", value: "200 – 240 V AC" },
      { label: "Dimensions", value: "195 × 290 × 370 mm" },
      { label: "Weight", value: "15 kg" },
      { label: "Operating Temperature", value: "5 °C - 45 °C" },
      { label: "Humidity Range", value: "5 % - 95 % RH" },
      { label: "Release Date", value: "November 2021" },
    ],
  },
  {
    slug: "bitmain-antminer-l9-16gh",
    productName: "Bitmain Antminer L9 (16 Gh/s)",
    overview: `The Bitmain Antminer L9 (16Gh/s) is a high-performance Scrypt ASIC miner purpose-built for Litecoin (LTC) and Dogecoin (DOGE) dual mining. Delivering a hashrate of 16Gh/s (±5%) while consuming just 3,360 W (±5%), it achieves an excellent energy efficiency of 0.21 J/Mh, providing outstanding profitability and long-term stability for miners.
Equipped with Bitmain’s advanced ASIC chip design, the L9 ensures superior efficiency, heat control, and continuous operation. Its dual-fan air cooling system keeps performance consistent while maintaining a manageable 75 dB noise level, making it ideal for both professional and industrial setups.
With its combination of high hashrate, strong durability, and low power cost, the Antminer L9 (16Gh/s) stands among the most efficient LTC + DOGE miners of 2025, a solid choice for miners focused on maximizing return and reliability.
`,

    specifications: [
      { label: "Manufacturer", value: "Bitmain" },
      { label: "Model", value: "Antminer L9 (16Gh/s)" },
      { label: "Algorithm", value: "Scrypt" },
      { label: "Hashrate", value: "16Gh/s (±5%)" },
      { label: "Power Consumption", value: "3,360 W (±5%)" },
      { label: "Energy Efficiency", value: "0.21 J/Mh" },
      { label: "Generation", value: "7th Generation - 2024" },
      { label: "Cooling System", value: "Air-cooled with 2 fans" },
      { label: "Noise Level", value: "75 dB" },
      { label: "Network Connection", value: "Ethernet" },
      { label: "Power Supply", value: "Integrated PSU" },
      { label: "Input Voltage", value: "200 – 240 V AC" },
      { label: "Dimensions", value: "195 × 290 × 379 mm" },
      { label: "Weight", value: "13.5 kg" },
      { label: "Operating Temperature", value: "5 °C - 45 °C" },
      { label: "Humidity Range", value: "5 % - 95 % RH" },
      { label: "Release Date", value: "May 2024" },
    ],
  },
  {
    slug: "bitmain-antminer-ks5-pro-21th",
    productName: "Bitmain Antminer KS5 Pro (21 Th/s)",
    overview: `The Bitmain Antminer KS5 Pro (21Th/s) is a next-generation KHeavyHash ASIC miner purpose-built for mining Kaspa (KAS). Engineered for stability and power efficiency, it delivers a hashrate of 21Th/s (±5%) while drawing just 3,150 W (±5%), achieving a top-tier energy efficiency of 0.15 J/Gh.
Designed on Bitmain’s latest ASIC architecture, the KS5 Pro ensures consistent performance, low downtime, and reduced thermal load. Its dual-fan air-cooling system provides optimal airflow, allowing 24/7 reliability even under high intensity mining conditions.
Compact yet powerful, the Antminer KS5 Pro is ideal for both small-scale and industrial miners seeking a cost efficient Kaspa solution with trusted Bitmain build quality.
`,
    specifications: [
      { label: "Manufacturer", value: "Bitmain" },
      { label: "Model", value: "Antminer KS5 Pro (21Th/s)" },
      { label: "Algorithm", value: "KHeavyHash" },
      { label: "Hashrate", value: "21Th/s (±5%)" },
      { label: "Power Consumption", value: "3,150 W (±5%)" },
      { label: "Energy Efficiency", value: "0.15 J/Gh" },
      { label: "Generation", value: "4th Generation – 2024" },
      { label: "Cooling System", value: "Air-cooled with 2 fans" },
      { label: "Noise Level", value: "75 dB" },
      { label: "Network Connection", value: "Ethernet" },
      { label: "Power Supply", value: "Integrated PSU" },
      { label: "Input Voltage", value: "200 – 240 V AC" },
      { label: "Dimensions", value: "195 × 290 × 430 mm" },
      { label: "Weight", value: "16.1 kg" },
      { label: "Operating Temperature", value: "5 °C - 45 °C" },
      { label: "Humidity Range", value: "5 % - 95 % RH" },
      { label: "Release Date", value: "March 2024" },
    ],
  },
  {
    slug: "bitmain-antminer-al1-pro-16-6th",
    productName: "Bitmain Antminer AL1 Pro (16.6Th)",
    overview: `The Bitmain Antminer AL1 Pro (16.6Th/s) is a high-efficiency Blake3 ASIC miner built for mining Alephium (ALPH). It delivers a maximum hashrate of 16.6 Th/s (±5%) while consuming 3,730 W (±5%), resulting in an excellent energy efficiency of 0.225 J/Gh.
Crafted with Bitmain’s latest ASIC engineering, the AL1 Pro combines powerful performance, energy savings, and stability for continuous 24/7 operation. Its advanced air-cooling system with four high-speed fans ensures optimal thermal control even under heavy workloads, maintaining performance consistency and hardware longevity.
With its blend of cutting-edge power optimization, strong build quality, and high throughput, the Antminer AL1 Pro stands out as one of the best choices for Alephium miners in 2025.
`,
    specifications: [
      { label: "Manufacturer", value: "Bitmain" },
      { label: "Model", value: "Antminer AL1 Pro (16.6Th/s)" },
      { label: "Algorithm", value: "Blake3" },
      { label: "Hashrate", value: "16.6 Th/s (±5%)" },
      { label: "Power Consumption", value: "3,730 W (±5%)" },
      { label: "Energy Efficiency", value: "0.225 J/Gh" },
      { label: "Generation", value: "2nd Generation - 2024" },
      { label: "Cooling System", value: "Air-cooled with 4 fans" },
      { label: "Noise Level", value: "75 dB" },
      { label: "Network Connection", value: "Ethernet" },
      { label: "Power Supply", value: "Integrated PSU" },
      { label: "Input Voltage", value: "220 – 270 V AC" },
      { label: "Dimensions", value: "195 × 290 × 400 mm" },
      { label: "Weight", value: "13.6 kg" },
      { label: "Operating Temperature", value: "5 °C - 45 °C" },
      { label: "Humidity Range", value: "5 % - 95 % RH" },
      { label: "Release Date", value: "September 2024" },
    ],
  },
];

export default productFullDetails;
