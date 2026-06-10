import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { bscTestnet } from './chain';


export const wagmiConfig = getDefaultConfig({
  appName: 'Digidrops',
  projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID || '9f8846c4331cf3188597f7fa089d71c6',
  chains:  [bscTestnet],
  ssr: false,
});
