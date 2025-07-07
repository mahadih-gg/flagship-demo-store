'use client'

import { EntryPoint, EntryPointSize, EntryPointType } from '@thinkflagship/web-shorts';

interface ClientEntryPointProps {
  id: string;
  skeletonType: EntryPointType;
  skeletonSize: EntryPointSize;
}

const ClientEntryPoint = ({ id, skeletonType, skeletonSize }: ClientEntryPointProps) => {
  return (
    <EntryPoint
      id={id}
      skeletonType={skeletonType}
      skeletonSize={skeletonSize}
    />
  )
}

export default ClientEntryPoint