'use client'

import Lottie from 'lottie-react'
import { LottieAnimationProps } from '@/Types/HelperProps'

const LottieAnimation: React.FC<LottieAnimationProps> = ({
    animationPath,
    width,
}) => {
    return <Lottie animationData={animationPath} />
}

export default LottieAnimation
