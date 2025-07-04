import { Button, Flex, Heading } from '@invoke-ai/ui-library';
import { InformationalPopover } from 'common/components/InformationalPopover/InformationalPopover';
import {
  useAddControlLayer,
  useAddInpaintMask,
  useAddNewRegionalGuidanceWithARefImage,
  useAddRasterLayer,
  useAddRegionalGuidance,
} from 'features/controlLayers/hooks/addLayerHooks';
import { useIsEntityTypeEnabled } from 'features/controlLayers/hooks/useIsEntityTypeEnabled';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PiPlusBold } from 'react-icons/pi';

export const CanvasAddEntityButtons = memo(() => {
  const { t } = useTranslation();
  const addInpaintMask = useAddInpaintMask();
  const addRegionalGuidance = useAddRegionalGuidance();
  const addRasterLayer = useAddRasterLayer();
  const addControlLayer = useAddControlLayer();
  const addRegionalReferenceImage = useAddNewRegionalGuidanceWithARefImage();
  const isRegionalGuidanceEnabled = useIsEntityTypeEnabled('regional_guidance');
  const isControlLayerEnabled = useIsEntityTypeEnabled('control_layer');
  const isInpaintLayerEnabled = useIsEntityTypeEnabled('inpaint_mask');

  return (
    <Flex w="full" h="full" justifyContent="center" gap={4}>
      <Flex position="relative" flexDir="column" gap={4} top="20%">
        <Flex flexDir="column" gap={2}>
          <Heading size="xs">{t('controlLayers.regional')}</Heading>
          <InformationalPopover feature="inpainting">
            <Button
              size="sm"
              variant="ghost"
              justifyContent="flex-start"
              leftIcon={<PiPlusBold />}
              onClick={addInpaintMask}
              isDisabled={!isInpaintLayerEnabled}
            >
              {t('controlLayers.inpaintMask')}
            </Button>
          </InformationalPopover>
          <InformationalPopover feature="regionalGuidance">
            <Button
              size="sm"
              variant="ghost"
              justifyContent="flex-start"
              leftIcon={<PiPlusBold />}
              onClick={addRegionalGuidance}
              isDisabled={!isRegionalGuidanceEnabled}
            >
              {t('controlLayers.regionalGuidance')}
            </Button>
          </InformationalPopover>
          <InformationalPopover feature="regionalReferenceImage">
            <Button
              size="sm"
              variant="ghost"
              justifyContent="flex-start"
              leftIcon={<PiPlusBold />}
              onClick={addRegionalReferenceImage}
              isDisabled={!isRegionalGuidanceEnabled}
            >
              {t('controlLayers.regionalReferenceImage')}
            </Button>
          </InformationalPopover>
        </Flex>
        <Flex flexDir="column" justifyContent="flex-start" gap={2}>
          <Heading size="xs">{t('controlLayers.layer_other')}</Heading>
          <InformationalPopover feature="controlNet">
            <Button
              size="sm"
              variant="ghost"
              justifyContent="flex-start"
              leftIcon={<PiPlusBold />}
              onClick={addControlLayer}
              isDisabled={!isControlLayerEnabled}
            >
              {t('controlLayers.controlLayer')}
            </Button>
          </InformationalPopover>
          <InformationalPopover feature="rasterLayer">
            <Button
              size="sm"
              variant="ghost"
              justifyContent="flex-start"
              leftIcon={<PiPlusBold />}
              onClick={addRasterLayer}
            >
              {t('controlLayers.rasterLayer')}
            </Button>
          </InformationalPopover>
        </Flex>
      </Flex>
    </Flex>
  );
});

CanvasAddEntityButtons.displayName = 'CanvasAddEntityButtons';
