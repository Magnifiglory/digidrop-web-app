'use client';

import { Button } from '@/components/ui/button';
import { DigiPass } from '@/types/response-type';
import { useUserStore } from '@/store/useUserProfile';
import MintButton from './mintButton';
import UpgradeButton from './upgradeButton';

type Props = {
  pass: DigiPass;
};

export default function PassActionButton({ pass }: Props) {
  const { profile } = useUserStore();

  // User has no pass → Mint
  if (!profile?.has_pass) {
    return <MintButton pass={pass} />;
  }

  const currentPower = profile?.current_pass_power;
  const isCurrent = profile?.current_pass_id === pass.id;
  const isUpgrade = pass.point_power > currentPower;
  // Current pass
  if (isCurrent) {
    return (
      <Button disabled className="w-auto mx-auto px-8 py-2 rounded-xl block text-sm font-semibold font-chakra">
        Current Pass
      </Button>
    );
  }

  // Upgrade
  if (isUpgrade) {
    return (
      <UpgradeButton pass={pass}  />
    );
  }

  // Lower pass → disabled
  
  return (
    <Button disabled className="w-auto mx-auto px-8 py-2 rounded-xl block text-sm font-semibold font-chakra opacity-50">
      Lower Tier Pass
    </Button>
  );
}
